// 1 - Add a script tag to the bottom of the page for your code.
// Add an event listener to the button so that it calls a makeMadLib function when clicked.
// In the makeMadLib function, retrieve the current values of the form input elements, make a story from them, and output that in the story div (like "Pamela really likes pink cucumbers.")

const btn = document.getElementById("lib-button");

btn.addEventListener("click", makeMadLib)

function makeMadLib(event) {
  const name = document.querySelector("input#person").value;
  const adjetive = document.querySelector("input#adjective").value;
  const noun = document.querySelector("input#noun").value;

  if (name === '' || adjective === '' || noun === '') {
    alert('Please type in on each field');
    return
  }
  const story = `${name} enjoys ${adjetive} ${noun} ever since 2010`;

  document.getElementById("story").innerHTML = story
}