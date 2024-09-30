import { sigilsState } from '/js/variables/sigils.js';

console.log('fx nodes renderer');

const fxContainer = document.getElementById('fx-container');

const containerWidth = fxContainer.offsetWidth;
const containerHeight = fxContainer.offsetHeight;
console.log(containerWidth, containerHeight);
console.log('sigilState', sigilsState);

const randomCount = 4;
const randomArray = Array.from({ length: randomCount }, (_, index) => index);
console.log(randomArray);

let updatedSigils =
  sigilsState.length > 0
    ? sigilsState.concat(randomArray.slice(sigilsState.length))
    : randomArray;

updatedSigils.forEach((sigil, index) => {
  const img = document.createElement('img');
  img.classList.add('fx-nodes');

  img.src = sigil.sigilImage
    ? `./media/img/progression/${index + 1}.png`
    : './media/img/nodes/ang1.png';

  // Set random position for each img
  let randomLeft = Math.random() * (containerWidth - img.offsetWidth);
  let randomTop = Math.random() * (containerHeight - img.offsetHeight);

  img.style.left = `${randomLeft}px`;
  img.style.top = `${randomTop}px`;
  img.style.maxHeight = '300px';
  img.style.maxWidth = '300px';

  img.style.filter = 'brightness(66%)';
  img.style.mixBlendMode = 'color-dodge';

  fxContainer.appendChild(img);

  // Function to move the image to a new random position smoothly
  const glide = () => {
    randomLeft = Math.random() * (containerWidth - img.offsetWidth);
    randomTop = Math.random() * (containerHeight - img.offsetHeight);
    // console.log(`${randomLeft} ${randomTop} `);

    img.style.transition = 'all 15s ease-in-out'; // Smooth transition for the glide
    img.style.left = `${randomLeft}px`;
    img.style.top = `${randomTop}px`;
  };

  glide();
  setInterval(glide, 15000); // Change position every x ms
});
