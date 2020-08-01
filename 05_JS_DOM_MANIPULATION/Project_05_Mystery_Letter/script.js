function generateClasses() {
  const styleGroup = ['newspaper', 'magazine1', 'magazine2'];
  const sizeGroup = ['medium', 'big', 'reallybig'];
  const rotationGroup = ['rotateleft', 'rotateright'];
  const skewGroup = ['skewleft', 'skewright'];
  const possibleStyles = [styleGroup, sizeGroup, rotationGroup, skewGroup];

  const styleGroupIndex = Math.floor((Math.random() * 3) + 0.3);
  const sizeGroupIndex = Math.floor((Math.random() * 3) + 0.3);
  const rotationGroupIndex = Math.floor((Math.random() * 2) + 0.3);
  const skewGroupIndex = Math.floor((Math.random() * 2) + 0.3);
  const possibleIndexes = [styleGroupIndex, sizeGroupIndex, rotationGroupIndex, skewGroupIndex];

  const styles = [];

  for (let i = 0; i < 4; i += 1) {
    const cssArray = possibleStyles[i];
    const randomIndex = possibleIndexes[i];
    if (cssArray[randomIndex]) {
      styles.push(cssArray[randomIndex]);
    }
  }

  return styles;
}

function addStyles(element) {
  const styles = generateClasses();

  styles.forEach((style) => {
    element.classList.add(style);
  });
}

function generateLetter(text) {
  const letterContainer = document.getElementById('carta-gerada');
  letterContainer.innerHTML = '';

  const adjustPonctuation = text.trim().replace(',', ' ,').replace('!', ' !').replace('?', ' ?').replace('.', ' .');
  const wordsToMystify = adjustPonctuation.split(/ +/);

  wordsToMystify.forEach((word) => {
    const spanElement = document.createElement('span');

    spanElement.appendChild(document.createTextNode(word));
    addStyles(spanElement);
    spanElement.style.cursor = 'pointer';

    spanElement.addEventListener('click', (event) => {
      event.target.className = '';
      addStyles(event.target);
    });

    letterContainer.appendChild(spanElement);
  });
}

function updateCounter(text) {
  const words = text.trim().split(' ');
  const counterContainer = document.getElementById('carta-contador');
  counterContainer.innerText = words.length;
}

function enableButton() {
  const inputElement = document.getElementById('carta-texto');
  const buttonElement = document.getElementById('criar-carta');

  buttonElement.onclick = () => {
    if (inputElement.value.trim() === '') {
      const letterContainer = document.getElementById('carta-gerada');
      letterContainer.innerHTML = 'Por favor, digite o conteúdo da carta.';
      const letter = document.querySelector('.generated-letter');
      letter.classList.remove('hide');
    } else {
      generateLetter(inputElement.value);
      updateCounter(inputElement.value);
      const letter = document.querySelector('.generated-letter');
      const counterElement = document.querySelector('.counter');

      letter.classList.remove('hide');
      counterElement.classList.remove('hide');
    }
  }
}

window.onload = () => {
  enableButton();
};
