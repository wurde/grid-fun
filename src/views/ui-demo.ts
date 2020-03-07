import { LitElement, html, css, property, customElement } from "lit-element";

import sketches from "../sketches/20200302";

@customElement("ui-demo")
export class UiDemo extends LitElement {
  @property({ type: Number }) sketchNumber: number = 0;

  static styles = css`
    :host {
      display: flex;
      flex-direction: column;
    }

    a {
      padding: 15px 0px;
      color: #DDD;
      font-size: 22px;
      font-weight: bold;
    }

    iframe {
      width: 90vw;
      height: 90vh;
    }

    @media (min-width: 1024px) {
      iframe {
        width: 85vw;
        height: 85vh;
      }
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
      <a href="/" @click="${this.goHome}">Back</a>

      ${sketches[this.sketchNumber]()}
    `;
  }
}
