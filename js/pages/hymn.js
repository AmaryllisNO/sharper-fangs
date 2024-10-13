import { sigilsState } from '/js/variables/sigils.js';
import '/js/events/launch.js';
import { currentBgMusic } from '/js/events/launch.js';

const html = document.querySelector('html');
html.style.overflow = 'scroll';

const sigil = document.querySelector('#hymn-sigil');

sigil.addEventListener('click', () => {
  currentBgMusic.pause();
  //   alert('please dont look');
  console.log('currentBgMusic: ' + currentBgMusic);
  console.log('...before pushing sigilState, ', sigilsState);
  sigilsState.push({
    id: 2,
    name: 'hymn',
    sigilImage: '/media/img/progression/3.png',
  });
  console.log('...after pushing sigilState');
  console.log('sigilstate: ', sigilsState);
  localStorage.setItem('sigils', JSON.stringify(sigilsState));
  window.location.href = '/';
});
