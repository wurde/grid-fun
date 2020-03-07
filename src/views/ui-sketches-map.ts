import { LitElement, html, css, property, customElement } from "lit-element";

@customElement("ui-sketches-map")
export class UiSketchesMap extends LitElement {
  @property({ type: String }) name!: string;

  static styles = css`
    div {
      position: absolute;
      width: 4%; height: 8%;
      background-color: rgba(0, 0, 0, .25);
    }
  `;

  render() {
    return html`
    `;
  }
}
