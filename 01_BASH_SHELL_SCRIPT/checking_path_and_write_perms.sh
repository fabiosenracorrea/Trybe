#!/bin/bash

path="/home/fabio/Desktop/"
file="aula.txt"
find=`find $path -name $file`

if [ $find ]
then
    echo "The path $path$file is enabled"
    if [ -w $path$file ] ; then
        echo "You have permission to edit the file: $file"
    else
        echo "You are not authorized to edit this file."
    fi
else
    echo "This is not a valid path"
fi