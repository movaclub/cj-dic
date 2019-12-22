import { LitElement, html, TemplateResult, customElement } from "lit-element";
import { InputService, InputInterface } from "../input-service";

// @ts-ignore
@customElement('cj-menu')
// @ts-ignore
export class CjMenu extends LitElement {

  private inputData: InputInterface;

  constructor(
    readonly inputService: InputService = new InputService()
  ) {
    super();
    // this.inputService.getInputs()
    //   .subscribe(
    //     (res: any) => {
    //       console.log('menuInputSvc-res', res);
    //       this.inputData = res;
    //     }
    //   )
  }

  pickPage(e: Event): void {
    if ( 'id' in e.currentTarget ) {
      // console.log('getClick-e:', e.currentTarget['id']);
      this.inputService.savePage(e.currentTarget['id']);
    }
  }


  static get properties() {
    return {
    }
  }

  protected render(): TemplateResult | void {
    return html`
        <button id="startPage" @click=${ this.pickPage }>START</button>&nbsp;
        <button id="code2ZI" @click=${ this.pickPage }>ABC &rarr; 字</button>&nbsp;        
        <button id="zi2CODE" @click=${ this.pickPage }>字 &rarr; ABC</button>&nbsp;
        `;
  }

  protected createRenderRoot(): Element | ShadowRoot {
    return this;
  }

}
