// 13 BONUS! HARD!
//Faça um programa que receba uma string em algarismos romanos e retorne o número que a string representa.

function romeToNumber(rome) {
  let conversion = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000,
  };

  let num = 0;

  for (let i in rome) {
    if (conversion[rome[+i+1]] > conversion[rome[+i]]) {
      num -= conversion[rome[+i]]
    } else {
      num += conversion[rome[+i]]
    }
  }
  return num;

}

romeToNumber('MMMMCMXCIX')