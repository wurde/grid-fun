import { LitElement, html, css, customElement } from "lit-element";

import "./views";

@customElement("grid-fun-app")
export class GridFunApp extends LitElement {
  static styles = css`
    :host {
      height: 100vh;
      display: grid;
      grid-template-areas:
        ". . ."
        ". c ."
        ". . .";
      grid-template-columns: 1fr auto 1fr;
      grid-template-rows: 1fr auto 1fr;
      background-color: #333;
    }

    ui-sketches-img {
      grid-area: c;
    }
  `;

  render() {
    return html`
      <ui-sketches-img .usemap="ui-links"></ui-sketches-img>
      <ui-sketches-map .name="ui-links"></ui-sketches-map>
    `;
  }
}
