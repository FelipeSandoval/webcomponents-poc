import { html} from 'lit-html';
import { component } from 'haunted';

const Title = ({ className }) => {
  return html`
    <style>
      @import url('./fontface/font.css');
      .Title{
        font-size: 28px;
        font-weight: bold;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: normal;
        color: #555555;
      }
    </style> 
    <h2 class="Title ${className}">
      <slot></slot>
    </h2>
  `;
}

Title.observedAttributes = ['className'];

customElements.define("my-title", component(Title));

export default Title;
