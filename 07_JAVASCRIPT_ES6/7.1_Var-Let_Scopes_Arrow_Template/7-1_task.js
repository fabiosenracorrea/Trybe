function factorial(n) {
  return [...Array(n).keys()].reduce((start, next) => start * (next + 1), 1)
}

function defactor(n) {
  return [...Array(n).keys()].map(num => num + 1).reduce((start, next) => {
    if (start >= next) {
      return (start / next)
    } else if (start === 1) {
      return (start * 0 + (next - 1))
    } else {
      return (start + next * 0)
    }
  }, n);
}

console.log(defactor(24))