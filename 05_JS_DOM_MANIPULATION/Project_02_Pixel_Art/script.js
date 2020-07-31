// clearing board

function enableBTN() {
  const btnClear = document.getElementById('clear-board');

  btnClear.onclick = () => {
    const pixels = document.querySelectorAll('.pixel');
    pixels.forEach((pixel) => {
      pixel.style.backgroundColor = 'white';
    });
  };
}

// palette colors

function randomizeColors() {
  const randomColors = document.querySelectorAll('.random');

  randomColors.forEach((color) => {
    const red = Math.round(Math.random() * 255);
    const green = Math.round(Math.random() * 255);
    const blue = Math.round(Math.random() * 255);
    color.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
  });
}

// color selecting

let selectedColor = 'black';

function paintingEnabler() {
  const colors = document.querySelectorAll('.color');
  colors[0].style.backgroundColor = 'black';
  const selectedColorElement = document.querySelector('.selected-color');

  colors.forEach((color) => {
    color.addEventListener('click', (event) => {
      const previousSelectedColor = document.querySelector('.selected');
      previousSelectedColor.classList.remove('selected');
      event.target.classList.add('selected');
      selectedColor = event.target.style.backgroundColor;
      selectedColorElement.style.backgroundColor = selectedColor;
    });
  });
}

// color changing

function tableColoringEnabler() {
  const boardPixels = document.querySelectorAll('td');

  boardPixels.forEach((pixel) => {
    pixel.addEventListener('click', () => {
      pixel.style.backgroundColor = selectedColor;
    });
  });
}

// table by user-input

const creationForm = document.querySelector('form');

function createTable(tableElm, boardContainer, userInput) {
  tableElm.remove();
  const newTable = document.createElement('table');
  newTable.classList.add('board');

  for (let i = 1; i <= userInput; i += 1) {
    const newTableRow = document.createElement('tr');
    for (let j = 1; j <= userInput; j += 1) {
      const newTableCell = document.createElement('td');
      newTableCell.classList.add('pixel');
      newTableRow.appendChild(newTableCell);
    }
    newTable.appendChild(newTableRow);
  }
  boardContainer.appendChild(newTable);
  tableColoringEnabler();
}

function handleInputSize(userInput) {
  if (userInput.value > 50) {
    userInput.value = 50;
    return 50;
  } else if (userInput.value < 5 && userInput.value > 0) {
    userInput.value = 5;
    return 5;
  }

  const value = userInput.value;
  return value;
}

creationForm.onsubmit = (event) => {
  event.preventDefault();
  const userInput = document.getElementById('board-size');

  const inputValue = handleInputSize(userInput);

  const tableElm = document.querySelector('.board');
  const boardContainer = document.getElementById('pixel-board');

  if (!inputValue) {
    alert('Board inválido!');
  } else {
    createTable(tableElm, boardContainer, inputValue);
  }
};

// more colors!

let currentColorAmount = 4;

function enableMoreColorsBTN() {
  const moreColorsBTN = document.getElementById('more-colors');

  moreColorsBTN.onclick = () => {
    if (currentColorAmount < 39) {
      const newColor = document.createElement('div');
      newColor.classList.add('color');
      newColor.classList.add('random');

      const red = Math.round(Math.random() * 255);
      const green = Math.round(Math.random() * 255);
      const blue = Math.round(Math.random() * 255);
      newColor.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;

      const colorPalette = document.getElementById('color-palette');
      colorPalette.appendChild(newColor);
      paintingEnabler();
      currentColorAmount += 1;
    } else {
      alert("That's enough colors for you ;)");
    }
  };
}

// check size to display 'current color' or not

function checkSize() {
  const selectColorContainer = document.querySelector('.selected-color-container');

  if (document.body.clientWidth < 632) {
    selectColorContainer.style.display = 'none';
  }

  window.addEventListener('resize', () => {
    const width = document.body.clientWidth;
    if (width < 632) {
      selectColorContainer.style.display = 'none';
    } else {
      selectColorContainer.style.display = 'flex';
    }
  });
}

window.onload = () => {
  enableBTN();
  randomizeColors();
  paintingEnabler();
  tableColoringEnabler();
  enableMoreColorsBTN();
  checkSize();
};
