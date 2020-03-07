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
      width: 90%;
      padding: 15px;
      background-color: #fff;
      border-radius: 10px;
      -webkit-box-shadow: -15px 15px 19px -12px rgba(0,0,0,0.75);
      -moz-box-shadow: -15px 15px 19px -12px rgba(0,0,0,0.75);
      box-shadow: -15px 15px 19px -12px rgba(0,0,0,0.75);
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
