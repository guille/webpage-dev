#!/usr/bin/env sh
set -e

# build
yarn build

cd dist

git init
git add -A
git commit -m 'Deploy'

git push -f git@github.com:guille/guille.github.io.git master