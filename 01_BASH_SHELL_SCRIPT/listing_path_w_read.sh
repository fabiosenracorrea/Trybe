#!bin/bash

read -p "Type in the path you want to list" path

if [ -d $path ]
then
    echo "It's a directory!"
    echo "Here are the listing information of your path: "
    ls -l $path
elif [ -f $path ]
then
    echo "It's a file!"
    echo "Here is the info on your file: "
    ls -l $path
else
    echo "Please check the informed path!"
fi