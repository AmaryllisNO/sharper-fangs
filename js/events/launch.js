import { pages } from '../variables/pages.js';

const launch = document.getElementById('launch');
const filteredURL = window.location.pathname;
export let hasLaunched = false;

// Find the page with matching pathname
const currentPage = pages.find((page) => page.pathname === filteredURL);

let bgMusic = null;

if (currentPage && currentPage.music) {
  // Initialize the audio if music exists for this page
  bgMusic = new Audio(currentPage.music);
  bgMusic.volume = 0.6;
}

export const currentBgMusic = bgMusic;

launch.addEventListener('click', () => {
  // hide and remove cover
  launch.classList.add('launch--hide');
  setTimeout(() => {
    document.body.removeChild(launch);
  }, 500);

  // play bgMusic
  if (bgMusic) {
    bgMusic.play();
    bgMusic.loop = true;
  } else {
    console.log('No music for this page.');
  }

  // set hasLaunched to true
  hasLaunched = true;
});
