console.log('navigating render');
import { sigilsState } from '/js/variables/sigils.js';

const navigator = document.querySelector('.navigator');

let areFirstPuzzlesSolved = false;
if (sigilsState.length > 3) {
  areFirstrPuzzlesSolved = true;
}

navigator.innerHTML = `
<ul>
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
        </ul>`;
