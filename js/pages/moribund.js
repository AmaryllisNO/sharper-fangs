import '/js/events/launch.js';
import { renderSigils } from '../renderers/renderSigils.js';
import { sigilsState } from '../variables/sigils.js';

let alertTimeout = null; // To store the timeout ID
let lastFrameX = null; // To store the last X frame
let lastFrameY = null; // To store the last Y frame
const moveSfx = new Audio('/media/sounds/TASCAM_452.wav');
const sigilSfx = new Audio('/media/sounds/TASCAM_453.wav');
const foundSfx = new Audio('/media/sounds/01-UI-womp.mp3');

// Function to update the sprite position
function updateSpritePosition(x, y) {
  const sprite = document.getElementById('sprite');
  if (!sprite) return;
  sprite.style.filter = 'brightness(1.2)';

  const vw = window.innerWidth;
  const vh = window.innerHeight;

  const mouseX = x / vw;
  const mouseY = y / vh;

  const currentFrameX = Math.floor(mouseX * 9);
  const currentFrameY = Math.floor(mouseY * 9);
  console.log(currentFrameX, currentFrameY);

  // Check if the frame has changed
  if (currentFrameX !== lastFrameX || currentFrameY !== lastFrameY) {
    const newMoveSfx = moveSfx.cloneNode(); // Clone the sound effect
    if (currentFrameX === 6 && currentFrameY === 6) {
      sigilSfx.play();
    } else {
      newMoveSfx.play(); // Play the cloned sound
    }
    lastFrameX = currentFrameX; // Update the last X frame
    lastFrameY = currentFrameY; // Update the last Y frame
    // newMoveSfx.volume = 0.5;
  }

  sprite.style.backgroundPosition = `${currentFrameX * -200}px ${
    currentFrameY * -200
  }px`;

  // Check if hovering over the special frame (6, 6)
  if (currentFrameX === 6 && currentFrameY === 6) {
    if (!alertTimeout) {
      alertTimeout = setTimeout(() => {
        foundSfx.play();
        alert('please stop');
        console.log('...before pushing sigilState, ', sigilsState);
        sigilsState.push({
          name: 'moribund',
          sigilImage: '/media/img/progression/1.png',
        });
        console.log('...after pushing sigilState');
        console.log('sigilstate: ', sigilsState);
        localStorage.setItem('sigils', JSON.stringify(sigilsState));

        alertTimeout = null; // Reset after the alert fires'
        window.location.href = '/';
      }, 1500);
    }
  } else {
    // Cancel the alert if we move away from the special frame
    if (alertTimeout) {
      clearTimeout(alertTimeout);
      alertTimeout = null; // Reset the timeout
    }
  }
}

// Wait for DOM to load before attaching event listeners
document.addEventListener('DOMContentLoaded', () => {
  document.addEventListener('mousemove', (event) => {
    updateSpritePosition(event.clientX, event.clientY);
  });

  document.addEventListener('touchmove', (event) => {
    updateSpritePosition(event.touches[0].clientX, event.touches[0].clientY);
  });
});
