// Vamos usar este array
let numbers = [5,9,3,19,70,8,100,2,35,27];

//vou usar function na maioria das vezes para não rodar tudo quando carregar o código.
//Para verificar cada exc, basta chamar a função respectiva usando o array como argumento

// 1- percorra o array imprimindo todos os valores nele contidos com a função console.log();

function percorrer(numbers) {
  for (let i of numbers) {
    console.log(i);
  }
}

// 2- você deve somar todos os valores contidos no array e imprimir o resultado;

function somarTudo(numbers) {
  let sum = 0;
  for (let i of numbers) {
    sum += i;
  }
  console.log(sum);
}

// 3- calcule e imprima a média aritmética dos valores contidos no array;
// 4- caso valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";

function mediaAr(numbers) {
  let sum = 0;
  for (let i of numbers) {
    sum += i;
  }
  let media = sum/(numbers.length);
  if (media > 20) {
    console.log(`Valor maior que 20: ${media}`);
  } else {
    console.log(`Valor menor ou igual a 20: ${media}`);
  }
}

// 5- Utilizando for, descubra qual o maior valor contido no array e imprima-o;

function maiorValor(numbers) {
  let maior = numbers[0];
  for (let i of numbers) {
    if (i > maior) {
      maior = i
    }
  }
  console.log(maior)
}

// 6- Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";

function impares(numbers) {
  let impares = 0;
  for (let i of numbers) {
    if (i%2 !== 0) {
      impares += 1;
    }
  }

  switch(impares) {
    case 0:
      console.log("nenhum valor ímpar encontrado.")
      break;
    default:
      console.log(`O array passado tem ${impares} números ímpares`)
  }
}

// 7- Utilizando for, descubra qual o menor valor contido no array e imprima-o;

function menorValor(numbers) {
  let menor = numbers[0];
  for (let i of numbers) {
    if (i > menor) {
      menor = i
    }
  }
  console.log(menor)
}

// BONUS!

// Bubble sort - 1- Ordene o array numbers em ordem crescente e imprima seus valores;

//de forma a checar todos os items
function ordemBubble(arr) {
  for (let i = 1; i < arr.length; i += 1) {
    for (let j = 0; j < i; j += 1) {
      if (arr[j] > arr[i]) {
        let item = arr[i];

        arr[i] = arr[j]
        arr[j] = item;
      }
    }
  }
  console.log(arr)
}

// outra forma similar a acima

function ordem2Bubble(arr) {
  for (let i = (arr.length - 1); i >= 0; i -= 1) {
    for (let j = 0; j < i; j += 1) {
      if (arr[j] > arr[i]) {
        let item = arr[i];
        arr[i] = arr[j];
        arr[j] = item;
      }
    }
  }
  console.log(arr);
}

// deixando o maior no final e reduzindo onde olhar
function otherBubble(arr) {
  interation = arr.length

  while (interation > 0) {
    let bigger = arr[0]
    let bigger_pos = 0
    for (let i = 1; i < interation; i += 1) {
      if (arr[i] > bigger) {
        bigger = arr[i];
        bigger_pos = i;
      }
    }
    arr[bigger_pos] = arr[interation - 1];
    arr[interation - 1] = bigger;
    interation -= 1;
  }
  console.log(arr);
}

// Ordene o array numbers em ordem decrescente e imprima seus valores;

function desOrdemBubble(arr) {
  for (let i = (arr.length - 1); i >= 0; i -= 1) {
    for (let j = 0; j < i; j += 1) {
      if (arr[j] < arr[i]) {
        let item = arr[i];

        arr[i] = arr[j];
        arr[j] = item;
      }
    }
  }
  console.log(arr)
}

//Agora você irá criar um novo array a partir do array numbers, sem perdê-lo. Cada valor do novo array deverá ser igual ao valor correspondente do array anterior multiplicado pelo próximo. Por exemplo: o primeiro valor do novo array deverá ser 45, pois é a multiplicação de 5 (valor correspondente) e 9 (próximo valor). Caso não haja próximo valor, a multiplicação deverá ser feita por 2.

function multipla(arr) {
  let new_arr = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (i === arr.length - 1) {
      let multiplier = 2
      new_arr.push(arr[i] * multiplier)
    } else {
      let multiplier = arr[i+1]
      new_arr.push(arr[i] * multiplier)
    }
  }
  console.log(new_arr)
}
