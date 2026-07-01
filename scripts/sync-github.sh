#!/bin/zsh
cd "$(dirname "$0")/.."

git add -A
git commit -m "Auto-sync changes" 2>/dev/null || true
git push origin main 2>/dev/null || true
