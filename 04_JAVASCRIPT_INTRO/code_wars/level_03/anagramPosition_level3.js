function listPosition(word) {
  let letters = word.split('');
  let lettersSorted = word.split('').sort();

  let uniqueLetters = letters.filter((letter) => {
    let letterIndex = letters.indexOf(letter);
    if (letters.indexOf(letter, letterIndex + 1) === - 1) {
      return true
    } else {
      return false
    }
  })

  const combinationP = word.length - uniqueLetters.length
  totalPossibilites = (factorial(word.length) / factorial(combinationP));




}

function factorial(n) {
  return (n != 1) ? n * factorial(n - 1) : 1;
}

// https://www.codewars.com/kata/53e57dada0cb0400ba000688/train/javascript