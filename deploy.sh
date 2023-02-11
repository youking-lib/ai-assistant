#!/bin/bash
set -e

# build pkg
pnpm i
pnpm run build

# start
npm run pm2
