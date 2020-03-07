import { LitElement, html, property, customElement } from "lit-element";

import "./layouts";
import "./components/SelectCurrentView";

const views = {
  "full-screen": "Full Screen",
  "simple-sidebar": "Simple Sidebar",
};

@customElement("grid-fun-app")
export class GridFunApp extends LitElement {
  @property({ type: String }) currentView = "simple-sidebar";

  changeView(event: CustomEvent) {
    this.currentView = event.detail.currentView;
  }

  render() {
    return html`
      <h1>
        Current Layout: <small><strong>${this.currentView}</strong></small>
      </h1>

      <select-current-view
        .views="${views}"
        .currentView="${this.currentView}"
        @change-view="${this.changeView}"
      ></select-current-view>

      <full-screen></full-screen>
      <simple-sidebar></simple-sidebar>
    `;
  }
}
