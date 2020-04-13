import { html} from 'lit-html';
import { component } from 'haunted';

const CheckBox = ({ onClick, label }) => {
  return html`
    <style>
      .check{
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
      }
    </style>
    <input type='checkbox' @click=${onClick} />`;
}

CheckBox.observedAttributes = ['onClick', 'label'];

customElements.define("my-checkbox", component(CheckBox));

export default CheckBox;
