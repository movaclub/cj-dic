import {customElement, html, LitElement} from "lit-element";
// import { CjMenu } from "./views/cj-menu";
import { CjContent } from "./cj-content";

// @ts-ignore
@customElement('cj-root')
// @ts-ignore
export class CjRoot extends LitElement {

  constructor(
    // readonly cjMenu: CjMenu = new CjMenu(),
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
<!--        <cj-menu .cjMenu class="cj-menu"></cj-menu>-->
        <cj-content .cjContent></cj-content>
    `;
  }

  protected createRenderRoot(): Element | ShadowRoot {
    return this;
  }

}
