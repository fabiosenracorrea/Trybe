#!/bin/bash

echo 'Enabling chmod 744 to all your pwd .sh files...'; sleep 2;


for i in `ls *.sh`
do

    `chmod 744 $i`

done

echo "You can now execute every sh file in your pwd :)"