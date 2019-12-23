import { LitElement, customElement, TemplateResult, html } from "lit-element";
import { CjApi } from "../cj-api";
import {filter} from "rxjs/operators";

// @ts-ignore
@customElement('cj-code')
// @ts-ignore
export class CjC2zi extends LitElement {

  public codeRes: any;
  private curCode: string;
  private cjApi: CjApi;

  constructor() {
    super();
    this.curCode = '';
    this.cjApi = new CjApi();
  }

  static get properties() {
    return {
      curCode: String,
      codeRes: Object
    }
  }

  getCode(e: any): void {
    this.codeRes = '';
    if (e.key !== 'Enter') return;
    console.log('getCODE: ', e.target.value);
    this.curCode = e.target.value;
    if ( e.target.value ) {

      this.cjApi.getZiByCode(this.curCode)
        .pipe(
          filter( e=> 'zi' in e.data)
        )
        .subscribe(
          res => {
            this.codeRes = res.data.zi.join(', ');
            console.log('Api-codeRes: ', this.codeRes);
          }
        )
    }
  }

  protected render(): TemplateResult | void {
    return html`
      <h3>Code-to-Zi Page</h3>
       <input type="text" @keydown=${ this.getCode } required />
       <div style="display: flex">
        <h4>${this.curCode.toUpperCase()} - &nbsp;
            <span style="color: red;font-size: 1.345em;">${this.codeRes}</span>
        </h4>           
       </div>
    `;
  }

  protected createRenderRoot(): Element | ShadowRoot {
    return this;
  }

}
