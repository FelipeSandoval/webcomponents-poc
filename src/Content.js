import { html} from 'lit-html';
import { component } from 'haunted';

const Content = ({ title }) => {
  return html`
    <style>
      @import url('./fontface/font.css');
      .Content{
        color: #ffffff;
        font-family: 'Open Sans', sans-serif;
      }
      .Content__title{
        border-bottom: 1px solid #009999;
        font-family: 'Open Sans', sans-serif;
        margin: 12px 0 0;
        padding: 0 0 10px;
        font-size: 15px;
        font-weight: bold;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: normal;
        color: #ffffff;
      }
    </style>
    <div class="Content">
      <h5 class="Content__title">${title}</h5>
      <div lass="Content__body">
        <slot></slot>
      </div>
    </div>
  `;
}

Content.observedAttributes = ['title'];

customElements.define("my-content", component(Content));