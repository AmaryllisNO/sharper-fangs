import '../events/launch.js';

const container = document.querySelector('#tribulation-container');
const overlay = document.querySelector('.dark-overlay');

document.addEventListener('mousemove', function (e) {
  const x = e.clientX; // Get the horizontal coordinate
  const y = e.clientY; // Get the vertical coordinate

  // Update the background-image property to move the gradient center to the cursor location
  overlay.style.backgroundImage = `radial-gradient(circle at ${x}px ${y}px, 
    rgba(0, 0, 0, 0) 0%, 
    rgba(0, 0, 0, 0.5) 1%, 
    rgba(0, 0, 0, 1) 5%)`;
});
