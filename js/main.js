import './renderers/borders.js';
import './renderers/fxNodes.js';
import './renderers/testRenderer.js';
import './renderers/renderNavigation.js';
import './events/launch.js';
import { renderSigils } from './renderers/renderSigils.js';
console.log('hovered over nav');
// render sigils
renderSigils();

const navLinks = document.querySelectorAll('#navlink');

const playHoverSFX = (index) => {
  console.log('hovered over nav');
  const hoverSFX = new Audio(
    `/media/sounds/${String(index).padStart(2, '0')}-UI-womp.mp3`
  );
  console.log('hoverSFX', hoverSFX);
  // hoverSFX.volume = 1.2;
  hoverSFX.play();
};

navLinks.forEach((link, index) => {
  const hoverSfxIndex = index + 1; // Start from 1 for the first link
  link.addEventListener('mouseenter', () => playHoverSFX(hoverSfxIndex)); // Use function reference
});

document.addEventListener('DOMContentLoaded', function () {
  const container = document.getElementById('remorse-container');
  const merger = document.getElementById('merger');

  container.addEventListener('mouseover', function () {
    // merger.style.display = 'block'; // Uncomment to show the merger on hover
  });

  container.addEventListener('mouseout', function () {
    // merger.style.display = 'none'; // Uncomment to hide the merger when not hovered
  });
});
