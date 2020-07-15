#!/bin/bash

if [ ! -d "$1" ]; then
    echo "The designated path does not points to a directory."
else
    count=0
    cd "$1"
    for i in *; do
        if [ -f ${i} ]; then
            count=`expr $count + 1`
        fi
    done
    echo "The designated directory has $count files!"
fi