import { LitElement, html, css, property, customElement } from "lit-element";

import "./views";

@customElement("grid-fun-app")
export class GridFunApp extends LitElement {
  @property({ type: String }) currentView: string = "ui-sketches";
  @property({ type: Number }) sketchNumber: number = 1;

  static styles = css`
    :host {
      height: 100vh;
      display: grid;
      grid-template-areas:
        ". . ."
        ". c ."
        ". . .";
      grid-template-columns: 1fr auto 1fr;
      grid-template-rows: 1fr auto 1fr;
      background-color: #333;
    }

    ui-sketches-img {
      grid-area: c;
    }
  `;

  constructor() {
    super();
    this.addEventListener("visit-demo", ((e: CustomEvent) => {
      this.sketchNumber = e.detail.sketchNumber;
      this.currentView = "ui-demo";
    }) as EventListener);
    this.addEventListener("visit-home", ((e: CustomEvent) => {
      this.currentView = "ui-sketches";
    }) as EventListener);
  }

  renderCurrentView() {
    switch (this.currentView) {
      case 'ui-sketches':
        return html`<ui-sketches-img></ui-sketches-img>`;
      case "ui-demo":
        return html`
          <ui-demo .sketchNumber="${this.sketchNumber}"></ui-demo>
        `;
      default:
        return html`<ui-sketches-img></ui-sketches-img>`;
    }
  }

  render() {
    return html`
      ${this.renderCurrentView()}
    `;
  }
}
