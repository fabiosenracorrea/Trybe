// Start with this webpage, which has a single img tag of an animated GIF of a cat walking.

// Change the style of the img to have a "left" of "0px", so that it starts at the left hand of the screens.

const img = document.querySelector('img');
img.style.marginLeft = 0

// Create a function called catWalk() that moves the cat 10 pixels to the right of where it started, by changing the "left" style property.
// Bonus #1: When the cat reaches the right-hand of the screen, restart them at the left hand side ("0px"). So they should keep walking from left to right across the screen, forever and ever.

let counter = 0;
let maxStep = window.innerWidth - img.width
let walkingRight = true;

// function catWalk() {
//   let currenMargin = (img.style.marginLeft).replace('px', '')
//   if (currenMargin > maxStep) {
//     img.style.marginLeft = 0;
//     counter = 0;
//   }
//   counter += 1;
//   let newPos = counter * 10;
//   img.style.marginLeft = `${newPos}px`
// }

// uncomment this to work
// let step = setInterval(catWalk, 50);


// Bonus #2: When the cat reaches the right-hand of the screen, make them move backwards instead. They should keep walking back and forth forever and ever.

function catWalk() {
  let currentMargin = (img.style.marginLeft).replace('px', '')
  if (!walkingRight) {
    counter -= 10
    img.style.marginLeft = `${counter}px`
    if (currentMargin == 0) {
      walkingRight = true;
    }
    return
  }
  counter += 10;
  img.style.marginLeft = `${counter}px`
  if (currentMargin > maxStep) {
    walkingRight = false;
    return
  }
}

