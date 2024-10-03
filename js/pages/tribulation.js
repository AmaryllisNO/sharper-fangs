import { sigilsState } from '/js/variables/sigils.js';
import '/js/events/launch.js';
import { currentBgMusic } from '/js/events/launch.js';

if (sigilsState) {
  sigilsState.forEach((sigil) => {
    if (sigil.name === 'tribulation') {
      console.log('tribulation found');
      window.location.href = '/';
    }
  });
  // console.log('sigilsState: ', sigilsState[0].name);
}

const overlay = document.querySelector('.dark-overlay');
let alertTimeout = null; // To store the timeout ID
const html = document.querySelector('html');
html.style.backgroundImage = 'none';
html.style.cursor = `url('/media/img/invisible.png'), pointer`;

const placementLogger = document.getElementById('placement-logger');
if (!placementLogger) console.error('placementLogger element not found');

let isDeviceMobile = /iPhone|iPad|Android/i.test(navigator.userAgent);
const image = document.querySelector('.tribulation__image');
if (isDeviceMobile) {
  image.style.mixBlendMode = 'normal';
}

const updatePosition = (x, y) => {
  const vw = window.innerWidth;
  const vh = window.innerHeight;
  const mouseX = x / vw;
  const mouseY = y / vh;

  const currentFrameX = Math.floor(mouseX * 12);
  const currentFrameY = Math.floor(mouseY * 12);

  // if (placementLogger) {
  //   placementLogger.innerHTML = `<p style="color: white; position: absolute; z-index: 99999;">Current position: (${currentFrameX}, ${currentFrameY}). Is device mobile? ${isDeviceMobile}</p>`;
  // }

  const shouldTriggerAlert =
    (currentFrameX === 6 && currentFrameY === 7) ||
    (isDeviceMobile &&
      (currentFrameX === 6 || currentFrameX === 7) &&
      currentFrameY === 9);

  if (shouldTriggerAlert) {
    triggerAlert();
  } else if (alertTimeout) {
    clearTimeout(alertTimeout);
    alertTimeout = null;
  }

  if (overlay) {
    overlay.style.backgroundImage = `radial-gradient(circle at ${x}px ${y}px, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 10%)`;
  }
};

function triggerAlert() {
  if (!alertTimeout) {
    alertTimeout = setTimeout(() => {
      currentBgMusic.pause();
      alert('please dont look');
      console.log('currentBgMusic: ' + currentBgMusic);
      console.log('...before pushing sigilState, ', sigilsState);
      sigilsState.push({
        id: 1,
        name: 'tribulation',
        sigilImage: '/media/img/progression/2.png',
      });
      console.log('...after pushing sigilState');
      console.log('sigilstate: ', sigilsState);
      localStorage.setItem('sigils', JSON.stringify(sigilsState));
      alertTimeout = null;
      window.location.href = '/';
    }, 1500);
  }
}

const triggerReveal = (x, y) => {
  const vw = window.innerWidth;
  const vh = window.innerHeight;
  const mouseX = x / vw;
  const mouseY = y / vh;
  const currentFrameX = Math.floor(mouseX * 12);
  const currentFrameY = Math.floor(mouseY * 12);

  console.log('triggerReveal', currentFrameX, currentFrameY);

  if (currentFrameX === 6 && currentFrameY === 7) {
    if (image) {
      console.log('triggerReveal: ', image);
      image.style.mixBlendMode = 'normal';
    } else {
      console.error('No element found with the class "tribulation__image".');
    }
  }
};

document.addEventListener('mousemove', function (e) {
  const x = e.clientX;
  const y = e.clientY;
  updatePosition(x, y);
  triggerReveal(x, y);
});

document.addEventListener('touchmove', (e) => {
  updatePosition(event.touches[0].clientX, event.touches[0].clientY);
});

document.addEventListener('click', function (e) {
  const x = e.clientX;
  const y = e.clientY;

  triggerReveal(x, y);
});
