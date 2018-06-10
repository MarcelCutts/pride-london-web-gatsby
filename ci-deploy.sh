#!/bin/sh

set -e

export name=pride-in-london-$1
git 
echo "{\"name\": \"$name\", \"alias\": \"$name\"}" > now.json

now ./public -e NODE_ENV=production --token $NOW_TOKEN --team=prideinlondon
now alias --token $NOW_TOKEN --team=prideinlondon
