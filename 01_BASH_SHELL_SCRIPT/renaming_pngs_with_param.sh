#!/bin/bash


# passar tipo /home/fabio/Desktop/Trybe/01_Bash_e_Shell/png_tests/

date=`date "+%Y-%m-%d"`

echo "Analisando caminho passado..." ; sleep 1;


if [ -d $1 ]; then

   cd $1
   echo "Renomeando arquvios .PNG conforme a data de hoje..." ; sleep 1;

    for i in `ls *.png`
    do
        if [ $i == 2020* ]; then
            echo "Arquivo encontrado já possui data em nome: $i"; sleep 1;
            read -p "Gostaria de atualizar a data do arquivo? " resp
            if [ $resp == y -o $resp == Y ]; then
                original_filename=(${i//-/ })
                # echo ${filename[3]} acessa a o nome do arquivo logo após a data (assume que o arquvio não tinha nenhum '-' originalmente)
                mv $i "$date-${original_filename[3]}"
                echo "Arquivo atualizado com sucesso :)"
            else
                echo "OK, passando para próximo arquivo..."; sleep 2;
            fi
        else
            echo "Arquivo encontrado: $i"; sleep 1;
            echo "Novo nome do arquivo: $date-$i" ; sleep 1;
            echo "." ; sleep 1;
            mv $i "$date-$i"
        fi
    done
else
    echo "Caminho passado não é um diretório, confira por favor."
fi

echo "Todos os arquivos foram analisados :)"