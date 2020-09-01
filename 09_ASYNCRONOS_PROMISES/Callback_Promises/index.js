const url = 'https://icanhazdadjoke.com/';
const options = {
  'Accept': 'application/json',
}

function fetch(url, { Accept }) {
  return new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest();

    xhr.open('GET', url);
    xhr.setRequestHeader('Accept', Accept);
    xhr.send();

    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          return resolve(JSON.parse(xhr.responseText));
        }

        return reject('Erro na requisição');
      }
    }
  });
}

(
fetch(url, options)
  .then(async (res) => {
    console.log("Peguei a resposta! Mas quero outra...");
    const joke1 = res.joke;

    const anotherResponse = await fetch(url, options);

    const joke2 = anotherResponse.joke;

    console.log(joke1);
    console.log(joke2);
  })
  .catch(err => console.log(err))
);
