let info = {
  personagem: "Margarida",
  origem: "Pato Donald",
  nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
};

// 1- Imprima no console uma mensagem de boas-vindas para a personagem acima, incluindo seu nome.

function hello(info) {
  console.log(`Bem-vinda, ${info.personagem}`);
}

// 2- Insira no objeto uma nova propriedade com o nome de chave "recorrente" e o valor "Sim"

info.recorrente = 'Sim';

// 3- Faça um for/in que mostre todas as chaves do objeto.

function chaves(info) {
  for (let i in info) {
    console.log(i);
  }
}

// 4- agora com os valores

function values(info) {
  for (let i in info) {
    console.log(info[i])
  }
}

function valuesArray(info) {  // se quiser em um array
  console.log(Object.keys(info))
}

// 5- Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e os seguintes valores: "Tio Patinhas", "Christmas on Bear Mountain, Dell's Four Color Comics #178", "O último MacPatinhas", "Sim".

function newObj(info) {
  let count = 0;
  let newInfo = ['Tio Patinhas', "Christmas on Bear Mountain, Dell's Four Color Comics #178", "O último MacPatinhas", 'Sim'];
  for (let i in info) {
    if (info[i] === newInfo[count]) {
      info[i] = 'Ambos recorrentes'
    } else {
      info[i] += ` e ${newInfo[count]}`
    }
    count += 1;
  }
  console.log(info);
}

// 6- Crie uma função que receba uma string e retorne true se for um palíndromo, ou false, se não for.

function palindromo(str) { //abordagem for loop
  let str_reverse = '';
  for (let i = (str.length - 1); i >= 0; i -= 1) {
    str_reverse += str[i]
  }

  return (str === str_reverse)
}

function palindromo2(str) {
  return (str === (str.split("").reverse().join("")))
}

// 7- Crie uma função que receba um array de inteiros e retorne o maior valor
function maior(arr) {
  arr.sort((a,b) => a - b)
  return (arr[arr.length - 1])
}

// 8- Crie uma função que receba um array de inteiros e retorne o índice do menor valor.

function indeceDoMenor(arr) {
  let menor = 0;
  for (let i in arr) {
    if (arr[i] < arr[menor]) {
      menor = i
    }
  }
  return menor
}

// 9- Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.

function maiorNome(arr) {
  let nome = arr[0];
  for (let i in arr) {
    if (arr[i].length > nome.length) {
      nome = arr[i];
    }
  }
  return nome
}

// 10- Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.

function moda(arr) {
  counter = {};
  for (let i of arr) {
    if (!(counter[i])) {
      counter[i] = 1
    } else {
      counter[i] += 1
    }
  }

  //obtem um array com os pares keys,values e o ordena
  let pairs_sorted = Object.entries(counter).sort((a,b) => a[1] - b[1]);

  return pairs_sorted[pairs_sorted.length - 1][0]

}

// 11- Crie uma função que receba um número inteiro N e retorne o somatório de todos os números de 1 até N.

function somatorio(num) {
  let sum = 0;
  for (let i = 1; i <= num; i += 1) {
    sum += i
  }
  return sum
}

// 12- Crie uma função que receba uma string word e outra string ending. Verifique se a string ending é o final da string word. Considere que a string ending sempre será menor que a string word.

function end(word, ending) {
  let wl = word.length;
  let en = ending.length;

  return word.slice((wl-en), wl) === ending
}
