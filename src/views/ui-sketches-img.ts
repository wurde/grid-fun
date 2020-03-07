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
      width: 51px;
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
        <!-- Row 1 -->
        <a href="/ui-1"><div style="left: 45px; top: 42px;"></div></a>
        <a href="/ui-2"><div style="left: 129px; top: 42px;"></div></a>
        <a href="/ui-3"><div style="left: 211px; top: 42px;"></div></a>
        <a href="/ui-4"><div style="left: 295px; top: 42px;"></div></a>
        <a href="/ui-5"><div style="left: 380px; top: 42px;"></div></a>
        <a href="/ui-6"><div style="left: 464px; top: 42px;"></div></a>
        <a href="/ui-7"><div style="left: 545px; top: 42px;"></div></a>
        <a href="/ui-8"><div style="left: 630px; top: 42px;"></div></a>
        <a href="/ui-9"><div style="left: 713px; top: 42px;"></div></a>
        <!-- Row 2 -->
        <a href="/ui-1"><div style="left: 45px; top: 125px;"></div></a>
        <a href="/ui-2"><div style="left: 129px; top: 125px;"></div></a>
        <a href="/ui-3"><div style="left: 211px; top: 125px;"></div></a>
        <a href="/ui-4"><div style="left: 295px; top: 125px;"></div></a>
        <a href="/ui-5"><div style="left: 380px; top: 125px;"></div></a>
        <a href="/ui-6"><div style="left: 464px; top: 125px;"></div></a>
        <a href="/ui-7"><div style="left: 545px; top: 125px;"></div></a>
        <a href="/ui-8"><div style="left: 630px; top: 125px;"></div></a>
        <a href="/ui-9"><div style="left: 713px; top: 125px;"></div></a>
        <!-- Row 3 -->
        <a href="/ui-1"><div style="left: 45px; top: 208px;"></div></a>
        <a href="/ui-2"><div style="left: 129px; top: 208px;"></div></a>
        <a href="/ui-3"><div style="left: 211px; top: 208px;"></div></a>
        <a href="/ui-4"><div style="left: 295px; top: 208px;"></div></a>
        <a href="/ui-5"><div style="left: 380px; top: 208px;"></div></a>
        <a href="/ui-6"><div style="left: 464px; top: 208px;"></div></a>
        <a href="/ui-7"><div style="left: 545px; top: 208px;"></div></a>
        <a href="/ui-8"><div style="left: 630px; top: 208px;"></div></a>
        <a href="/ui-9"><div style="left: 713px; top: 208px;"></div></a>
        <!-- Row 4 -->
        <a href="/ui-1"><div style="left: 45px; top: 291px;"></div></a>
        <a href="/ui-2"><div style="left: 129px; top: 291px;"></div></a>
        <a href="/ui-3"><div style="left: 211px; top: 291px;"></div></a>
        <a href="/ui-4"><div style="left: 295px; top: 291px;"></div></a>
        <a href="/ui-5"><div style="left: 380px; top: 291px;"></div></a>
        <a href="/ui-6"><div style="left: 464px; top: 291px;"></div></a>
        <a href="/ui-7"><div style="left: 545px; top: 291px;"></div></a>
        <a href="/ui-8"><div style="left: 630px; top: 291px;"></div></a>
        <a href="/ui-9"><div style="left: 713px; top: 291px;"></div></a>
        <!-- Row 5 -->
        <a href="/ui-1"><div style="left: 45px; top: 375px;"></div></a>
        <a href="/ui-2"><div style="left: 129px; top: 375px;"></div></a>
        <a href="/ui-3"><div style="left: 211px; top: 375px;"></div></a>
        <a href="/ui-4"><div style="left: 295px; top: 375px;"></div></a>
        <a href="/ui-5"><div style="left: 380px; top: 375px;"></div></a>
        <a href="/ui-6"><div style="left: 464px; top: 375px;"></div></a>
        <a href="/ui-7"><div style="left: 545px; top: 375px;"></div></a>
        <a href="/ui-8"><div style="left: 630px; top: 375px;"></div></a>
        <a href="/ui-9"><div style="left: 713px; top: 375px;"></div></a>
        <!-- Row 6 -->
        <a href="/ui-1"><div style="left: 45px; top: 459px;"></div></a>
        <a href="/ui-2"><div style="left: 129px; top: 459px;"></div></a>
        <a href="/ui-3"><div style="left: 211px; top: 459px;"></div></a>
        <a href="/ui-4"><div style="left: 295px; top: 459px;"></div></a>
        <a href="/ui-5"><div style="left: 380px; top: 459px;"></div></a>
        <a href="/ui-6"><div style="left: 464px; top: 459px;"></div></a>
        <a href="/ui-7"><div style="left: 545px; top: 459px;"></div></a>
        <a href="/ui-8"><div style="left: 630px; top: 459px;"></div></a>
        <a href="/ui-9"><div style="left: 713px; top: 459px;"></div></a>
      </section>
    `;
  }
}
