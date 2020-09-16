// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

function pigIt(str){
  let arr = str.split(" ");
  let pontuations = "?!,.;:";

  for (let i=0; i < arr.length; i += 1) {
    let char = arr[i];
    let lastChar = char[char.length - 1];

    if (pontuations.indexOf(lastChar) !== -1 && char.length > 1) {
      let first = char[0];
      let bodyText = char.slice(1, char.length - 1);
      arr[i] = bodyText+first+'ay'+lastChar;

    } else if (char.length > 1 || pontuations.indexOf(char) === -1) {
        let bodyText = char.slice(1, char.length);
        arr[i] = bodyText+char[0]+'ay';
    }
  }

  return arr.join(" ");

}
console.log(pigIt("Pig latin is cool"));

//comentarios
// a dificuldade deste problema reside em contornar os caracteres de pontuação
// eles deveriam estar todos colodos aos caracteres, mas os testes continham erros de pontuação, tendo ! e ? soltos, entre dois espaços
// Por conta disso, e para conseguir aplicar a regra nos artigos (caracteres unicos soltos na frase), o uso de && e || e seu entendimento é fundamental
// Coloquei algumas variáveis a mais do que poderia para resolver o problema para que a leitura do código e seu entendimento sejam mais fáceis.