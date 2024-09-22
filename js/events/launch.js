const launch = document.getElementById('launch');
let bgMusic = new Audio('/media/sounds/just bloodborne.mp3');
bgMusic.loop = true;

launch.addEventListener('click', () => {
  launch.classList.add('launch--hide');
  setTimeout(function () {
    document.body.removeChild(launch);
  }, 500);
  bgMusic.play();
});
