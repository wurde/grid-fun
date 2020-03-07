import { LitElement, html, css, property, customElement } from "lit-element";

@customElement("ui-sketches-img")
export class UiSketchesImage extends LitElement {
  @property({ type: String }) usemap!: string;

  static styles = css`
    :host {
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #333;
    }

    * {
      box-sizing: border-box;
    }

    section {
      position: relative;
    }

    img {
      width: 825px;
      padding: 15px;
      background-color: #fff;
      border-radius: 10px;
      -webkit-box-shadow: -15px 15px 19px -12px rgba(0, 0, 0, 0.75);
      -moz-box-shadow: -15px 15px 19px -12px rgba(0, 0, 0, 0.75);
      box-shadow: -15px 15px 19px -12px rgba(0, 0, 0, 0.75);
    }

    div {
      position: absolute;
      width: 52px;
      height: 52px;
      background-color: rgba(0, 0, 0, 0.25);
    }
  `;

  /**
   * CSS Map Area.
   *
   * - the distance from the left edge of the image to the left side of the rectangle.
   * - the distance from the top edge to the top side.
   * - the distance from the left edge to the right side.
   * - the distance from the top edge to the bottom side.
   */

  render() {
    return html`
      <section>
        <img
          src="/images/brainstorm-ui-20200226.png"
          usemap="#ui-links"
          alt="UI Sketches."
        />
        <a href="/ui-1"><div style="left: 45px; top: 42px;"></div></a>
        <a href="/ui-2"><div style="left: 135px; top: 42px;"></div></a>
      </section>
    `;
  }
}
