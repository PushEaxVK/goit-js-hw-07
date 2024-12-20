'use strict';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector('#controls input');
const create = document.querySelector('[data-create]');
const destroy = document.querySelector('[data-destroy]');
const boxes = document.querySelector('#boxes');

create.addEventListener('click', event => {
  const number = Number(input.value);
  if (number >= 1 && number <= 100) {
    createBoxes(number);
    input.value = '';
  }
});

function createBoxes(amount) {
  const divs = [];
  for (let i = 0; i < amount; i++) {
    const div = document.createElement('div');
    div.style.width = `${30 + 10 * i}px`;
    div.style.height = `${30 + 10 * i}px`;
    div.style.backgroundColor = getRandomHexColor();
    divs.push(div);
  }
  destroyBoxes();
  boxes.append(...divs);
}

destroy.addEventListener('click', destroyBoxes);

function destroyBoxes() {
  boxes.innerHTML = '';
}
