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

  visitDemo(e: Event) {
    e.preventDefault();
    this.dispatchEvent(new CustomEvent("visit-demo", {
      detail: { sketchNumber: (<HTMLAnchorElement>e.currentTarget).dataset.sketchNumber },
      composed: true,
      bubbles: true,
    }));
  }

  render() {
    return html`
      <section>
        <img src="/images/brainstorm-ui-20200302.png" alt="UI Sketches." />
        <!-- Row 1 -->
        <a href="/ui-1" @click="${this.visitDemo}" data-sketch-number="1"><div style="left: 45px; top: 42px;"></div></a>
        <a href="/ui-2" @click="${this.visitDemo}" data-sketch-number="2"><div style="left: 129px; top: 42px;"></div></a>
        <a href="/ui-3" @click="${this.visitDemo}" data-sketch-number="3"><div style="left: 211px; top: 42px;"></div></a>
        <a href="/ui-4" @click="${this.visitDemo}" data-sketch-number="4"><div style="left: 295px; top: 42px;"></div></a>
        <a href="/ui-5" @click="${this.visitDemo}" data-sketch-number="5"><div style="left: 380px; top: 42px;"></div></a>
        <a href="/ui-6" @click="${this.visitDemo}" data-sketch-number="6"><div style="left: 464px; top: 42px;"></div></a>
        <a href="/ui-7" @click="${this.visitDemo}" data-sketch-number="7"><div style="left: 545px; top: 42px;"></div></a>
        <a href="/ui-8" @click="${this.visitDemo}" data-sketch-number="8"><div style="left: 630px; top: 42px;"></div></a>
        <a href="/ui-9" @click="${this.visitDemo}" data-sketch-number="9"><div style="left: 713px; top: 42px;"></div></a>
        <!-- Row 2 -->
        <a href="/ui-10" @click="${this.visitDemo}" data-sketch-number="10"><div style="left: 45px; top: 125px;"></div></a>
        <a href="/ui-11" @click="${this.visitDemo}" data-sketch-number="11"><div style="left: 129px; top: 125px;"></div></a>
        <a href="/ui-12" @click="${this.visitDemo}" data-sketch-number="12"><div style="left: 211px; top: 125px;"></div></a>
        <a href="/ui-13" @click="${this.visitDemo}" data-sketch-number="13"><div style="left: 295px; top: 125px;"></div></a>
        <a href="/ui-14" @click="${this.visitDemo}" data-sketch-number="14"><div style="left: 380px; top: 125px;"></div></a>
        <a href="/ui-15" @click="${this.visitDemo}" data-sketch-number="15"><div style="left: 464px; top: 125px;"></div></a>
        <a href="/ui-16" @click="${this.visitDemo}" data-sketch-number="16"><div style="left: 545px; top: 125px;"></div></a>
        <a href="/ui-17" @click="${this.visitDemo}" data-sketch-number="17"><div style="left: 630px; top: 125px;"></div></a>
        <a href="/ui-18" @click="${this.visitDemo}" data-sketch-number="18"><div style="left: 713px; top: 125px;"></div></a>
        <!-- Row 3 -->
        <a href="/ui-19" @click="${this.visitDemo}" data-sketch-number="19"><div style="left: 45px; top: 208px;"></div></a>
        <a href="/ui-20" @click="${this.visitDemo}" data-sketch-number="20"><div style="left: 129px; top: 208px;"></div></a>
        <a href="/ui-21" @click="${this.visitDemo}" data-sketch-number="21"><div style="left: 211px; top: 208px;"></div></a>
        <a href="/ui-22" @click="${this.visitDemo}" data-sketch-number="22"><div style="left: 295px; top: 208px;"></div></a>
        <a href="/ui-23" @click="${this.visitDemo}" data-sketch-number="23"><div style="left: 380px; top: 208px;"></div></a>
        <a href="/ui-24" @click="${this.visitDemo}" data-sketch-number="24"><div style="left: 464px; top: 208px;"></div></a>
        <a href="/ui-25" @click="${this.visitDemo}" data-sketch-number="25"><div style="left: 545px; top: 208px;"></div></a>
        <a href="/ui-26" @click="${this.visitDemo}" data-sketch-number="26"><div style="left: 630px; top: 208px;"></div></a>
        <a href="/ui-27" @click="${this.visitDemo}" data-sketch-number="27"><div style="left: 713px; top: 208px;"></div></a>
        <!-- Row 4 -->
        <a href="/ui-28" @click="${this.visitDemo}" data-sketch-number="28"><div style="left: 45px; top: 291px;"></div></a>
        <a href="/ui-29" @click="${this.visitDemo}" data-sketch-number="29"><div style="left: 129px; top: 291px;"></div></a>
        <a href="/ui-30" @click="${this.visitDemo}" data-sketch-number="30"><div style="left: 211px; top: 291px;"></div></a>
        <a href="/ui-31" @click="${this.visitDemo}" data-sketch-number="31"><div style="left: 295px; top: 291px;"></div></a>
        <a href="/ui-32" @click="${this.visitDemo}" data-sketch-number="32"><div style="left: 380px; top: 291px;"></div></a>
        <a href="/ui-33" @click="${this.visitDemo}" data-sketch-number="33"><div style="left: 464px; top: 291px;"></div></a>
        <a href="/ui-34" @click="${this.visitDemo}" data-sketch-number="34"><div style="left: 545px; top: 291px;"></div></a>
        <a href="/ui-35" @click="${this.visitDemo}" data-sketch-number="35"><div style="left: 630px; top: 291px;"></div></a>
        <a href="/ui-36" @click="${this.visitDemo}" data-sketch-number="36"><div style="left: 713px; top: 291px;"></div></a>
        <!-- Row 5 -->
        <a href="/ui-37" @click="${this.visitDemo}" data-sketch-number="37"><div style="left: 45px; top: 375px;"></div></a>
        <a href="/ui-38" @click="${this.visitDemo}" data-sketch-number="38"><div style="left: 129px; top: 375px;"></div></a>
        <a href="/ui-39" @click="${this.visitDemo}" data-sketch-number="39"><div style="left: 211px; top: 375px;"></div></a>
        <a href="/ui-40" @click="${this.visitDemo}" data-sketch-number="40"><div style="left: 295px; top: 375px;"></div></a>
        <a href="/ui-41" @click="${this.visitDemo}" data-sketch-number="41"><div style="left: 380px; top: 375px;"></div></a>
        <a href="/ui-42" @click="${this.visitDemo}" data-sketch-number="42"><div style="left: 464px; top: 375px;"></div></a>
        <a href="/ui-43" @click="${this.visitDemo}" data-sketch-number="43"><div style="left: 545px; top: 375px;"></div></a>
        <a href="/ui-44" @click="${this.visitDemo}" data-sketch-number="44"><div style="left: 630px; top: 375px;"></div></a>
        <a href="/ui-45" @click="${this.visitDemo}" data-sketch-number="45"><div style="left: 713px; top: 375px;"></div></a>
        <!-- Row 6 -->
        <a href="/ui-46" @click="${this.visitDemo}" data-sketch-number="46"><div style="left: 45px; top: 459px;"></div></a>
        <a href="/ui-47" @click="${this.visitDemo}" data-sketch-number="47"><div style="left: 129px; top: 459px;"></div></a>
        <a href="/ui-48" @click="${this.visitDemo}" data-sketch-number="48"><div style="left: 211px; top: 459px;"></div></a>
        <a href="/ui-49" @click="${this.visitDemo}" data-sketch-number="49"><div style="left: 295px; top: 459px;"></div></a>
        <a href="/ui-50" @click="${this.visitDemo}" data-sketch-number="50"><div style="left: 380px; top: 459px;"></div></a>
        <a href="/ui-51" @click="${this.visitDemo}" data-sketch-number="51"><div style="left: 464px; top: 459px;"></div></a>
        <a href="/ui-52" @click="${this.visitDemo}" data-sketch-number="52"><div style="left: 545px; top: 459px;"></div></a>
        <a href="/ui-53" @click="${this.visitDemo}" data-sketch-number="53"><div style="left: 630px; top: 459px;"></div></a>
        <a href="/ui-54" @click="${this.visitDemo}" data-sketch-number="54"><div style="left: 713px; top: 459px;"></div></a>
      </section>
    `;
  }
}
