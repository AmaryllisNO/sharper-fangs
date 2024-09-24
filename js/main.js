import './renderers/borders.js';
import './renderers/fxNodes..js';
import './renderers/testRenderer.js';
import './events/launch.js';

const playHoverSFX = () => {
  const hoverSFX = new Audio(
    '/media/sounds/Untitled project - 2024-Sep-24_3.wav'
  );
  console.log('hoverSFX', hoverSFX);
  // hoverSFX.volume = 1.2;
  hoverSFX.play();
};

const navLinks = document.querySelectorAll('#nav__link');

navLinks.forEach((link) => {
  link.addEventListener('mouseenter', playHoverSFX);
});

document.addEventListener('DOMContentLoaded', function () {
  const container = document.getElementById('remorse-container');
  const merger = document.getElementById('merger');

  container.addEventListener('mouseover', function () {
    //   merger.style.display = 'block'; // Show the merger on hover
  });

  container.addEventListener('mouseout', function () {
    //   merger.style.display = 'none'; // Hide the merger when not hovered
  });
});
