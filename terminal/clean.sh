#!/bin/sh
cat $1 | perl -pe 's/\e([^\[\]]|\[.*?[a-zA-Z]|\].*?\a)//g' | col -b > $2

echo $1
echo $2