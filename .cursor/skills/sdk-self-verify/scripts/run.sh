#!/bin/sh
set -e
cd "$(dirname "$0")/../../../.."
npm run self-verify -- "$@"
