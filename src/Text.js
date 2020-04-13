import { html} from 'lit-html';
import { component } from 'haunted';

const Text = ({ className }) => {
  return html`
    <style>
      @import url('./fontface/font.css');
      .Text{
        font-size: 28px;
        font-weight: bold;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: normal;
        color: #555555;
      }
    </style> 
    <h2 class="Text ${className}">
      <slot></slot>
    </h2>
  `;
}

Title.observedAttributes = ['className'];

customElements.define("my-text", component(Text));

export default Text;
