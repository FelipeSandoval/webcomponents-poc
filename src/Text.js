import { html} from 'lit-html';
import { component } from 'haunted';

const Text = () => {
  return html`
    <style>
      @import url('./fontface/font.css');
      .Text{
        font-family: 'Open Sans', sans-serif;
        font-size: 13px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.92;
        letter-spacing: normal;
        color: #444444;
      }
    </style> 
    <span class="Text">
      <slot></slot>
    </span>
  `;
}

customElements.define("my-text", component(Text));

export default Text;
