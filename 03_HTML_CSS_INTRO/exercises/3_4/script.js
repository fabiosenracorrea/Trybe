
function sizeTableDown() {
  let table = document.getElementById("table");

  let headers = document.querySelectorAll("#table-header th");
  let descriptions = document.querySelectorAll("#table-info td");

  let newTr1 = document.createElement("tr");
  let newTr2 = document.createElement("tr");

  for (let i = 3; i < 6; i += 1) {
    let headerText = headers[i].outerText;
    let descText = descriptions[i].outerText;

    let tableHeaderTr = document.getElementById("table-header");
    let tableDescTr = document.getElementById("table-info");

    tableHeaderTr.removeChild(tableHeaderTr.lastElementChild);
    tableDescTr.removeChild(tableDescTr.lastElementChild);

    let newTh =  document.createElement("th");
    let newTd =  document.createElement("td");

    newTh.appendChild(document.createTextNode(headerText))

    if (i === 5) {
      let strongEl = document.createElement("strong");
      strongEl.appendChild(document.createTextNode(descText));
      newTd.appendChild(strongEl)
    } else {
      newTd.appendChild(document.createTextNode(descText));
    }

    newTr1.appendChild(newTh);
    newTr2.appendChild(newTd);
  }

  table.appendChild(newTr1);
  table.appendChild(newTr2);
  resized = true;
}

function sizeTableUp() {
  console.log('This function is going to return the table to its normal aspect if the window gets resized up again')
  resized = false;
}

if (document.body.clientWidth < 685) {
  sizeTableDown();
}


let resized = false;

window.addEventListener("resize", event => {
  let width = document.body.clientWidth;
  if (width < 685 && !resized) {
    sizeTableDown()
  } else if (width > 685 && resized) {
    sizeTableUp()
  }
})