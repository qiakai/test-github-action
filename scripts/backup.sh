#!/usr/bin/env bash
# backup files to a directory

SRC=$1
DEST=$2

if [ -z $SRC ]; then
  echo "usage: backup.sh SRC DEST"
  exit
fi

for f in $(ls $SRC); do
  cp $SRC/$f $DEST/
done

echo "done"
