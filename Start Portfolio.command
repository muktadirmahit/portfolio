#!/bin/zsh
# Double-click to build the site and open it at http://localhost:4321
# (close this Terminal window to stop it).
cd "$(dirname "$0")" || exit 1
[ -d node_modules ] || npm install || exit 1
npm run build || { echo "Build failed. See the messages above."; read -k1; exit 1; }
(sleep 2 && open "http://localhost:4321") &
npm run preview
