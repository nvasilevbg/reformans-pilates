#!/usr/bin/env bash

# Auto-deploy for the dev/staging box. Runs from cron; idempotent and locked.

# Only ever touches /opt/reformans-pilates. Never touches other projects.

set -euo pipefail



ROOT=/opt/reformans-pilates

LOCK=/tmp/reformans-pilates-deploy.lock

LOG=/tmp/reformans-pilates-cron.log



exec 9>"$LOCK"

if ! flock -n 9; then echo "[$(date -Is)] deploy already running; skip" >> "$LOG"; exit 0; fi



cd "$ROOT"

git fetch --quiet origin master

if [ "$(git rev-parse HEAD)" = "$(git rev-parse origin/master)" ]; then exit 0; fi



echo "[$(date -Is)] new commits on master; redeploying" >> "$LOG"

git reset --hard origin/master

cd deploy

docker compose up -d --build >> "$LOG" 2>&1

echo "[$(date -Is)] deploy done" >> "$LOG"