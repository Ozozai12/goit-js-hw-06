const inputText = document.querySelector('#validation-input');
const validValue = inputText.getAttribute('data-length')

const validChecking = () => {
    if (inputText.value.length == validValue) {
        
        inputText.classList.add('valid');
        inputText.classList.remove('invalid');
                
    } else {
        inputText.classList.add('invalid');
        inputText.classList.remove('valid');
    }
}

inputText.addEventListener("blur", validChecking)

