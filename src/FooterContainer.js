import { html} from 'lit-html';
import { component } from 'haunted';

const FooterContainer = () => {
  console.log('this happens')
  return html`
    <style>
      @import url('./fontface/font.css');
      .footerContainer{
        font-family: 'Open Sans', sans-serif;
        border-top: 4px solid #009999;
        background-color: #323a45;
        display: flex;
        flex-direction: column;
        padding: 12px 31px;
      }
    </style>
    <div class="footerContainer">
      <slot></slot>
    </div>`;
};

customElements.define("my-footer-container", component(FooterContainer));