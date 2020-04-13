import { html} from 'lit-html';
import { component } from 'haunted';

const defaultList = ['Home', 'Cursos','Reuniones Clínicas','Herramientas digitales']; 

const Navbar = ({ list = defaultList }) => {
  return html`
    <style>
      @import url('./fontface/font.css');
      .Navbar__container{
        display: flex;
        background-color: #323a45;
      }
      .Navbar__container__list{
        font-family: 'Open Sans', sans-serif;
        list-style-type: none;
        margin: 0;
        padding: 0;
        display:flex;
        flex-direction: row;
        background-color: #323a45;
        border-radius: 10px;
        border-right: 1px solid #474e58;
      }
      .Navbar__container__list__item{
        padding: 16px 19px;
        color: #ffff;
        background-color: inherit;
        font-weight: 100;
        font-size: 13px;
      }
      .Navbar__container__searchBar{
        display: flex;
        flex-direction: row;
        margin-left: auto;
      }
      .Navbar__container__searchBar__input{
        height: 100%;
      }
      .Navbar__container__searchBar__iconContainer{
        background-color: #009999;
        display: flex;
        align-items: center;
        flex-direction: row;
        padding: 5px;
      }
      .Navbar__container__searchBar__iconContainer__icon{
        fill: #ffff;
      }
    </style> 
    <div class="Navbar__container">
      <ul class="Navbar__container__list">
        ${list.map((item) => (
          html`<li class="Navbar__container__list__item">${item}</li>`
        ))}
      </ul>
    </div>
  `;
}

customElements.define("my-navbar", component(Navbar));

export default Navbar;
