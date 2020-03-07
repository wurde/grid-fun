import { LitElement, html, css, property, customElement } from "lit-element";

@customElement("ui-demo")
export class UiDemo extends LitElement {
  @property({ type: Number }) sketchNumber: number = 0;

  static styles = css`
    :host {
      background-color: yellow;
    }
  `;

  render() {
    return html`
      ${this.sketchNumber}
    `;
  }
}

