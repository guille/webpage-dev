#!/usr/bin/env sh
set -ex

# build
yarn install
yarn build

cd public

git init
git add -A
git commit -m 'Deploy'

git push -f git@github.com:guille/guille.github.io.git master
