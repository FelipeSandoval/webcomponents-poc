import { html } from 'lit-html';
import { component } from 'haunted';
import logo from './assets/logo_clinica_alemana.svg';

const Logo = () => {
  return html`<img src=${logo} />`;
}

customElements.define("my-logo", component(Logo));

export default Logo;
