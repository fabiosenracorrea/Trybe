// 2 - For each operation, create an event listener for the button, and when it's clicked, find the value of the appropriate input and show the result of the calculation in the solution div.

// Write a function called squareNumber that will take one argument (a number), square that number, and return the result. It should also log a string like "The result of squaring the number 3 is 9."
// Write a function called halfNumber that will take one argument (a number), divide it by 2, and return the result. It should also log a string like "Half of 5 is 2.5.".
// Write a function called percentOf that will take two numbers, figure out what percent the first number represents of the second number, and return the result. It should also log a string like "2 is 50% of 4."
// Write a function called areaOfCircle that will take one argument (the radius), calculate the area based on that, and return the result. It should also log a string like "The area for a circle with radius 2 is 12.566370614359172."
// Bonus: Round the result so there are only two digits after the decimal.


const btnSquare = document.querySelector("#square-button");
const btnHalf = document.querySelector("#half-button");
const btnPercent = document.querySelector('#percent-button');
const btnArea = document.querySelector('#area-button');

const solution = document.querySelector("#solution");


btnSquare.addEventListener('click', () => {
  const inp = document.querySelector("#square-input");
  solution.innerHTML = (inp.value ** 2)
})

btnHalf.addEventListener("click", () => {
  const inp = document.querySelector("#half-input");
  solution.innerHTML = (inp.value / 2)
})

btnPercent.addEventListener("click", () => {
  const inp1 = document.querySelector("#percent1-input");
  const inp2 = document.querySelector("#percent2-input");
  solution.innerHTML = ((inp1.value / inp2.value) * 100).toFixed(2) + '%'
})

btnArea.addEventListener("click", () => {
  const inp = document.querySelector("#area-input");
  const area = (4/3)*Math.PI*(inp.value);
  solution.innerHTML = area.toFixed(2);
})