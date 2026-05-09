#!/usr/bin/env bash
EXT_DIR="$(dirname "$(realpath "$0")")/wwf-ext"

echo "Loading extension from: $EXT_DIR"
chromium \
  --load-extension="$EXT_DIR" \
  --no-first-run \
  --app="https://wordswithfriends.com/" \
  "$@"
