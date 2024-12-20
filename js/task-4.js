'use strict';

const form = document.querySelector('.login-form');

form.addEventListener('submit', formSubmit);

function formSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const email = form.elements.email.value;
  const password = form.elements.password.value;
  if (!email || !password) {
    alert('All form fields must be filled in');
  } else {
    const obj = {
      email: email.trim(),
      password: password.trim(),
    };
    console.log(obj);
    form.reset();
  }
}
