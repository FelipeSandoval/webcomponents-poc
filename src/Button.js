import { html } from 'lit-html';
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
        box-shadow: 0 0 4px #999;
        outline: none;
        cursor: pointer;
        background-position: center;
        transition: background 0.8s;
      }
      .myButton:hover {
        background: #009999 radial-gradient(circle, transparent 1%, #009999 1%) center/15000%;
      }
      .myButton:active {
        background-color: #6eb9f7;
        background-size: 100%;
        transition: background 0s;
      }
    </style>
    <button type=${type} class="myButton ripple" @click=${onClick}>
      <slot></slot>
    </button>`;
}

Button.observedAttributes = ['onClick', 'type'];

customElements.define("my-button", component(Button));

export default Button;
