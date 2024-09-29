import '../events/launch.js';

const cursorReveal = document.querySelector('.cursor-reveal');

window.addEventListener('mousemove', function (e) {
  document.documentElement.style.setProperty('--pointerX', e.clientX + 'px');
  document.documentElement.style.setProperty('--pointerY', e.clientY + 'px');
});

// Move the reveal circle with the cursor
document.addEventListener('mousemove', (event) => {
  cursorReveal.style.top = `${event.clientY - 75}px`;
  cursorReveal.style.left = `${event.clientX - 75}px`;
});

// Optional: To work for touch devices (basic)
document.addEventListener('touchmove', (event) => {
  const touch = event.touches[0];
  cursorReveal.style.top = `${touch.clientY - 75}px`;
  cursorReveal.style.left = `${touch.clientX - 75}px`;
});
