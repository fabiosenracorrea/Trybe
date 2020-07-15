// 1- Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1, imprima na tela um quadrado feito de asteriscos de lado de tamanho n.

function quadradoAsterisco(num) {
  if (+num) {
    if (num > 1) {
      let base = '*';

      for (let i = 0; i < num; i += 1) {
        console.log(base.repeat(num));
      }

    } else {
      console.log('Number has to be greater than 1');
    }
  } else {
    console.log('Please, input a valid number');
  }
}

// 2- Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base

function piramideAsterisco(num) {
  if (+num) {
    if (num > 0) {
      let base = '*';

      for (let i = 1; i <= num; i += 1) { // temos que adaptar o start/finish do problema acima para imprimir corretamente
        console.log(base.repeat(i));
      }

    } else {
      console.log('Number has to be greater than 0');
    }
  } else {
    console.log('Please, input a valid number');
  }
}

// 3- Agora inverta o lado do triângulo.

function piramideAsteriscoInv(num) {
  if (+num) {
    if (num > 0) {
      let base = '*';
      let space = ' ';

      for (let i = 1; i <= num; i += 1) {
        let lineSpace = (num - i);
        let line = space.repeat(lineSpace) + base.repeat(i);
        console.log(line);
      }

    } else {
      console.log('Number has to be greater than 0');
    }
  } else {
    console.log('Please, input a valid number');
  }
}

// 4 - Depois, faça uma pirâmide com n asteriscos de base:

function piramideAsteriscoCentral(num) {
  if (+num) {
    if (num > 1 && num%2 !== 0) {
      let base = '*';
      let space = ' ';

      for (let i = 1; i <= num; i += 2) {
        let lineSpace = (num - i);
        let line = space.repeat(lineSpace/2) + base.repeat(i) + space.repeat(lineSpace/2);
        console.log(line);
      }

    } else {
      console.log('Number has to be odd and greater than 1');
    }
  } else {
    console.log('Please, input a valid number');
  }
}

// BONUS: 5- Faça uma pirâmide com n asteriscos de base que seja vazia no meio. Assuma que o valor de n será sempre ímpar.

function piramideAsteriscoCentralEspaco(num) {
  if (+num) {
    if (num > 1 && num%2 !== 0) {
      let base = '*';
      let space = ' ';

      for (let i = 1; i <= num; i += 2) {
        let lineSpace = (num - i);
        let outsideSpace = space.repeat(lineSpace/2);
        if (i === 1) {
          let line = outsideSpace + base + outsideSpace;
          console.log(line)
        } else if (i === num){
          let line = base.repeat(i);
          console.log(line);
        } else {
          let insideSpace = space.repeat(i - 2);
          let line = outsideSpace + base + insideSpace + base + outsideSpace
          console.log(line);
        }
      }
    } else {
      console.log('Number has to be odd and greater than 1');
    }
  } else {
    console.log('Please, input a valid number');
  }
}

// 6- Faça um programa que diz se um número definido numa variável é primo ou não.

function isPrime(num) {
  for (let i = 2; i < num; i += 1 ) {
    if (num % i === 0 && num !== 2) {
      return false
    }
  }
  return true
}

