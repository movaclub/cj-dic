import { LitElement, customElement, html, TemplateResult } from "lit-element";

import { Zi2c } from "./views/zi2c";        // zi2code
import { CjC2zi } from "./views/cj-c2zi";   // code2zi
import { CjStart } from "./views/cj-start"; // start UI

// ROUTING by means of 'hidden' property for a set of comps

// @ts-ignore
@customElement('cj-content')
// @ts-ignore
export class CjContent extends LitElement {

  public pages: {
    startPage: string;
    code2Zi: string;
    zi2CODE: string;
  };

  public uis: {
    'startPage': CjStart,
    'code2Zi': CjC2zi,
    'zi2CODE': Zi2c
  };

  constructor(

    readonly zi2C: Zi2c = new Zi2c(),
    readonly cjC2zi: CjC2zi = new CjC2zi(),
    readonly cjStart: CjStart = new CjStart()

  ) {
    super();
    this.uis = {
      "startPage": cjStart,
      "code2Zi": cjC2zi,
      "zi2CODE": zi2C
    };

    // start page's visible by default
    this.pages = {
      startPage: '',
      code2Zi: 'none',
      zi2CODE: 'none'
    };

  }
  pickPage(page: string): void {
    this.pages = {
      startPage: 'none',
      code2Zi: 'none',
      zi2CODE: 'none'
    };
    // @ts-ignore
    this.pages[page] = '';
    // this.inputContainer.curPage = page;
    console.log('pickPage-PAGES:', this.pages);
  }

  static get properties() {
    return {
      pages: Array
    }
  }

  protected render(): TemplateResult | void {
    return html`
<div class="cj-menu">
  <button id="startPage" @click=${ ()=>this.pickPage('startPage') }>START</button>&nbsp;
  <button id="code2Zi" @click=${ ()=>this.pickPage('code2Zi') }>ABC &rarr; 字</button>&nbsp;        
  <button id="zi2CODE" @click=${ ()=>this.pickPage('zi2CODE') }>字 &rarr; ABC</button>&nbsp;
</div>
  <cj-start style="display: ${this.pages['startPage']}"></cj-start>
  <cj-zi style="display: ${this.pages['zi2CODE']}"></cj-zi>
  <cj-code style="display: ${this.pages['code2Zi']}"></cj-code>
    `;
  }

  protected createRenderRoot(): Element | ShadowRoot {
    return this;
  }

}
