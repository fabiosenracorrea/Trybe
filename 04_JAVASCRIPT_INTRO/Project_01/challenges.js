// Desafio 1
function compareTrue(a, b) {
  return a && b;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(str) {
  return str.split(' ');
}

// Desafio 4
function concatName(arr) {
  return `${arr[arr.length - 1]}, ${arr[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  return (3 * wins) + (1 * ties);
}

// Desafio 6
function highestCount(arr) {
  arr.sort((a, b) => a - b);
  return (arr.filter(a => a === arr[arr.length - 1])).length;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let diff1 = Math.abs(mouse - cat1);
  let diff2 = Math.abs(mouse - cat2);

  if (diff1 === diff2) {
    return 'os gatos trombam e o rato foge';
  }

  return (diff1 > diff2) ? 'cat2' : 'cat1';
}

// Desafio 8
function fizzBuzz(arr) {
  return (
    arr
      .map(num => {
        if (num % 3 === 0 & num % 5 === 0) {
          return 'fizzBuzz';
        } else if (num % 3 === 0) {
          return 'fizz';
        } else if (num % 5 === 0) {
          return 'buzz';
        } else {
          return 'bug!';
        }
      })
  );
}

// Desafio 9
function encode(str) {
  let st = str.replace(/a/g, 1);
  st = st.replace(/e/g, 2);
  st = st.replace(/i/g, 3);
  st = st.replace(/o/g, 4);
  return st.replace(/u/g, 5)
}

function decode(str) {
  let st = str.replace(/1/g, 'a');
  st = st.replace(/2/g, 'e');
  st = st.replace(/3/g, 'i');
  st = st.replace(/4/g, 'o');
  return st.replace(/5/g, 'u')
}

// Desafio 10
function techList(arr, name) {
  if (!arr[0]) {
    return 'Vazio!'
  }

  return (
    arr
      .sort()
      .map(tech => ({ tech, name }))
  );
}

// Desafio 11
function addCounter(element, counter) {
  if (`${element}` in counter) {
    counter[element] += 1;
    return true
  }
  counter[element] = 1;
  return false
}

function buildNumber(tel, array, index) {
  switch (index) {
    case 1:
      tel += `${array[index]}) `;
      return tel
    case 6:
      tel += `${array[index]}-`;
      return tel
    default:
      tel += String(array[index]);
      return tel
  }
}

function badNumbers(array, index, counter = {}) {
  if (array[index] < 0 || array[index] > 9) {
    return true
  } else if ((counter[array[index]] >= 3)) {
    return true
  }
  return false
}

function generatePhoneNumber(arr) {
  let erroTamanho = 'Array com tamanho incorreto.'
  let erroNums = 'não é possível gerar um número de telefone com esses valores';
  let tel = '('

  if (arr.length !== 11) {
    return erroTamanho
  }

  let counter = {};

  for (let i = 0; i < 11; i += 1) {
    addCounter(arr[i], counter)

    if (badNumbers(arr, i, counter)) {
      return erroNums;
    }

    tel = buildNumber(tel, arr, i);
  }
  return tel
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  return (lineA < lineB + lineC && lineB < lineC + lineA && lineC < lineB + lineA)
}

// Desafio 13
function hydrate(str) {
  const cups = str.replace(/[^1-9]/g, '').length;
  return (cups > 1) ? (`${cups} copos de água`) : (`${cups} copo de água`)
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  generatePhoneNumber,
  techList,
  highestCount,
  hydrate,
  splitSentence,
  triangleCheck,
}
