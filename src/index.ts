import { LitElement, html, customElement } from "lit-element";

import "./views";

@customElement("grid-fun-app")
export class GridFunApp extends LitElement {
  render() {
    return html`
      <ui-sketches-img></ui-sketches-img>
    `;
  }
}
