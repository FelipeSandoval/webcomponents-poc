import { html} from 'lit-html';
import { component } from 'haunted';

const CheckBox = ({ onChange, label, name }) => {
  return html`
    <style>
      @import url('./fontface/font.css');
      .checkboxlabel{
        font-family: 'Open Sans', sans-serif;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: normal;
        color: #555555;
        margin-right: 10px;
      }
    </style>
    <label class="checkboxlabel" for=${name}>${label}</label>
    <input type='checkbox' name=${name}  @change=${onChange} />`;
}

CheckBox.observedAttributes = ['onClick', 'label', 'name'];

customElements.define("my-checkbox", component(CheckBox));

export default CheckBox;
