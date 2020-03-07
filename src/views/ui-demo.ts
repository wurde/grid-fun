import { LitElement, html, css, property, customElement } from "lit-element";

@customElement("ui-demo")
export class UiDemo extends LitElement {
  @property({ type: Number }) sketchNumber: number = 0;

  static styles = css`
    :host {
      background-color: yellow;
    }
  `;

  goHome(e: Event) {
    e.preventDefault();
    this.dispatchEvent(new CustomEvent("visit-home", {
      composed: true,
      bubbles: true,
    }));
  }

  render() {
    return html`
      <a href="/" @click="${this.goHome}">Go Back</a>
      ${this.sketchNumber}
    `;
  }
}

