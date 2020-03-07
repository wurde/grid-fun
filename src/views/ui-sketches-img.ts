import { LitElement, html, css, customElement } from "lit-element";

@customElement("ui-sketches-img")
export class UiSketchesImage extends LitElement {
  static styles = css`
    :host {
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #333;
    }

    img {
      width: 95%;
    }

    @media (min-width: 1024px) {
      img {
        width: 60%;
      }
    }

    @media (min-width: 1920px) {
      img {
        width: 50%;
      }
    }
  `;

  render() {
    return html`
      <img src="/images/brainstorm-ui-20200226.png" />
    `;
  }
}
