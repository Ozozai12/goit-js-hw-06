const control = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

const controlFontSize = () => {
    text.style.fontSize = `${control.value}px`
}

control.addEventListener('input', controlFontSize)
