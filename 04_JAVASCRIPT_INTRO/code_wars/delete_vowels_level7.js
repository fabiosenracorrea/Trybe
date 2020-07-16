//dada uma frase, deletar todas as vogais, no formato:
// 'fabio senra correa' -> 'fb snr crr'

//first try = using the long concepts
function disemvowel(str) {
  let answer = '';
  for (let i of str) {
    answer += i.replace(/[aeiouAEIOU]*/g, '')
  }
  return answer;
}

//improved
function disemvowel(str) {
  return str.replace(/[aeiouAEIOU]*/g, '')
}

//we can stack regex options like this
function disemvowel(str) {
  return str.replace(/[aeiou]*/gi, '')
}