import { LitElement, html, css, customElement } from "lit-element";

@customElement("grid-fun-app")
export class GridFunApp extends LitElement {
    static styles = css`
      h2 {
        color: red;
        font-weight: bold;
      }
    `

    render() {
        return html`<h2>Grid Fun</h2>`
    }
}
