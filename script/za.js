
const countEl = document.querySelector('.count');
const incrementBtn = document.querySelector('.increment-btn');

let count = 0;

incrementBtn.addEventListener('click', () => {
  count++;
  countEl.textContent = count;
  countEl.classList.add('increase');
  
  // проигрываем мелодию
  
const audio = new Audio('script/mp/sound.mp3');
audio.play();

  setTimeout(() => {
    countEl.classList.remove('increase');
  }, 300);
});
