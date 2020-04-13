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
      <div class="Navbar__container__searchBar">
        <!-- <my-input name="navbar-input" className="Navbar__container__searchBar__input"></my-input> -->
        <div class="Navbar__container__searchBar__iconContainer">
          <svg xmlns="http://www.w3.org/2000/svg" class="Navbar__container__searchBar__iconContainer__icon" viewBox="0 0 24 24" fill="black" width="36px" height="36px"><path fill="ffff" d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/><path d="M0 0h24v24H0z" fill="none"/></svg>
        </div>
      </div>
    </div>
  `;
}

customElements.define("my-navbar", component(Navbar));

export default Navbar;
