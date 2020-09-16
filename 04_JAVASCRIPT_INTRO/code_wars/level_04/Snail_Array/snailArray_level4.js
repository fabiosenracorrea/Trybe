snail = function(array) {
  if (array[0][0] === undefined) {
    return []
  }

  let dimension = array[0].length;
  let snailArr = [];

  if (dimension === 1) {
    return array[0]
  }

  let running = true;

  while (running) {
    // going down
    let interactions = array.length;

    for (let i = 0; i < interactions; i += 1) {
      if (i === 0) {
        let subSize = array[0].length;

        for (let j = 0; j < subSize ; j += 1) {
          snailArr.push(array[0].splice(0, 1)[0]);
        }
        array.splice(0,1);
      } else if (i === interactions - 1) {
        let currentLastIndex = array.length - 1
        let currentLength = array[currentLastIndex].length;

        for (let k = 0; k < currentLength; k += 1) {
          snailArr.push(array[currentLastIndex].splice((i - k), 1)[0]);
        }
        array.splice(currentLastIndex, 1);
      } else {
        let currentArray = array[i - 1]
        snailArr.push(currentArray.pop());
      }
    }

    let secondInterations = array.length - 1;
    // going up
    for (let w = secondInterations; w >= 0; w -= 1) {
      snailArr.push(array[w].splice(0, 1)[0])
    }

    if (array.length === 0) {
      running = false;
    }
  }
  return snailArr
}

// console.log(snail([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));

/*
Essa foi a primeira solução encontrada. É possível refatorar o código para introduzir funções que fazem as partes intermediárias
É possível diminuir a lógica também, que é o que será feito abaixo
Solução: baseia-se em identificar o padrão da 'cobra':
  1. primeira linha entra toda
  2. ultimo elemento de todas as do meio entram em sequencia
  3. ultima linha entra toda, ao contrário
  4. primeiros elementos de todas as linhas do meio entram todos
  5. repeat
*/

// REFATORANDO - Com a lógica entendida, podemos enxugar o código e aplicar conceitos mais simples

snail2 = function(array) {
  let answer = [];

  while (array.length) {
    // going down
    let interactions = array.length;

    for (let i = 0; i < interactions; i += 1) {
      if (i === 0) {
        let firstArraySize = array[0].length; // tem que ficar salvo como variavel

        for (let j = 0; j < firstArraySize ; j += 1) {
          answer.push(array[0].shift());
        }
        array.shift();
      } else if (i === interactions - 1) {
        let lastArray = array[array.length - 1];
        let lastArrayLength = array[array.length - 1].length;

        for (let k = 0; k < lastArrayLength; k += 1) {
          answer.push(lastArray.pop());
        }
        array.pop();
      } else {
        let currentArray = array[i - 1] // pq nessa interação tiramos o array de index 0
        answer.push(currentArray.pop());
      }
    }

    let secondInterations = array.length - 1;

    // going up
    for (let w = secondInterations; w >= 0; w -= 1) {
      answer.push(array[w].shift());
    }
  }
  return answer
}

// ultima vez, adotando uma lógica diferente

snail3 = function(array) {
  let answer = [];

  while (array.length) {
    // pega a primeira linha
    let firstLine = array.shift();
    answer = answer.concat(firstLine);

    // pega os ultimos de cada linha (inclusive a última! Isso não altera)
    for (let i = 0; i < array.length; i += 1) {
      answer.push(array[i].pop());
    }

    if (!array.length) break; // necessário para checar se existe linha para pegarmos

    // pega a última linha
    let lastLine = array.pop().reverse();
    answer = answer.concat(lastLine);

    // pega os primeiros de cada linha, de baixo pra cima
    for (j = array.length - 1; j >= 0; j -= 1) {
      answer.push(array[j].shift());
    }
  }
  return answer
}

console.log(snail3([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));