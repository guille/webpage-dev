#!/usr/bin/env sh
set -ex

# build
yarn install
yarn build

mv target/.git public

cd public

git config user.name github-actions
git config user.email github-actions@github.com
git add -A
git commit --amend -m 'Deploy'

git push -f origin master
