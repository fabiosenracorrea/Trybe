// Bob is preparing to pass IQ test. The most frequent task in this test is to find out which one of the given numbers differs from the others. Bob observed that one number usually differs from the others in evenness. Help Bob — to check his answers, he needs a program that among the given numbers finds one that is different in evenness, and return a position of this number.

// ! Keep in mind that your task is to help Bob solve a real IQ test, which means indexes of the elements start from 1 (not 0)


function iqTest(numbers){
  let arr = numbers.split(" ");
  let firstEven = (arr[0] % 2 === 0);

  if (firstEven) {
    let diff = arr.filter(a => a%2 !== 0);
    return (diff.length === 1) ? (arr.indexOf(diff[0])+1) : 1
  } else {
    let diff = arr.filter(a => a%2 === 0);
    return (diff.length === 1) ? arr.indexOf(diff[0])+1 : 1
  }
}

// comentarios
// preferi deixar o if/else 'maior' aberto para facilitar a leitrua
// a condição ternária é para pegar um caso peculiar: se o primeiro elemento for o diferente, a lógica retornaria o array todo MENOS esse primeiro elemento
// sabendo que só o primeiro que gera esse problema, podemos contornar de forma satisfatória o problema;