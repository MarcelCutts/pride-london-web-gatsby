#!/bin/sh

set -e

echo "deploying $1"
export name=pride-in-london-$1

echo "writing now.json file"
echo "{\"name\": \"$name\", \"alias\": \"$name\"}" > now.json
cat now.json

echo "running now"
now ./public -e NODE_ENV=production --token $NOW_TOKEN --team=prideinlondon

echo "running now alias"
now alias --token $NOW_TOKEN --team=prideinlondon
