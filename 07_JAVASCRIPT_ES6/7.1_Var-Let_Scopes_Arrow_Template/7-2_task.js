function longestWord(phrase) {
  const words = phrase.split(' ');
  let longest = phrase[0];

  words.forEach((word) => {
    if (word.length > longest.length) {
      longest = word;
    }
  });

  return longest;
}

console.log(longestWord("Antônio foi no banheiro e não sabemos o que aconteceu"))