import { LitElement, html, TemplateResult, customElement } from "lit-element";

@customElement('cj-start')
export class CjStart extends LitElement{

  constructor() {
    super();
  }

  static get properties() {
    return {

    }
  }

  protected render(): TemplateResult | void {
    return html`
      <h3>Start page</h3>
    `;
  }

  protected createRenderRoot(): Element | ShadowRoot {
    return this;
  }

}
