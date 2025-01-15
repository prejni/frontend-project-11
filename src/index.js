// Импортируйте наш пользовательский CSS
import './scss/styles.scss';

// Импортируйте весь JS Bootstrap
import * as bootstrap from 'bootstrap';

function component() {
  const element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  return element;
}

function component3() {
  const element = document.createElement('textarea');

  element.innerHTML = ('Текст');

  return element;
}
function component2() {
  const button = document.createElement('button');
  button.innerHTML = 'Нажми';
  button.classList.add('btn');
  return button;
}

document.body.appendChild(component());
document.body.appendChild(component3());
document.body.appendChild(component2());
