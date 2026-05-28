#!/bin/bash
set -euo pipefail

VAULT_ROOT="$(cd "$(dirname "$0")/../.." && pwd)"
WEBSITE_ROOT="$(cd "$(dirname "$0")/.." && pwd)"

ROBOTS_SRC="$VAULT_ROOT/Robotics"
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
    cp "$robot_file" "$ROBOTS_DEST/"
  fi

  # Also copy any bridge/sub-component pages (non-main pages in robot folders)
  for md in "$robot_dir"*.md; do
    [ -f "$md" ] || continue
    fname="$(basename "$md")"
    if [ "$fname" != "$robot_name.md" ]; then
      cp "$md" "$COMPONENTS_DEST/"
    fi
  done
done

# Sync clippings (component pages)
for md in "$CLIPPINGS_SRC"/*.md; do
  [ -f "$md" ] || continue
  cp "$md" "$COMPONENTS_DEST/"
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
