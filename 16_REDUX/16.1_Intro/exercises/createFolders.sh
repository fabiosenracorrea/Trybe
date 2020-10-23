#!/bin/bash

for i in {1..13}
do
  mkdir "exercise_$i";
  cd "./exercise_$i";
  touch readme.md;
  touch exercise.js;
  cd ..;
done
