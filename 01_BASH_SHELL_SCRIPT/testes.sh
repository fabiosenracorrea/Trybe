# !/bin/bash

# path="/home/fabio/Desktop/"
# file="aula.txt"
# find=`find $path -name $file`

# if [ $find ]
# then
#     echo "O caminho $path$file está habilitado"
#     if [ -w $path$file ]
#     then
#         echo "Você tem permissão para editar o arquivo $file"
#     else
#         echo "Você não foi autorizado a editar este arquivo!"
#     fi
# else
#     echo "O arquivo não existe!"
# fi

# read -p "Digite o caminho que quer listar: " path

# if [ -d $path ]
# then
#     echo "É um diretório!"
#     echo "Aqui estão as informações de seu caminho: "
#     ls -l $path
# elif [ -f $path ]
# then
#     echo "É um arquivo"
#     echo "Aqui estão as informações de seu caminho: "
#     ls -l $path
# else
#     echo "Confira o caminho informado!"
# fi


# if [ -d $1 ]
# then
#     echo "É um diretório!"
#     echo "Aqui estão as informações de seu caminho: "
#     ls -l $1
# elif [ -f $1 ]
# then
#     echo "É um arquivo"
#     echo "Aqui estão as informações de seu caminho: "
#     ls -l $1
# else
#     echo "Confira o caminho informado!"
# fi


# if [ ! -d $1 ]
# then
#     echo "O caminho não é um diretório"
# else
#     arquivo=`ls $1 -l | wc -l`
#     echo "O diretório informado tem $arquivo arquivos!"
# fi