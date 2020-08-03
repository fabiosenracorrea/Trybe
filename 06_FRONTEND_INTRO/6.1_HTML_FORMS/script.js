function fillStates() {
  const estados = ['AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO'];
  const selectElem = document.querySelector('select');

  estados.forEach((uf) => {
    const opt = document.createElement('option');
    opt.value = uf;
    const optText = document.createTextNode(uf);

    opt.appendChild(optText);
    selectElem.appendChild(opt);
  })
}

document.querySelector('form').onsubmit = (event) => {
  checkCPF(event);
  checkEmail(event);
  checkDate(event);
}

function checkCPF(e) {
  const cpfInput = document.getElementById('cpf');
  const cpf = cpfInput.value;

  if (!Number(cpf) || cpf.length !== 11) {
    e.preventDefault();
    alert("Por favor, confira o CPF");
  }
}

function checkEmail(e) {
  const email = document.getElementById('email').value;

  if (!email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/gi)) {
    e.preventDefault();
    alert('Por favor, confira o e-mail.');
  }
}

function checkDate(e) {
  const date = document.getElementById('start').value;

  if (!date.match(/^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[012])\/([1|2][0-9][0-9][0-9])$/g)) {
    e.preventDefault();
    alert("Por favor, confira a data.");
  }
}


fillStates();