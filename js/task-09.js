const colorBackground = document.querySelector('body')
const colorText = document.querySelector('.color');
const colorButton = document.querySelector('.change-color');

colorButton.addEventListener('click', changeColor)

function changeColor() {
  colorBackground.style.backgroundColor = getRandomHexColor();
  colorText.textContent = colorBackground.style.backgroundColor;
} 

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
