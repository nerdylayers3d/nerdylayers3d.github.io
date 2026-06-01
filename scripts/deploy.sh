#!/bin/bash
# Deploy the local website/ build straight to Cloudflare via `wrangler deploy`.
#
# We bypass the GitHub → Cloudflare Workers Builds webhook because that build
# runner has historically produced broken artifacts for this site (Astro's
# content-collection glob loader silently picks up zero files on the Linux
# builder even when the same code builds fine locally). Pushing the local
# dist/ directly is faster and reliable.
#
# We still mirror the source into the nerdylayers3d.github.io repo as a public
# read-only snapshot for posterity, but the live site is updated by wrangler,
# not by the webhook.
#
# Usage:  bash scripts/deploy.sh [commit-message]

set -euo pipefail

WEBSITE_ROOT="$(cd "$(dirname "$0")/.." && pwd)"
DEPLOY_REPO_URL="https://github.com/nerdylayers3d/nerdylayers3d.github.io.git"
DEPLOY_SCRATCH="${DEPLOY_SCRATCH:-/tmp/nerdylayers-deploy}"

COMMIT_MSG="${1:-Content update from vault}"

cd "$WEBSITE_ROOT"

echo "[1/5] Syncing vault content into website/"
bash "$WEBSITE_ROOT/scripts/sync-content.sh"

echo "[2/5] Building site (astro build)"
npm run build --silent

echo "[3/5] Deploying to Cloudflare (wrangler deploy)"
npx wrangler deploy

echo "[4/5] Refreshing GitHub mirror at $DEPLOY_SCRATCH"
if [ -d "$DEPLOY_SCRATCH/.git" ]; then
  git -C "$DEPLOY_SCRATCH" fetch --quiet origin main
  git -C "$DEPLOY_SCRATCH" reset --hard --quiet origin/main
else
  rm -rf "$DEPLOY_SCRATCH"
  git clone --quiet "$DEPLOY_REPO_URL" "$DEPLOY_SCRATCH"
fi

rsync -a --delete \
  --exclude '.git' \
  --exclude 'node_modules' \
  --exclude 'dist' \
  --exclude '.astro' \
  --exclude '.DS_Store' \
  --exclude '_screenshots' \
  --exclude '.wrangler' \
  "$WEBSITE_ROOT/" "$DEPLOY_SCRATCH/"

echo "[5/5] Committing and pushing source mirror"
cd "$DEPLOY_SCRATCH"
if [ -z "$(git status --porcelain)" ]; then
  echo "  No source changes to push (live site already updated via wrangler)."
else
  git add -A
  git commit --quiet -m "$COMMIT_MSG"
  git push --quiet
  echo "  Source mirror pushed."
fi
echo
echo "Live site:  https://nerdylayers3d.com/"
echo "Worker URL: https://nerdy-layers-3d.cold-waterfall-07d6.workers.dev/"
