const scoreValue = document.getElementById('score-value');
let score = 0;

// Проверяем, есть ли сохраненные очки
if (localStorage.getItem('score')) {
  score = parseInt(localStorage.getItem('score'));
  scoreValue.textContent = score;
}

// Интервал обновления очков
setInterval(() => {
  score++;
  scoreValue.textContent = score;
  localStorage.setItem('score', score); // Сохраняем очки в localStorage
}, 60000); // Обновление каждые 60 секунд (1 минута)