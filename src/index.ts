import {customElement, html, LitElement} from "lit-element";
import { CjContent } from "./cj-content";

// @ts-ignore
@customElement('cj-root')
// @ts-ignore
export class CjRoot extends LitElement {

  constructor(
    readonly cjContent: CjContent = new CjContent()
  ) {
    super();
  }

  static get properties() {
    return {
      cjContent: CjContent
    }
  }

  protected render() {
    return html`
        <cj-content .cjContent></cj-content>
    `;
  }

  protected createRenderRoot(): Element | ShadowRoot {
    return this;
  }

}
