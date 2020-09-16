// temos que fazer a diff entre array a e b > o que tem no b deve ser
// retirado do a. Se temos 1 elemento no b todas as ocorrencias do
// a devem ser retiradas

let a1 = [];
let b1 = [4,5];

let a2 = [3,4];
let b2 = [3];

let a3 = [1,8,2];
let b3 = [];


function arrayDiff(a, b) {

  let answer = [];

  for (let i of a) {
    let equal = false;
    for (let j of b) {
      if (i === j) {
        equal = true
        break
      }
    }
    if (!equal) {
      answer.push(i)
    }
  }

  return answer
}

function arrayDiffFilter(a, b) {
  return a.filter(item => {
    for (let i of b) {
      if (item === i) {
        return false
      }
    }
    return true
  })
}