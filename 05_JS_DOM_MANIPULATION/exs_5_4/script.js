// defining values
let bgSepColors = [255, 255, 255];
let bgColor = localStorage.getItem('bgColor') || `rgb(${bgSepColors})`;
let textSepColors = [0, 0, 0];
let textColor = localStorage.getItem('textColor') || `rgb(${textSepColors})`;
let fontSize = localStorage.getItem('fontSize') || '16px';
let lineHeight = localStorage.getItem('lineHeight') || '18px';
let fontFamily = localStorage.getItem('fontFamily') || 'Arial, Helvetica, sans-serif';

// elements that can be altered

let contentBG = document.querySelector('.content');
let textElements = document.querySelectorAll('.content p');

// CREATING EACH LISTENER //

// RGB background

let redBG = document.getElementById("red");
let greenBG = document.getElementById("green");
let blueBG = document.getElementById("blue");
let bgArray = [redBG, greenBG, blueBG];


for (let i of bgArray) {
  i.addEventListener('input', event => {
    handleRGBinputs(event, changeBGcolor)
  })
}

// Text Color

let redTXT = document.getElementById("redText");
let greenTXT = document.getElementById("greenText");
let blueTXT = document.getElementById("blueText");
let txtArray = [redTXT, greenTXT, blueTXT];

for (let j of txtArray) {
  j.addEventListener('input', event => {
    handleRGBinputs(event, changeTXTcolor)
  })
}

// Font Size & Height

let fontSizeElement = document.getElementById('text-selector');
let fontHeightElement = document.getElementById('line-selector');

fontSizeElement.addEventListener('change', event => {
  let newFontSize = (event.target.value + 'px');
  localStorage.setItem('fontSize', newFontSize);
  for (let p of textElements) {
    let currentLineHeight = parseInt(p.style.lineHeight);
    p.style.fontSize = newFontSize;
    if (event.target.value > currentLineHeight) {
      localStorage.setItem('lineHeight', newFontSize);
      p.style.lineHeight = newFontSize
    }
  }
})

fontHeightElement.addEventListener('change', event => {
  let newHeightSize = (event.target.value + 'px');
  for (let p of textElements) {
    let currentTextSize = parseInt(p.style.fontSize);
    if (event.target.value < currentTextSize) {
      alert(`Line height can't be lower than current text size (${currentTextSize}px)`);
      break;
    } else {
      localStorage.setItem('lineHeight', newHeightSize);
      p.style.lineHeight = newHeightSize;
    }
  }
})

// Font Family

let fontFamilyElement = document.getElementById('fonts');

fontFamilyElement.addEventListener('change', event => {
  localStorage.setItem('fontFamily', event.target.value)
  for (p of textElements) {
    p.style.fontFamily = event.target.value;
  }
})

// loading settings

contentBG.style.backgroundColor = bgColor;

let rgbBG = localStorage.getItem('bgColor').replace(/(rgb\(|\))/g , '').split(',');
redBG.value = rgbBG[0];
greenBG.value = rgbBG[1];
blueBG.value = rgbBG[2];

let rgbTXT = localStorage.getItem('textColor').replace(/(rgb\(|\))/g , '').split(',');
redTXT.value = rgbTXT[0];
greenTXT.value = rgbTXT[1];
blueTXT.value = rgbTXT[2];

fontSizeElement.value = parseInt(localStorage.getItem('fontSize'));
fontHeightElement.value = parseInt(localStorage.getItem('lineHeight'));
fontFamilyElement.value = localStorage.getItem('fontFamily');


for (let p of textElements) {
  p.style.color = textColor;
  p.style.fontSize = fontSize;
  p.style.lineHeight = lineHeight;
  p.style.fontFamily = fontFamily;
}

// functions

function handleRGBinputs(event, callBack) {
  if (event.target.value >= 0 && event.target.value < 256) {
    callBack(event.target);
  } else if (event.target.value > 255) {
    event.target.value = 255;
    callBack(event.target);
  } else if (event.target.value < 0) {
    event.target.value = 0;
    callBack(event.target);
  }
}

function changeBGcolor(element) {
  let colorValue;
  switch (element) {
    case redBG:
      colorValue = (element.value > 255) ? 255 : Number(element.value);
      bgSepColors[0] = colorValue;
      bgColor = `rgb(${bgSepColors})`;
      localStorage.setItem('bgColor', bgColor);
      contentBG.style.backgroundColor = bgColor;
      break;
    case greenBG:
      colorValue = (element.value > 255) ? 255 : Number(element.value);
      bgSepColors[1] = colorValue;
      bgColor = `rgb(${bgSepColors})`;
      localStorage.setItem('bgColor', bgColor);
      contentBG.style.backgroundColor = bgColor;
    case blueBG:
      colorValue = (element.value > 255) ? 255 : Number(element.value);
      bgSepColors[2] = colorValue;
      bgColor = `rgb(${bgSepColors})`;
      localStorage.setItem('bgColor', bgColor);
      contentBG.style.backgroundColor = bgColor;
    default:
      return;
  }
}

function changeTXTcolor(element) {
  switch (element) {
    case redTXT:
      textSepColors[0] = Number(element.value);
      textColor = `rgb(${textSepColors})`
      localStorage.setItem('textColor', textColor);
      for (let p of textElements) {
        p.style.color = textColor
      }
      break;
    case greenTXT:
      textSepColors[1] = Number(element.value);
      textColor = `rgb(${textSepColors})`
      localStorage.setItem('textColor', textColor);
      for (let p of textElements) {
        p.style.color = textColor
      }
    case blueTXT:
      textSepColors[2] = Number(element.value);
      textColor = `rgb(${textSepColors})`
      localStorage.setItem('textColor', textColor);
      for (let p of textElements) {
        p.style.color = textColor
      }
    default:
      return;
  }
}