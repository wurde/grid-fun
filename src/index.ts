import { LitElement, html, customElement } from "lit-element";

import "./layouts";

@customElement("grid-fun-app")
export class GridFunApp extends LitElement {
  render() {
    return html`
      <h2>Grid Fun</h2>

      <full-screen></full-screen>
      <simple-sidebar></simple-sidebar>
    `
  }
}
