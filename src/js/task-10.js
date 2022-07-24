function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector('input');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const boxes = document.querySelector('#boxes')

createBtn.addEventListener('click', createBoxes);
destroyBtn.addEventListener('click', destroyBoxes);

function createBoxes(amount) {
  amount = input.value;
  
  let widthValue = 30;
  let heightValue = 30;
  
  for (let i = 0; i < amount; i += 1) {
    let newEl = document.createElement('div');
    
    newEl.style.backgroundColor = getRandomHexColor();
    
    widthValue += 10;
    heightValue += 10;
    
    newEl.style.width = `${widthValue}px`;
    newEl.style.height = `${heightValue}px`;
        
    boxes.append(newEl);
  }
    
  console.log(boxes)
}

function destroyBoxes() {
  boxes.innerHTML = "";
}