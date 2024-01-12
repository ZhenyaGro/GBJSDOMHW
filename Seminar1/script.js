const lessonsData = [
  {
    "название": "Бег",
    "время": "12:00",
    "макс_участников": 20,
    "текущие_участники": 19
  },
  {
    "название": "Плавание",
    "время": "14:00",
    "макс_участников": 10,
    "текущие_участники": 8
  },
  {
    "название": "Силовая",
    "время": "16:00",
    "макс_участников": 8,
    "текущие_участники": 8
  }
];

const scheduleDiv = document.getElementById('schedule');
lessonsData.forEach(lesson => {
  const lessonDiv = document.createElement('div');
  lessonDiv.innerHTML = `
    <h2>${lesson.название}</h2>
    <p>Время: ${lesson.время}</p>
    <p>Макс. участников: ${lesson.макс_участников}</p>
    <p>Текущие участники: ${lesson.текущие_участники}</p>
    <button onclick="registerForLesson(${lesson.макс_участников}, ${lesson.текущие_участники})">Записаться</button>
    `;
  if (lesson.макс_участников <= lesson.текущие_участники) {
    const button = lessonDiv.querySelector('button');
    button.disabled = true;
  }
  scheduleDiv.appendChild(lessonDiv);
});

// Функция для записи на занятие
function registerForLesson(maxParticipants, currentParticipants) {
  if (currentParticipants < maxParticipants) {
    currentParticipants++;
    event.target.parentNode.querySelector('p:last-of-type').textContent = `Текущие участники: ${currentParticipants}`;
    if (currentParticipants === maxParticipants) {
      event.target.disabled = true;
    }
  }
}
