#!/bin/bash
set -euo pipefail

# Ensure nvm is loaded
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"

# Use Node.js 20 which is compatible with Next.js 14
nvm install 20
nvm use 20

# Install dependencies and build the static output
npm ci
npm run build

# Start the express server to serve the static files
node server.js
