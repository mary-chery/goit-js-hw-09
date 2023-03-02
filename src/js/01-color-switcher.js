const startEl = document.querySelector('[data-start]');
const stopEl = document.querySelector('[data-stop]');
const body = document.querySelector('body');

stopEl.disabled = true;
let timeId = null;
startEl.addEventListener('click' , onBtnStart);
stopEl.addEventListener('click' , onBtnStop);

function onBtnStart() {
    startEl.disabled = true;
    stopEl.disabled = false;

    timeId = setInterval(() => {
        body.style.backgroundColor = getRandomHexColor()
    }, 1000);
}

function onBtnStop() {
    startEl.disabled = false;
    stopEl.disabled = true;
    clearInterval(timeId)
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}