import { LitElement, html, property, customElement } from "lit-element";

@customElement("select-current-view")
export class SelectCurrentView extends LitElement {
  @property({ type: String }) currentView = null;

  changeView(event: Event): void {
    this.dispatchEvent(new CustomEvent("change-view", {
      detail: { currentView: (<HTMLSelectElement>event.target).value },
      bubbles: true,
      composed: true
    }));
  }

  render() {
    return html`
      <select id="select-view" name="currentView" @change="${this.changeView}" autofocus>
        <option value="full-screen"
          ?selected="${this.currentView == "full-screen"}">Full Screen</option>
        <option value="simple-sidebar"
          ?selected="${this.currentView == "simple-sidebar"}">Simple Sidebar</option>
      </select>
    `;
  }
}
