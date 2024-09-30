console.log('navigatin render');
import { sigilsState } from '/js/variables/sigils.js';

const navigator = document.querySelector('.navigator');

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
            <a href="0/2" id="navlink" class="navlink ">Tribulation</a>
          </li>
          <li class="nav-list-item">
            <a href="5" id="navlink" class="navlink" >Hymn</a>
          </li>
          <li class="nav-list-item">
            <a href="8" id="navlink" class="navlink" >Infinity</a>
          </li>
        </ul>`;
