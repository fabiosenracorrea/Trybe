// 1. Crie uma função que mude o texto na tag <p> para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)

function alterDescription() {
  document.querySelector("p:nth-child(2)").innerHTML = "Changing text"
}

// 2. Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).

function changeColor() {
  document.querySelector(".main-content").style.backgroundColor = "rgb(76,164,109)"
}

// 3. Crie uma função que mude a cor do quadrado vermelho para branco.

function changeColor2() {
  document.querySelector(".center-content").style.backgroundColor = "white"
}

// 4. Crie uma função que corrija o texto da tag <h1>.

function correctH1() {
  let str = document.querySelector(".title").innerHTML;
  str = str.replace(/javaescripito/i, "JavaScript");
  document.querySelector(".title").innerHTML = str;
}

// 5. Crie uma função que modifique todo o texto da tag <p> para maiúsculo.

function capsLockP() {
  let pELements = document.getElementsByTagName("p");
  for (let i of pELements) {
    i.innerHTML = i.innerHTML.toLocaleUpperCase()
  }
}

// 6. Crie uma função que exiba o conteúdo de todas as tags <p> no console.

function consoleP() {
  let pELements = document.getElementsByTagName("p");
  for (let i of pELements) {
    console.log(i.innerHTML)
  }
}

// 7 - Write a JavaScript function that accept row, column, (to identify a particular cell) and a string to update the content of that cell.

function changeTable(row, column, str) {
  document.querySelector(`tr:nth-child(${row}) > td:nth-child(${column})`).innerHTML = str
}

// 8 - Write a JavaScript program to remove items from a dropdown list.

function removeDropDownItem(num) {
  list = document.querySelectorAll("#colorSelect option")
  list[num-1].remove()
}

//10. Write a JavaScript program to calculate the volume of a sphere.

function calculateES() {
  let radius = document.querySelector("input[name=radius]").value
  let volumeInput = document.querySelector("input[name=volume]")

  let volume = (Math.PI * 4 / 3) * (+radius)**3

  volumeInput.value = volume
}

//11. Write a JavaScript program to display a random image (clicking on a button) from the following list.

function randImg() {
  let randomNum = Math.round(Math.random() * 3);
  let imgs = {
    "1": {
      src: "http://farm4.staticflickr.com/3691/11268502654_f28f05966c_m.jpg",
      width: "240",
      height: "160",
    },
    "2": {
      src: "http://farm1.staticflickr.com/33/45336904_1aef569b30_n.jpg",
      width: "320",
      height: "195",
    },
    "3": {
      src: "http://farm6.staticflickr.com/5211/5384592886_80a512e2c9.jpg",
      width: "500",
      height: "343",
    },
  };

  let imgElement = document.querySelector(".rand-img img");
  imgElement.src = imgs[randomNum].src;
  imgElement.style.width = imgs[randomNum].width;
  imgElement.style.height = imgs[randomNum].height;
}

// 12. Write a JavaScript program to highlight the bold words of the following paragraph, on mouse over a certain link.

function hoverLink() {
  let boldElems = document.querySelectorAll(".hover-mouse p strong");

  if (!hover) {
    for (let i of boldElems) {
      i.style.backgroundColor = 'black';
      i.style.color = 'white';
    }
    hover = true
    return
  }

  for (let i of boldElems) {
    i.style.backgroundColor = 'white';
    i.style.color = 'black';
  }

  hover = false
}

let hover = false

document.querySelector(".hover-mouse a")
  .addEventListener("mouseover", hoverLink)
;
  document.querySelector(".hover-mouse a")
  .addEventListener("mouseout", hoverLink)
;



