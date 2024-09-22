import './renderers/borders.js';
import './renderers/fxNodes..js';
import './renderers/testRenderer.js';
import './events/launch.js';

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
