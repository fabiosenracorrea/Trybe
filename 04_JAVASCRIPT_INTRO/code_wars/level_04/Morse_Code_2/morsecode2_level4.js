var decodeBits = function(bits){
  //dealing with zeros before/after actual msg
  let trimStartZeros = ('x' + bits).replace(/x0*/, '');
  let msg = (trimStartZeros + 'x').replace(/0*x/, '');

  //find how the pauses are
  let zeros = msg.split(/1+/);// leaves '' in each end because the separator is at start/end (on par with split concept)
  zeros.sort();
  let differentZeros = [...new Set(zeros)];
  differentZeros.shift();
  let pauses = {};

  for (let i = 0; i < differentZeros.length; i += 1) {
    pauses[i] = new RegExp(differentZeros[i], 'g');
  }

  //finds out what is a dot or a dash
  let ones = msg.split(/0+/);
  ones.sort();
  let differentOnes = [...new Set(ones)];
  let dotDash = {};

  for (let j = 0; j < differentOnes.length; j += 1) {
    dotDash[j] = new RegExp(differentOnes[j], 'g');
  }

  //replacing
  let pausesReplace = ["", " ", "   "]
  let dotDashReplace = [".", "-"];

  for (let k = 2; k >= 0; k -= 1) {
    if (pauses[k]) {
      //se so temos um tipo de separador e ele vem em 3, é um espaço entre letras, não entre dots/dashs
      if (differentZeros.length === 1 && (differentZeros[0].length % 3 === 0)) {
        msg = msg.replace(pauses[k], pausesReplace[+k+1]);
      } else {
        msg = msg.replace(pauses[k], pausesReplace[k]);
      }
    }

    if (dotDash[k]) {
      // se so temos 1 separador, temos que entender se o codigo separado é dot ou dash -> tem que ver se vem em multiplo de 3
      if (differentZeros.length === 1 && (differentOnes[0].length % 3 === 0)) {
        msg = msg.replace(dotDash[k], dotDashReplace[+k+1])
      } else {
        msg = msg.replace(dotDash[k], dotDashReplace[k])
      }
    }
  }

  return msg;
}

var decodeMorse = function(morseCode){
  //MORSE_CODE is the obj that holds each and every possible code for each letter

  let trimedCode = morseCode.trim();
  let arrayCode = trimedCode.split("   ");

  let decodedText = '';

  for (let i of arrayCode) {
    let letters = i.split(" ");
    let word = '';
    for (let j of letters) {
      word += `${MORSE_CODE[j]}`;
    }
    decodedText += `${word} `;
  }

  return decodedText.trim()
}