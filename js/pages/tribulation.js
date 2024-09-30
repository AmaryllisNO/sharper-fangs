import '/js/events/launch.js';
import { currentBgMusic } from '/js/events/launch.js';

const overlay = document.querySelector('.dark-overlay');

let alertTimeout = null; // To store the timeout ID

const updatePosition = (x, y) => {
  const vw = window.innerWidth;
  const vh = window.innerHeight;

  const mouseX = x / vw;
  const mouseY = y / vh;

  const currentFrameX = Math.floor(mouseX * 24);
  const currentFrameY = Math.floor(mouseY * 24);
  console.log(currentFrameX, currentFrameY);

  // Check if hovering over the special frame (6, 6)
  if (currentFrameX === 11 && currentFrameY === 14) {
    if (!alertTimeout) {
      alertTimeout = setTimeout(() => {
        currentBgMusic.pause();
        alert('please dont look');
        new Audio('/media/sounds/ictnm.mp3').play();
        console.log('currentBgMusic: ' + currentBgMusic);

        console.log('...before pushing sigilState, ', sigilsState);
        // sigilsState.push({
        //   name: 'tribulation',
        //   sigilImage: '/media/img/progression/2.png',
        // });
        // console.log('...after pushing sigilState');
        console.log('sigilstate: ', sigilsState);
        // localStorage.setItem('sigils', JSON.stringify(sigilsState));

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
};

document.addEventListener('mousemove', function (e) {
  const x = e.clientX; // Get the horizontal coordinate
  const y = e.clientY; // Get the vertical coordinate

  updatePosition(x, y);

  // Update the background-image property to move the gradient center to the cursor location
  overlay.style.backgroundImage = `radial-gradient(circle at ${x}px ${y}px, 
    rgba(0, 0, 0, 0) 0%, 
    rgba(0, 0, 0, 0.5) 1%, 
    rgba(0, 0, 0, 1) 5%)`;
});
