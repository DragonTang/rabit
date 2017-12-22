#!/bin/sh
git status
git add .
git commit -m "$1"
git fetch origin master
git rebase origin/master
git push -u origin master
