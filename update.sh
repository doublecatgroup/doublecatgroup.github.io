#!/bin/bash
set -o nounset
set -o errexit

(cd ../form && npm run build)
rsync -r ../form/dist/static/ static/

cp ../form/dist/index.html latest.html
md5=($(md5sum latest.html))
mv latest.html $md5.html
echo $md5 > latest

git add .
git commit -m update
git push origin master
