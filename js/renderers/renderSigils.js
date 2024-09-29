import { sigilsState } from '../variables/sigils.js';

export const renderSigils = () => {
  if (!sigilsState) return;

  let container = document.createElement('div');
  container.id = 'sigils-container';
  container.classList.add('sigils__progression-container');
  document.body.appendChild(container);
  console.log('...rendering sigils', 'sigilsState: ', sigilsState);

  const sigilsList = document.createElement('ul');

  sigilsState.forEach((sigil) => {
    const sigilItem = document.createElement('li');
    sigilItem.innerHTML = `
            <img src="${sigil.sigilImage}"></img>
            <p>moribund</p>
            `;
    sigilsList.appendChild(sigilItem);
  });
  container.appendChild(sigilsList);
};
