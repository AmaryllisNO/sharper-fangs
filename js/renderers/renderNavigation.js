import { pages } from '/js/variables/pages.js';
import { sigilsState } from '/js/variables/sigils.js';

document.addEventListener('DOMContentLoaded', () => {
  const navigatorList = document.querySelector('.nav__list');

  let navPages = pages;

  let areFirstPuzzlesSolved = false;
  if (sigilsState.length > 3) {
    areFirstPuzzlesSolved = true;
  }

  console.log('areFirstPuzzlesSolved', areFirstPuzzlesSolved);

  let navListHTML = '';

  let beginning = pages.shift();
  // beginning = beginning.slice(0, 3);
  // console.log('beginning', beginning);
  console.log('pages', pages);
  navPages = navPages.slice(0, 3);
  console.log('navPages', navPages);

  navPages.forEach((page, i) => {
    // console.log('page id', page.id, sigilsState[page.id].id);

    const sigil = sigilsState[page.id] ?? {};
    let sigilId = sigil.id ?? false;

    navListHTML += `
      <li class="nav-list-item">
      <a href=${page.pathname} id="navlink" 
      class="navlink navlink__${page.name} ${
      page.id === sigilId ? `navlink__${sigilsState[i].name}--disabled` : ''
    }">${page.name} </a>
      </li>
    `;
  });

  if (navigatorList) {
    navigatorList.innerHTML = navListHTML;
  }

  if (sigilsState.length >= 3) {
    navigatorList.innerHTML += `   <li class="nav-list-item">
           <a href="0/4" id="navlink" class="navlink navlink__truth ${
             !areFirstPuzzlesSolved ? '' : 'navlink__truth--disabled'
           }">Truth</a>
          </li>`;
  }
});

{
  /* <ul>
          <li class="nav-list-item">
            <a href="0/1" id="navlink" class="navlink navlink__moribund ${
              sigilsState[0]?.name === 'moribund'
                ? 'navlink__moribund--disabled'
                : ''
            }">Moribund</a>
          </li>
          <li class="nav-list-item">
          <a href="0/2" id="navlink" class="navlink navlink__tribulation ${
            sigilsState[1]?.name === 'tribulation'
              ? 'navlink__tribulation--disabled'
              : ''
          }">Tribulation</a>
          </li>
          <li class="nav-list-item">
            <a href="5" id="navlink" class="navlink" >Hymn</a>
          </li>
          <li class="nav-list-item">
           <a href="0/1" id="navlink" class="navlink navlink__tribulation ${
             areFirstPuzzlesSolved ? '' : 'navlink__moribund--disabled'
           }">Infinity</a>
          </li>
        </ul>`; */
}
