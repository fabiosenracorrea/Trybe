// Adicione a tag h1 com o texto Exercício 5.2 - JavaScript DOM como filho da tag body;

let h1Element = document.createElement("h1");
h1Element.appendChild(document.createTextNode("Exercício 5.2 - Javascript"));
document.body.appendChild(h1Element);

// Adicione a tag div com a classe main-content como filho da tag body;

let divMain = document.createElement("div");
divMain.classList.add("main-content");
document.body.appendChild(divMain);

// Adicione a tag div com a classe center-content como filho da tag div criada no passo 2;

let divCenter = document.createElement("div");
divCenter.classList.add("center-content");
divMain.appendChild(divCenter);

// Adicione a tag p como filho do div criado no passo 3 e coloque algum texto;

let pElement = document.createElement("p");
pElement.appendChild(document.createTextNode("algum texto"));
divCenter.appendChild(pElement);

// Adicione a tag div com a classe left-content como filho da tag div criada no passo 2;

let divLeft = document.createElement("div");
divLeft.classList.add("left-content");
divMain.appendChild(divLeft);

// Adicione a tag div com a classe right-content como filho da tag div criada no passo 2;

let divRight = document.createElement("div");
divRight.classList.add("right-content");
divMain.appendChild(divRight);

// Adicione uma imagem com src configurado para o valor https://picsum.photos/200 e classe small-image. Esse elemento deve ser filho do div criado no passo 5;

let imgElement = document.createElement("img");
imgElement.classList.add("small-image");
imgElement.setAttribute("src", "https://picsum.photos/200");
divLeft.appendChild(imgElement);

// Adicione uma lista não ordenada com os valores de 1 a 10 por extenso, ou seja, um, dois, três, ... como valores da lista. Essa lista deve ser filha do div criado no passo 6;

let ulElement = document.createElement("ul");
let numbers = ['um', 'dois', 'tres', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'nove', 'dez'];
for (let i of numbers) {
  let liElement = document.createElement('li');
  liElement.appendChild(document.createTextNode(i));
  ulElement.appendChild(liElement);
}
divRight.appendChild(ulElement);

// Adicione 3 tags h3, todas sendo filhas do div criado no passo 2.

for (let j = 0; j < 3; j += 1) {
  let h3Element = document.createElement('h3');
  h3Element.appendChild(document.createTextNode(`h3 de número ${j}`));
  divMain.appendChild(h3Element);
}

// Agora que você criou muita coisa, vamos fazer algumas alterações e remoções:

// Adicione a classe title na tag h1 criada;

h1Element.classList.add('title');

// Adicione a classe description nas 3 tags h3 criadas;

let h3Elements = document.querySelectorAll('.main-content h3')

for (w of h3Elements) {
  w.classList.add('description');
}

// Remova o div criado no passo 5 (aquele que possui a classe left-content).

divMain.removeChild(divLeft);

// Centralize o div criado no passo 6 (aquele que possui a classe right-content). Dica: para centralizar

divRight.style.margin = "0 auto";

// Troque a cor de fundo do elemento pai da div criada no passo 3 (aquela que possui a classe center-content) para a cor verde;

divCenter.parentNode.style.backgroundColor = 'green';

// Remova os dois últimos elementos (nove e dez) da lista criada no passo 8.

ulElement.removeChild(ulElement.lastChild);
ulElement.removeChild(ulElement.lastChild);


