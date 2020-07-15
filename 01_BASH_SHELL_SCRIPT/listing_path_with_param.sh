#!/bin/bash

if [ -d $1 ]
then
    echo "É um diretório!"
    echo "Aqui estão as informações de seu caminho: "
    ls -l $1
elif [ -f $1 ]
then
    echo "É um arquivo"
    echo "Aqui estão as informações de seu caminho: "
    ls -l $1
else
    echo "Confira o caminho informado!"
fi