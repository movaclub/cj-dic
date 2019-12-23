import { LitElement, customElement, TemplateResult, html } from "lit-element";
import { CjApi } from "../cj-api";
import { filter } from "rxjs/operators";

@customElement('cj-zi')
// @ts-ignore
export class Zi2c extends LitElement {

  public ziRes: any;
  private curZi: string;
  private cjApi: CjApi;

  constructor() {
    super();
    this.curZi = '';
    this.cjApi = new CjApi();
  }

  static get properties() {
    return {
      curZi: String,
      ziRes: Object
    }
  }

  getZi(e: any): void {
    this.ziRes = '';
    if (e.key !== 'Enter') return;
    console.log('getZi:', e.target.value);
    this.curZi = e.target.value;
    if (e.target.value) {
      this.cjApi.getCodeByZi(this.curZi)
        .pipe(
          filter( e=>'code' in e.data)
        )
        .subscribe(
          res => {
            this.ziRes = res.data.code.join(', ').toUpperCase();
            console.log('Api-ziRes: ', this.ziRes);
          }
        )
    }
  }

  protected render(): TemplateResult | void {
    return html`
        <h3>Zi-to-Code Page</h3>
       <input type="text" @keydown=${ this.getZi } required />
       <div style="display: flex">
        <h4>${this.curZi} - &nbsp;
            <span style="color: red;font-size: 1.345em;">${this.ziRes}</span>
        </h4>           
       </div>
    `;
  }

  protected createRenderRoot(): Element | ShadowRoot {
    return this;
  }

}
