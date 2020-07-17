// Given an array, find the integer that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.

function findOdd(arr) {
  arr.sort((a,b) => a - b);
  let count = 0;
  interador:
  for (let i = 0; i < arr.length; i += 1) {
    count += 1;
    if (arr[i+1] === arr[i]) {
      continue interador
    } else {
      if (count % 2 === 0) {
        count = 0;
      } else {
        return arr[i]
      }
    }
  }
}

// logica abordada:
// primeiro faz sentido sortir, para não precisarmos de um counter {} que interaremos depois
// agora vamos interar na lista com um contador
// se o proximo numero é o mesmo do atual, continuamos contando
// se nao for, checamos a contagem: se for par, resetamos o contador pra o proximo numero
// se for impar, nao temos a necessidade de continuar o loop.
// Bonus: poderia continuar se o desafio fosse achar TODOS os números que se repetem de forma impar...