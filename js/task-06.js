const inputText = document.querySelector('#validation-input');
const validValue = inputText.getAttribute('data-length')

const validChecking = () => {
    if (inputText.value.length < validValue) {
        
        inputText.classList.add('invalid');
        inputText.classList.remove('valid');
        
    } else if (inputText.value.length >= validValue) {
        inputText.classList.add('valid');
        inputText.classList.remove('invalid');
    }
}

inputText.addEventListener("blur", validChecking)

