function handleLoginButton() {
  const loginBtn = document.getElementById('button-login');

  loginBtn.onclick = () => {
    const loginInfo = document.getElementById('user-email-phone').value;
    alert(loginInfo);
  };
}

function showErrorMsg() {
  const errElement = document.getElementById('error-msg');

  if (!errElement) {
    const signUpForm = document.querySelector('.signup-form');

    const errorMsgContainer = document.createElement('p');
    errorMsgContainer.setAttribute('id', 'error-msg');
    errorMsgContainer.setAttribute('class', 'error-msg');
    errorMsgContainer.appendChild(document.createTextNode('Campos inválidos'));

    signUpForm.appendChild(errorMsgContainer);
  }
}

function createHeyJoe(obj) {
  const displayedMsg = `Olá, ${obj.firstname} ${obj.lastname}, o seu cadastro foi feito no ${obj.phone_email}, você nasceu em ${obj.birthdate} e escolheu o gênero ${obj.gender}!`;

  const displayElement = document.createElement('p');
  displayElement.appendChild(document.createTextNode(displayedMsg));

  return displayElement;
}

function handleHeyJoeElement() {
  const formInputs = document.querySelectorAll('.signup-form input[type=text]');
  const radioInputs = document.querySelectorAll('.signup-form input[type=radio]');
  const inputValues = {};

  formInputs.forEach((input) => {
    inputValues[input.name] = input.value;
  });

  radioInputs.forEach((radio) => {
    if (radio.checked) {
      inputValues[radio.name] = radio.value;
    }
  });

  const heyJoeElement = createHeyJoe(inputValues);
  heyJoeElement.setAttribute('class', 'heyJoe');

  const rightContentContainer = document.querySelector('.right-content');
  rightContentContainer.innerHTML = '';
  rightContentContainer.appendChild(heyJoeElement);
  rightContentContainer.style.alignItems = 'center';
  rightContentContainer.style.display = 'flex';
}

function checkEmptyValues(inputCollection) {
  let radioChecked = false;
  let radiosChecked = 0;
  let emptyInputs = false;

  inputCollection.forEach((input) => {
    if (input.type === 'text' || input.type === 'password') {
      if (input.value === '') {
        showErrorMsg();
        emptyInputs = true;
      }
    } else if (input.type === 'radio') {
      if (!input.checked) {
        radiosChecked += 1;
      } else {
        radiosChecked += 1;
        radioChecked = true;
      }

      if (radiosChecked === 3 && !radioChecked) {
        showErrorMsg();
        emptyInputs = true;
      }
    }
  });

  return emptyInputs;
}

function validateForm(event) {
  event.preventDefault();
  const formInputs = document.querySelectorAll('.signup-form input');

  const anyEmptyInput = checkEmptyValues(formInputs);

  if (!anyEmptyInput) {
    handleHeyJoeElement();
  }
}

function handleSignUpForm() {
  const signUpForm = document.querySelector('.signup-form');

  signUpForm.addEventListener('submit', validateForm);
}

function addInputField() {
  const checkingInputField = document.getElementById('input-customized-gender');

  if (!checkingInputField) {
    const inputField = document.createElement('input');
    inputField.name = 'gender-custom';
    inputField.id = 'input-customized-gender';
    inputField.placeholder = 'Gênero (opcional)';

    const callingForm = document.querySelector('.signup-form');
    const callingButton = document.querySelector('#facebook-register');

    callingForm.insertBefore(inputField, callingButton);
  }
}

function removeInputField() {
  const checkingInputField = document.getElementById('input-customized-gender');

  if (checkingInputField) {
    checkingInputField.remove();
  }
}

function handleCustomGender() {
  const customizeGender = document.getElementById('personalizado');
  const feminineGender = document.getElementById('feminino');
  const masculineGender = document.getElementById('masculino');

  customizeGender.addEventListener('change', addInputField);
  feminineGender.addEventListener('change', removeInputField);
  masculineGender.addEventListener('change', removeInputField);
}

window.onload = () => {
  handleLoginButton();
  handleSignUpForm();
  handleCustomGender();
};
