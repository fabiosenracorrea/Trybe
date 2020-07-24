// Para os próximos exercícios, você deve seguir as instruções da página

//TASK 1

let btn = document.createElement('button');
btn.appendChild(document.createTextNode('Click here!'));

btn.onclick = () => alert('You clicked the button');

const placeToAdd = document.querySelector('.exampleblock');
placeToAdd.innerHTML = '';
placeToAdd.appendChild(btn);

// TASK 2

const gamePrice = 39.99;
const discount = 0.20;

const secondH2 = document.querySelectorAll('h2')[1];

const btnCalc = document.createElement('button');
btnCalc.appendChild(document.createTextNode('Calculate!'));

btnCalc.onclick = () => {
  const priceDiscount = (gamePrice * discount).toFixed(2);
  alert(`£${priceDiscount} off!`);
}
btnCalc.style.marginLeft = '12px';
secondH2.appendChild(btnCalc);

// Extensions

const img = document.getElementById('alterImg');
img.style.width = '80px';
img.style.display = 'block';
img.style.margin = '0 auto';
img.style.cursor = 'pointer';

img.onmouseover = () => {
  img.setAttribute('src', 'random2.jpg');
}

img.onmouseout = () => {
  img.setAttribute('src', 'random1.jpg');
}