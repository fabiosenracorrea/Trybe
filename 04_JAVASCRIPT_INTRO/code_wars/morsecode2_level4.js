/*
In this kata you have to write a Morse code decoder for wired electrical telegraph.
Electric telegraph is operated on a 2-wire line with a key that, when pressed, connects the wires together, which can be detected on a remote station. The Morse code encodes every character being transmitted as a sequence of "dots" (short presses on the key) and "dashes" (long presses on the key).

When transmitting the Morse code, the international standard specifies that:

"Dot" – is 1 time unit long.
"Dash" – is 3 time units long.
Pause between dots and dashes in a character – is 1 time unit long.
Pause between characters inside a word – is 3 time units long.
Pause between words – is 7 time units long.
However, the standard does not specify how long that "time unit" is. And in fact different operators would transmit at different speed. An amateur person may need a few seconds to transmit a single character, a skilled professional can transmit 60 words per minute, and robotic transmitters may go way faster.

For this kata we assume the message receiving is performed automatically by the hardware that checks the line periodically, and if the line is connected (the key at the remote station is down), 1 is recorded, and if the line is not connected (remote key is up), 0 is recorded. After the message is fully received, it gets to you for decoding as a string containing only symbols 0 and 1.

For example, the message HEY JUDE, that is ···· · −·−−   ·−−− ··− −·· · may be received as follows:

1100110011001100000011000000111111001100111111001111110000000000000011001111110011111100111111000000110011001111110000001111110011001100000011

As you may see, this transmission is perfectly accurate according to the standard, and the hardware sampled the line exactly two times per "dot".

That said, your task is to implement two functions:

Function decodeBits(bits), that should find out the transmission rate of the message, correctly decode the message to dots ., dashes - and spaces (one between characters, three between words) and return those as a string. Note that some extra 0's may naturally occur at the beginning and the end of a message, make sure to ignore them. Also if you have trouble discerning if the particular sequence of 1's is a dot or a dash, assume it's a dot.
2. Function decodeMorse(morseCode), that would take the output of the previous function and return a human-readable string.

NOTE: For coding purposes you have to use ASCII characters . and -, not Unicode characters.

The Morse code table is preloaded for you (see the solution setup, to get its identifier in your language).

All the test strings would be valid to the point that they could be reliably decoded as described above, so you may skip checking for errors and exceptions, just do your best in figuring out what the message is!

Good luck!
*/


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

  return msg
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

/*
comentarios:

A solução da segunda parte apenas reutilizei a do exs1 (level6)

A logica da resolucação está comentada ao longo de sua resolução, e acredito que isso é suficiente para entender o caminho percorrido.

Se não estiver, basta mandar um PR ou uma mensagem para conversarmos!

*/