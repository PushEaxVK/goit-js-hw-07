'use strict';

const categories = document.querySelectorAll('.item');

console.log(`Number of categories: ${categories.length}`);

for (const item of categories) {
  console.log(`Category: ${item.querySelector('h2').textContent}`);
  console.log(`Elements: ${item.querySelectorAll('li').length}`);
}
