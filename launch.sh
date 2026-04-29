#!/usr/bin/env bash
EXT_DIR="$(dirname "$(realpath "$0")")/wwf-ext"

exec chromium \
  --app="https://wordswithfriends.com/" \
  --load-extension="$EXT_DIR" \
  --no-first-run \
  "$@"
