// Given two arrays a and b write a function comp(a, b) (compSame(a, b) in Clojure) that checks whether the two arrays have the "same" elements, with the same multiplicities. "Same" means, here, that the elements in b are the elements in a squared, regardless of the order.

function comp(array1, array2){
  if (array1 && array2) {
    array1.sort((a,b) => a - b);
    array2.sort((a,b) => a - b);

    if (array1.length === array2.length) {
      checker:
      for (let i = 0; i < array1.length; i += 1) {
        let ad = array1[i];
        let ac = array2[i];
        if (array1[i]**2 === (array2[i])) {
          continue checker
        } else {
          return false
        }
      }
      return true
    } else {
      return false
    }
  } else {
    return false
  }

}

let a1 = [121, 144, 19, 161, 19, 144, 19, 11];
let a2 = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19];

// comentario:
// O problema não deixava claro se os arrays seriam sempre do mesmo tamanho e mencionou que poderiam ter (como tinham) entradas null
// para resolver isso, tive que por o check de null e de tamanho, que aumenta consideravelmente o tamanho do código.
// No mais, a logica aqui é bem simples.