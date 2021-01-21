#!/bin/bash

if [ "$1" == "" ] || [ $# -gt 1 ]; then
  echo "Please only pass in the starting Module"
  exit 0
fi


trybeDir=`pwd`
dirNumber=$1

moduleDir=`find $trybeDir -maxdepth 1 -name "$dirNumber*"`

while [ ! -z $moduleDir ]
do
  echo "Module Dir found: $moduleDir"
  read -p 'Topic title on readme: ' topicTitle

  moduleDir=${moduleDir//*Trybe/}
  formattedString="- [Module $dirNumber - $topicTitle](https://github.com/fabiosenracorrea/Trybe/tree/master$moduleDir)"

  echo $formattedString >> "$trybeDir/README.md"

  dirNumber=$(($dirNumber + 1))
  moduleDir=`find $trybeDir -maxdepth 1 -name "$dirNumber*"`
done

echo "All your links are updated :)"
