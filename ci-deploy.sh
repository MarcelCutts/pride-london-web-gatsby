#!/bin/sh

name=pride-in-london-$1

now ./public -n $name -e NODE_ENV=production --token $NOW_TOKEN --team=prideinlondon
now alias $name --token $NOW_TOKEN --team=prideinlondon
