import { LitElement, customElement, TemplateResult, html } from "lit-element";

// @ts-ignore
@customElement('cj-code')
// @ts-ignore
export class CjC2zi extends LitElement {

  private curCode: string;

  constructor() {
    super();
    this.curCode = '';
  }

  static get properties() {
    return {
      curCode: String
    }
  }

  getCode(e: any): void {
    if (e.key !== 'Enter') return;
    console.log('getCODE: ', e.target.value);
  }

  protected render(): TemplateResult | void {
    return html`
      <h3>Code-to-Zi Page</h3>
       <input type="text" @keydown=${ this.getCode }/>
       <div style="display: flex">
        <h4>${this.curCode}</h4>
       </div>
    `;
  }

  protected createRenderRoot(): Element | ShadowRoot {
    return this;
  }

}
