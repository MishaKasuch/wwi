document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.getElementById('toggle-iframe-btn');
  const iframeWrapper = document.getElementById('iframe-wrapper');
  const iframe = document.getElementById('ww1-video');

  // Запам'ятовуємо початкове посилання на відео
  const videoSrc = iframe.src;

  toggleBtn.addEventListener('click', () => {
    iframeWrapper.classList.toggle('hidden');

    if (iframeWrapper.classList.contains('hidden')) {
      // Відео сховане: змінюємо кнопку на "+" і зупиняємо плеєр
      toggleBtn.textContent = '+';
      toggleBtn.title = 'Показати відео';
      iframe.src = ''; 
    } else {
      // Відео відкрите: повертаємо "-" і відновлюємо посилання
      toggleBtn.textContent = '−';
      toggleBtn.title = 'Приховати відео';
      iframe.src = videoSrc;
    }
  });
});