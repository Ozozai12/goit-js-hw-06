function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector('input');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const boxes = document.querySelector('#boxes')

createBtn.addEventListener('click', getAmount);
destroyBtn.addEventListener('click', destroyBoxes);

function getAmount() {
  const amount = input.value;
  createBoxes(amount);
}

function createBoxes(amount) {
    
  let basicWidth = 30;
  let basicHeight = 30;
  let documentFragment = document.createDocumentFragment();
  
  for (let i = 0; i < amount; i += 1) {
    
    let newEl = document.createElement('div');
    
    newEl.style.backgroundColor = getRandomHexColor();
    
    let width = basicWidth + i*10;
    let height = basicHeight + i*10;
    
    newEl.style.width = `${width}px`;
    newEl.style.height = `${height}px`;

    documentFragment.append(newEl);    
    
  }
  boxes.append(documentFragment);  
  
}

function destroyBoxes() {
  boxes.innerHTML = "";
}