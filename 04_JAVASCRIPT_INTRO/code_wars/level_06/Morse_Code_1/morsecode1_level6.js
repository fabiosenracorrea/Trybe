decodeMorse = function(morseCode){
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
