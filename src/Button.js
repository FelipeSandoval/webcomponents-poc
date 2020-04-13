import { html} from 'lit-html';
import { component } from 'haunted';

const Button = ({ onClick, type='button' }) => {
  return html`
    <style>
      @import url('./fontface/font.css');
      .myButton{
        font-family: 'Open Sans', sans-serif;
        border-radius: 5px;
        box-shadow: 0 1px 3px 0 #bdbdbd;
        background-color: #009999;
        color: #ffffff;
        padding: 7px 18px;
        font-size: .8rem;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: normal;
        border: none;
        box-shadow: none;
      }
    </style>
    <button type=${type} class="myButton" @click=${onClick}>
      <slot></slot>
    </button>`;
}

Button.observedAttributes = ['onClick'];

customElements.define("my-button", component(Button));
