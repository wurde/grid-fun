import { LitElement, html, property, customElement } from "lit-element";

@customElement("select-current-view")
export class SelectCurrentView extends LitElement {
  @property({ type: Object }) views: { [key: string]: string } = {};
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
        ${Object.keys(this.views).map(k => html`
          <option value="${k}"
            ?selected="${this.currentView == k}">${this.views[k]}</option>
        `)}
      </select>
    `;
  }
}
