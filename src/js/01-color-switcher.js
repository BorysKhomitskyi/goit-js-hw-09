function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');
const body = document.querySelector('body');

let timerId = null;

const backgroundColorSwitcher = function () {
  body.style.backgroundColor = getRandomHexColor();
};

startBtn.addEventListener('click', () => {
  timerId = setInterval(backgroundColorSwitcher, 1000);
  startBtn.disabled = true;
  stopBtn.disabled = false;
});

stopBtn.addEventListener('click', () => {
  clearInterval(timerId);
  stopBtn.disabled = true;
  startBtn.disabled = false;
});