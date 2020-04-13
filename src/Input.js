import { html} from 'lit-html';
import { component } from 'haunted';

const Input = ({ onChange, label, name, className }) => {
  return html`
    <style>
      @import url('./fontface/font.css');
      .inputContainer{
        display: flex;
        flex-direction: row;
        align-items: center;
        font-family: 'Open Sans', sans-serif;
      }
      .inputContainer__label{
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: normal;
        font-family: inherit;
        color: #555555;
        margin-right: 10px;
      }
      .inputContainer__input{
        font-family: inherit;
        border-radius: 2px;
        box-shadow: inset 0 1px 3px 0 #eeeeee;
        border: solid 1px #cccccc;
        background-color: #ffffff;
        outline: none;
        padding: 5px;
      }
    </style> 
    <div class="inputContainer">
      <label class="inputContainer__label" for=${name}>${label}</label>
      <my-input class="inputContainer__input" @change=${onChange} name=${name}></my-input>
    </div>
  `;
}

Input.observedAttributes = ['label', 'name', 'onChange', 'class'];

customElements.define("my-input", component(Input));

export default Input;
