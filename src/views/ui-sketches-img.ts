import { LitElement, html, css, customElement } from "lit-element";

@customElement("ui-sketches-img")
export class UiSketchesImage extends LitElement {
  static styles = css`
    :host {
      background-color: red;
    }
  `;

  render() {
    return html`
      UiSketchesImage
    `;
  }
}

