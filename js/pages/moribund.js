import '../events/launch.js';

let currentFrameX = 0;
let currentFrameY = 0;
let isSpecialFrame = false; // To track if we're hovering over the special frame

// Function to update the sprite position
function updateSpritePosition(x, y) {
  const sprite = document.getElementById('sprite');

  // Ensure the sprite element exists
  if (!sprite) return;

  // Get the viewport width and height
  const vw = window.innerWidth;
  const vh = window.innerHeight;

  // Get the cursor/touch position as a percentage of the screen
  const mouseX = x / vw;
  const mouseY = y / vh;

  // Calculate the frame based on position (5x5 grid)
  const totalFrames = 5;
  currentFrameX = Math.floor(mouseX * totalFrames);
  currentFrameY = Math.floor(mouseY * totalFrames);

  // Set background position based on the frame
  const backgroundX = currentFrameX * -200; // -200px to move left
  const backgroundY = currentFrameY * -200; // -200px to move up

  sprite.style.backgroundPosition = `${backgroundX}px ${backgroundY}px`;

  // Check if we're on the special frame (3, 3)
  if (currentFrameX === 3 && currentFrameY === 3) {
    isSpecialFrame = true; // Hovering over the special frame
    console.log('SPECIAL FRAME HOVER');
  } else {
    isSpecialFrame = false; // Not on the special frame
  }
}

// Function to handle clicks
function handleClick() {
  if (isSpecialFrame) {
    setTimeout(function () {
      alert('You clicked the special frame!');
    }, 500);
  }
}

// Wait for DOM to load before attaching event listeners
document.addEventListener('DOMContentLoaded', () => {
  const sprite = document.getElementById('sprite');

  // Ensure the sprite element exists
  if (!sprite) return;

  // Handle mouse movement for desktop
  document.addEventListener('mousemove', (event) => {
    updateSpritePosition(event.clientX, event.clientY);
  });

  // Handle touch movement for mobile
  document.addEventListener('touchmove', (event) => {
    const touch = event.touches[0];
    updateSpritePosition(touch.clientX, touch.clientY);
  });

  // Handle click event on the sprite element
  sprite.addEventListener('click', handleClick);
});
