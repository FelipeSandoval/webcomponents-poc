import { html} from 'lit-html';
import { component } from 'haunted';

const AnchorTag = () => {
  return html`
    <style>
      @import url('./fontface/font.css');
      .AnchorTag{
        font-family: 'Open Sans', sans-serif;
        font-size: 13px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: normal;
        color: #009999;
        cursor: pointer;
      }
    </style> 
    <a class="AnchorTag">
      <slot></slot>
    </a>
  `;
}

customElements.define("my-a", component(AnchorTag));

export default AnchorTag;
