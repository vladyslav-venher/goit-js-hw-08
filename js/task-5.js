function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

document.addEventListener('DOMContentLoaded', handlerContent);
function handlerContent(){
  const body = document.body;
  const colorSpan = document.querySelector('.color');
  const changeColorButton = document.querySelector('.change-color');

  function changeBackgroundColor() {
    const newColor = getRandomHexColor();
    body.style.backgroundColor = newColor;
    colorSpan.textContent = newColor;
  }

  changeColorButton.addEventListener('click', changeBackgroundColor);
};

