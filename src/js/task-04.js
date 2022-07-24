const decrButton = document.querySelector('[data-action=decrement]');
const counter = document.querySelector('#value');
const incrButton = document.querySelector('[data-action=increment]');

let counterValue = 0;

const decrement = () => {
    counterValue -= 1;
    counter.textContent = counterValue;
    
}

decrButton.addEventListener("click", decrement);


const increment = () => {
    counterValue += 1;
    counter.textContent = counterValue;
}

incrButton.addEventListener("click", increment);