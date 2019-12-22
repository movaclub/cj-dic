import { LitElement, customElement, TemplateResult, html } from "lit-element";

@customElement('cj-zi')
export class Zi2c extends LitElement {

  constructor() {
    super();
  }

  static get properties() {
    return {

    }
  }

  protected render(): TemplateResult | void {
    return html`
        <h3>Zi-to-Code Page</h3>
    `;
  }

  protected createRenderRoot(): Element | ShadowRoot {
    return this;
  }

}
