import colors from './colors';
import { startBtn, stopBtn } from './refs';

let intervalId = null;

onLoading();

function changeBodyBgColor() {
  const index = Math.floor(Math.random() * colors.length);

  document.body.style.backgroundColor = colors[index];
}

function onStart() {
  startBtn.disabled = true;
  stopBtn.disabled = false;
  stopBtn.style.animationDuration = '4s';

  intervalId = setInterval(changeBodyBgColor, 1000); 
}

function onStop() {
  clearInterval(intervalId);
  document.body.style.backgroundColor = '#fff'; 
  startBtn.disabled = false; 
  stopBtn.disabled = true; 
  stopBtn.style.animationDuration = '0s';
}

function onLoading() {
  stopBtn.disabled = true; 

  
  setTimeout(() => {
    startBtn.style.opacity = 1;
  }, 1000);

  setTimeout(() => {
    stopBtn.style.opacity = 1;
  }, 2000);
}

startBtn.addEventListener('click', onStart);
stopBtn.addEventListener('click', onStop);