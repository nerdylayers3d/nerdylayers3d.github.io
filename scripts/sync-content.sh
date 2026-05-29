#!/bin/bash
set -euo pipefail

VAULT_ROOT="$(cd "$(dirname "$0")/../.." && pwd)"
WEBSITE_ROOT="$(cd "$(dirname "$0")/.." && pwd)"

ROBOTS_SRC="$VAULT_ROOT/Robotics"
SOFTWARE_SRC="$VAULT_ROOT/Software"
CLIPPINGS_SRC="$VAULT_ROOT/Clippings"
VAULT_RESOURCES="$VAULT_ROOT/_resources"

ROBOTS_DEST="$WEBSITE_ROOT/src/content/robots"
COMPONENTS_DEST="$WEBSITE_ROOT/src/content/components"
ASSETS_DEST="$WEBSITE_ROOT/public/assets"

# Folders under Robotics/ that are NOT robots (leagues, events, etc.) — skipped in sync
SKIP_FOLDERS=("PLA-League")

is_skipped() {
  local name="$1"
  for skip in "${SKIP_FOLDERS[@]}"; do
    [ "$name" = "$skip" ] && return 0
  done
  return 1
}

# Convert a filename to a lowercase, spaceless slug. Spaces in filenames break
# Astro's glob loader on Cloudflare's Linux builder, so we normalize at sync
# time. Mirrors the JS slugify in src/plugins/remark-wiki-links.mjs and
# src/lib/utils.ts so that [[wikilink]] targets still resolve after rename:
# punctuation is dropped entirely (no separator), then each remaining
# non-alphanumeric char becomes a single hyphen (runs are NOT collapsed).
slugify_filename() {
  local input="$1"
  local stem="${input%.md}"
  local slug
  slug=$(printf '%s' "$stem" \
    | tr '[:upper:]' '[:lower:]' \
    | tr -d '.,()'"'"'"`!?:;@#$%^&*+=<>{}[]\|' \
    | sed -E 's/[^a-z0-9]/-/g; s/^-+//; s/-+$//')
  printf '%s.md' "$slug"
}

# Clean previous sync
rm -rf "$ROBOTS_DEST" "$COMPONENTS_DEST" "$ASSETS_DEST"
mkdir -p "$ROBOTS_DEST" "$COMPONENTS_DEST" "$ASSETS_DEST"

# Sync robot markdown files (one per subfolder, matching folder name)
for robot_dir in "$ROBOTS_SRC"/*/; do
  robot_name="$(basename "$robot_dir")"
  if is_skipped "$robot_name"; then
    continue
  fi
  robot_file="$robot_dir/$robot_name.md"
  if [ -f "$robot_file" ]; then
    cp "$robot_file" "$ROBOTS_DEST/$(slugify_filename "$robot_name.md")"
  fi

  # Also copy any bridge/sub-component pages (non-main pages in robot folders)
  for md in "$robot_dir"*.md; do
    [ -f "$md" ] || continue
    fname="$(basename "$md")"
    if [ "$fname" != "$robot_name.md" ]; then
      cp "$md" "$COMPONENTS_DEST/$(slugify_filename "$fname")"
    fi
  done
done

# Sync software projects — Software/*.md flat files (one per project).
# Only files whose frontmatter contains `tags:` including "software" are picked up;
# other notes in Software/ (e.g. meta-docs about this very site) are skipped.
# Also sync per-project _resources/ images that live alongside.
if [ -d "$SOFTWARE_SRC" ]; then
  for md in "$SOFTWARE_SRC"/*.md; do
    [ -f "$md" ] || continue
    if grep -qE '^tags:.*software' "$md" 2>/dev/null \
       || grep -qE '^\s*-\s*software\s*$' "$md" 2>/dev/null; then
      cp "$md" "$ROBOTS_DEST/$(slugify_filename "$(basename "$md")")"
    fi
  done
  if [ -d "$SOFTWARE_SRC/_resources" ]; then
    find "$SOFTWARE_SRC/_resources" -type f \( -name '*.jpg' -o -name '*.jpeg' -o -name '*.png' -o -name '*.gif' -o -name '*.avif' -o -name '*.webp' \) | while read -r img; do
      fname="$(basename "$img")"
      cp "$img" "$ASSETS_DEST/$fname"
    done
  fi
fi

# Sync clippings (component pages)
for md in "$CLIPPINGS_SRC"/*.md; do
  [ -f "$md" ] || continue
  cp "$md" "$COMPONENTS_DEST/$(slugify_filename "$(basename "$md")")"
done

# Sync images from Clippings/_resources/ (flatten into assets with hash names)
if [ -d "$CLIPPINGS_SRC/_resources" ]; then
  find "$CLIPPINGS_SRC/_resources" -type f \( -name '*.jpg' -o -name '*.jpeg' -o -name '*.png' -o -name '*.gif' -o -name '*.avif' -o -name '*.webp' \) | while read -r img; do
    fname="$(basename "$img")"
    cp "$img" "$ASSETS_DEST/$fname"
  done
fi

# Sync images from vault root _resources/
if [ -d "$VAULT_RESOURCES" ]; then
  find "$VAULT_RESOURCES" -type f \( -name '*.jpg' -o -name '*.jpeg' -o -name '*.png' -o -name '*.gif' -o -name '*.avif' -o -name '*.webp' \) | while read -r img; do
    fname="$(basename "$img")"
    cp "$img" "$ASSETS_DEST/$fname"
  done
fi

# Sync images from per-robot _resources/ folders (Robotics/<robot>/_resources/*)
for robot_dir in "$ROBOTS_SRC"/*/; do
  robot_name="$(basename "$robot_dir")"
  if is_skipped "$robot_name"; then
    continue
  fi
  res_dir="$robot_dir/_resources"
  [ -d "$res_dir" ] || continue
  find "$res_dir" -type f \( -name '*.jpg' -o -name '*.jpeg' -o -name '*.png' -o -name '*.gif' -o -name '*.avif' -o -name '*.webp' \) | while read -r img; do
    fname="$(basename "$img")"
    cp "$img" "$ASSETS_DEST/$fname"
  done
done

echo "Synced content:"
echo "  Robots: $(ls "$ROBOTS_DEST"/*.md 2>/dev/null | wc -l | tr -d ' ')"
echo "  Components: $(ls "$COMPONENTS_DEST"/*.md 2>/dev/null | wc -l | tr -d ' ')"
echo "  Assets: $(ls "$ASSETS_DEST"/* 2>/dev/null | wc -l | tr -d ' ')"
