'use strict';

const nameInput = document.querySelector('input#name-input');
const nameOutput = document.querySelector('span#name-output');

nameInput.addEventListener('input', event => {
  event.target.value = event.target.value.trim();
  nameOutput.textContent = event.target.value || 'Anonymous';
});
