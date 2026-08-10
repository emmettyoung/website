#!/bin/bash
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/id_ed25519
cd /Users/emmettyoung/Developer/website
git add frontend/public/portfolio_history.json frontend/public/output.json
git commit -m "Daily portfolio update - $(date +%Y-%m-%d)"
git push
