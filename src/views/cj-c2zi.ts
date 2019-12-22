import { LitElement, customElement, TemplateResult, html } from "lit-element";

@customElement('cj-code')
export class CjC2zi extends LitElement {

  constructor() {
    super();
  }

  static get properties() {
    return {

    }
  }

  protected render(): TemplateResult | void {
    return html`
      <h3>Code-to-Zi Page</h3>
    `;
  }

  protected createRenderRoot(): Element | ShadowRoot {
    return this;
  }

}
