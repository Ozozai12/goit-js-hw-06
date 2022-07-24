const inputText = document.querySelector('#name-input');
const greetings = document.querySelector('#name-output');

const greetingsText = () => {
    greetings.textContent = inputText.value;
    if (inputText.value === '') {
        greetings.textContent = 'Anonymous';
    }
}

inputText.addEventListener('input', greetingsText)