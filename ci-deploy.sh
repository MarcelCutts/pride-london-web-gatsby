#!/bin/sh

set -e

echo "deploying $1"
export name=pride-in-london-$1

echo "writing now.json file"
echo "{\"name\": \"$name\", \"alias\": \"$name\"}" > now.json
cat now.json

echo "running now"
now ./public -A ../now.json -e NODE_ENV=production --token $NOW_TOKEN --team=prideinlondon

echo "running now alias"
now alias --token $NOW_TOKEN --team=prideinlondon

if test $1 = 'production'; then
  now alias pride-in-london-production.now.sh events.prideinlondon.org --token $NOW_TOKEN --team=prideinlondon
fi
