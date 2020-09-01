// no async- await

const promise = new Promise((resolve, reject) => {
  const base = [...new Array(10).keys()];
  const operation = (
    base
      .reduce((start, next) => {
        const randomNum = (Math.floor(Math.random() * 50.9)) ** 2;
        return start + randomNum;
      }, 0)
  );

  if (operation < 8000) {
    return resolve(operation);
  }

  return reject(new Error('Its more than 8000!!!'));
})

promise
  .then(r => console.log([2, 3, 5, 10].map(n => r / n)))
  .catch(err => console.log('Its more than 8000!!'))

// using async/await

async function modernJS() {
  const base = [...new Array(10).keys()];
  const operation = (
    base
      .reduce((start, next) => {
        const randomNum = (Math.floor(Math.random() * 50.9)) ** 2;
        return start + randomNum;
      }, 0)
  );

  if (operation < 8000) {
    return operation
  }

  throw new Error('Its more than 8000!!!')
}

async function getResult() {
  const result = await modernJS();

  console.log(result)
}