//dado 2 inputs, uma palavra e um conjunto de palavras,
//determinar quais palavras do conjunto sao anagramas da palavra passada,
// isso é, possuem o exato mesmo numero de palavras.

let word1 = 'abba';
let words1 = ['aabb', 'abcd', 'bbaa', 'dada', 'baab'];

let word2 = 'racer';
let words2 = ['crazer', 'carer', 'racar', 'caers', 'racer'];

let word3 = 'laser';
let words3 = ['lazing', 'lazy',  'lacer', 'resalaser'];

let word4 = 'ffjkapr';
let words4 = ['krpafjf', 'ffjkapt', 'ffjkap']

function anagrams(word, words) {
  let letters = {};
  let anagrams = [];

  for (let i of word) {
    if (!(i in letters)) {
      let min = i.toLowerCase();
      letters[min] = 1
    } else {
      letters[i] += 1
    }
  }

  for (let j of words) {
    let jLetters = {};
    for (let k of j) {
      if (!(k in jLetters)) {
        let min2 = k.toLowerCase();
        jLetters[min2] = 1
      } else {
        jLetters[k] += 1
      }
    }

    let keys = Object.keys(letters).length;
    let jkeys = Object.keys(jLetters).length;

    if (keys !== jkeys) {
      continue
    } else {
      let equal = true;

      for (let w in letters) {
        // aqui letters.w não funciona pq w é uma string. ATENÇÃO!
        if (letters[w] !== jLetters[w] || !(w in jLetters)) {
          equal = false;
          break
        }
      }
      if (equal) {
        anagrams.push(j);
      }
    }

  }

  return anagrams

}

//analisar essa solução
String.prototype.sort = function() {
  return this.split("").sort().join("");
};

function anagrams2(word, words) {
  return words.filter(function(x) {
      return x.sort() === word.sort();
  });
}