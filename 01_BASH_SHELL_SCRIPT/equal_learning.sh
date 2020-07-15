#!/bin/bash

var1=2

if [ $var1 -eq 2 ]; then #esse aqui so funciona com integers
    echo 'eq w/ []'
else
    echo 'no1'
fi

if [ $var1 == fa* ]; then #esse não funciona com wildcards
    echo '== w/ []'
else
    echo 'no2'
fi

# if [[ $var1 -eq fa* ]]; then #esse aqui sempre cai no if, mesmo que não seja igual, e não funciona com wildcards
#     echo 'eq w/ [[]]'
# else
#     echo 'no3'
# fi

if [[ $var1 == fa* ]]; then
    echo '== w/ [[]]'
else
    echo 'no4'
fi

if [[ $var1 = fa* ]]; then
    echo '= w/ [[]]'
else
    echo 'no5'
fi

##nenhum funciona com 'fab*' (com as aspas)