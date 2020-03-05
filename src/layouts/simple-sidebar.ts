import { LitElement, html, css, customElement } from "lit-element";

@customElement("simple-sidebar")
export class SimpleSidebar extends LitElement {
  static styles = css`
  `;

  render() {
    return html`
      <h2>Simple Sidebar</h2>
    `;
  }
}
