import '../events/launch.js';

let alertTimeout = null; // To store the timeout ID
let lastFrameX = null; // To store the last X frame
let lastFrameY = null; // To store the last Y frame
const moveSfx = new Audio('/media/sounds/HNS1 Zap 02.wav');

// Function to update the sprite position
function updateSpritePosition(x, y) {
  const sprite = document.getElementById('sprite');
  if (!sprite) return;
  sprite.style.filter = 'brightness(1.5) ';

  const vw = window.innerWidth;
  const vh = window.innerHeight;

  const mouseX = x / vw;
  const mouseY = y / vh;

  const currentFrameX = Math.floor(mouseX * 5);
  const currentFrameY = Math.floor(mouseY * 5);

  // Check if the frame has changed
  if (currentFrameX !== lastFrameX || currentFrameY !== lastFrameY) {
    const newMoveSfx = moveSfx.cloneNode(); // Clone the sound effect
    newMoveSfx.play(); // Play the cloned sound
    lastFrameX = currentFrameX; // Update the last X frame
    lastFrameY = currentFrameY; // Update the last Y frame
  }

  sprite.style.backgroundPosition = `${currentFrameX * -400}px ${
    currentFrameY * -400
  }px`;

  // Check if hovering over the special frame (3, 3)
  if (currentFrameX === 3 && currentFrameY === 3) {
    if (!alertTimeout) {
      alertTimeout = setTimeout(() => {
        alert('please stop');
        alertTimeout = null; // Reset after the alert fires
      }, 2000);
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
