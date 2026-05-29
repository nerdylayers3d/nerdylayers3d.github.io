#!/bin/bash
# Deploy the local website/ to the nerdylayers3d.github.io repo, which triggers
# a Cloudflare Workers rebuild.
#
# Usage:  bash scripts/deploy.sh [commit-message]
#
# Steps:
#   1. Run the vault-to-site sync so content/ and public/assets/ are up to date.
#   2. Clone (or pull) the deploy repo into a scratch dir.
#   3. Mirror website/ files into it (excluding node_modules, dist, .astro).
#   4. Commit + push.

set -euo pipefail

WEBSITE_ROOT="$(cd "$(dirname "$0")/.." && pwd)"
DEPLOY_REPO_URL="https://github.com/nerdylayers3d/nerdylayers3d.github.io.git"
DEPLOY_SCRATCH="${DEPLOY_SCRATCH:-/tmp/nerdylayers-deploy}"

COMMIT_MSG="${1:-Content update from vault}"

echo "[1/4] Syncing vault content into website/"
bash "$WEBSITE_ROOT/scripts/sync-content.sh"

echo "[2/4] Refreshing deploy clone at $DEPLOY_SCRATCH"
if [ -d "$DEPLOY_SCRATCH/.git" ]; then
  git -C "$DEPLOY_SCRATCH" fetch --quiet origin main
  git -C "$DEPLOY_SCRATCH" reset --hard --quiet origin/main
else
  rm -rf "$DEPLOY_SCRATCH"
  git clone --quiet "$DEPLOY_REPO_URL" "$DEPLOY_SCRATCH"
fi

echo "[3/4] Mirroring website/ → $DEPLOY_SCRATCH (excluding build artifacts)"
rsync -a --delete \
  --exclude '.git' \
  --exclude 'node_modules' \
  --exclude 'dist' \
  --exclude '.astro' \
  --exclude '.DS_Store' \
  --exclude '_screenshots' \
  --exclude '.wrangler' \
  "$WEBSITE_ROOT/" "$DEPLOY_SCRATCH/"

echo "[4/4] Committing and pushing"
cd "$DEPLOY_SCRATCH"
if [ -z "$(git status --porcelain)" ]; then
  echo "  No changes to deploy."
  exit 0
fi
git add -A
git commit --quiet -m "$COMMIT_MSG"
git push --quiet
echo "  Pushed. Cloudflare will rebuild automatically."
echo
echo "Live site:  https://nerdylayers3d.com/"
echo "Worker URL: https://nerdy-layers-3d.cold-waterfall-07d6.workers.dev/"
