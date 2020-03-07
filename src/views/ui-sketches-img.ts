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
    }
    div:hover {
      -webkit-box-shadow: -3px 5px 5px 0px rgba(0, 0, 0, 0.35);
      -moz-box-shadow: -3px 5px 5px 0px rgba(0, 0, 0, 0.35);
      box-shadow: -3px 5px 5px 0px rgba(0, 0, 0, 0.35);
    }
  `;

  render() {
    return html`
      <section>
        <img src="/images/brainstorm-ui-20200226.png" alt="UI Sketches." />
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
        <a href="/ui-10"><div style="left: 45px; top: 125px;"></div></a>
        <a href="/ui-11"><div style="left: 129px; top: 125px;"></div></a>
        <a href="/ui-12"><div style="left: 211px; top: 125px;"></div></a>
        <a href="/ui-13"><div style="left: 295px; top: 125px;"></div></a>
        <a href="/ui-14"><div style="left: 380px; top: 125px;"></div></a>
        <a href="/ui-15"><div style="left: 464px; top: 125px;"></div></a>
        <a href="/ui-16"><div style="left: 545px; top: 125px;"></div></a>
        <a href="/ui-17"><div style="left: 630px; top: 125px;"></div></a>
        <a href="/ui-18"><div style="left: 713px; top: 125px;"></div></a>
        <!-- Row 3 -->
        <a href="/ui-19"><div style="left: 45px; top: 208px;"></div></a>
        <a href="/ui-20"><div style="left: 129px; top: 208px;"></div></a>
        <a href="/ui-21"><div style="left: 211px; top: 208px;"></div></a>
        <a href="/ui-22"><div style="left: 295px; top: 208px;"></div></a>
        <a href="/ui-23"><div style="left: 380px; top: 208px;"></div></a>
        <a href="/ui-24"><div style="left: 464px; top: 208px;"></div></a>
        <a href="/ui-25"><div style="left: 545px; top: 208px;"></div></a>
        <a href="/ui-26"><div style="left: 630px; top: 208px;"></div></a>
        <a href="/ui-27"><div style="left: 713px; top: 208px;"></div></a>
        <!-- Row 4 -->
        <a href="/ui-28"><div style="left: 45px; top: 291px;"></div></a>
        <a href="/ui-29"><div style="left: 129px; top: 291px;"></div></a>
        <a href="/ui-30"><div style="left: 211px; top: 291px;"></div></a>
        <a href="/ui-31"><div style="left: 295px; top: 291px;"></div></a>
        <a href="/ui-32"><div style="left: 380px; top: 291px;"></div></a>
        <a href="/ui-33"><div style="left: 464px; top: 291px;"></div></a>
        <a href="/ui-34"><div style="left: 545px; top: 291px;"></div></a>
        <a href="/ui-35"><div style="left: 630px; top: 291px;"></div></a>
        <a href="/ui-36"><div style="left: 713px; top: 291px;"></div></a>
        <!-- Row 5 -->
        <a href="/ui-37"><div style="left: 45px; top: 375px;"></div></a>
        <a href="/ui-38"><div style="left: 129px; top: 375px;"></div></a>
        <a href="/ui-39"><div style="left: 211px; top: 375px;"></div></a>
        <a href="/ui-40"><div style="left: 295px; top: 375px;"></div></a>
        <a href="/ui-41"><div style="left: 380px; top: 375px;"></div></a>
        <a href="/ui-42"><div style="left: 464px; top: 375px;"></div></a>
        <a href="/ui-43"><div style="left: 545px; top: 375px;"></div></a>
        <a href="/ui-44"><div style="left: 630px; top: 375px;"></div></a>
        <a href="/ui-45"><div style="left: 713px; top: 375px;"></div></a>
        <!-- Row 6 -->
        <a href="/ui-46"><div style="left: 45px; top: 459px;"></div></a>
        <a href="/ui-47"><div style="left: 129px; top: 459px;"></div></a>
        <a href="/ui-48"><div style="left: 211px; top: 459px;"></div></a>
        <a href="/ui-49"><div style="left: 295px; top: 459px;"></div></a>
        <a href="/ui-50"><div style="left: 380px; top: 459px;"></div></a>
        <a href="/ui-51"><div style="left: 464px; top: 459px;"></div></a>
        <a href="/ui-52"><div style="left: 545px; top: 459px;"></div></a>
        <a href="/ui-53"><div style="left: 630px; top: 459px;"></div></a>
        <a href="/ui-54"><div style="left: 713px; top: 459px;"></div></a>
      </section>
    `;
  }
}
