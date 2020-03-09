import { html } from "lit-html";

const sketches: any = [
  { title: "UI Sketch 1", id: "mdJqjJw" },
  { title: "UI Sketch 2", id: "XWbzBYX" },
  { title: "UI Sketch 3", id: "jOPappo" },
  { title: "UI Sketch 4", id: "KKpyBxj" },
  { title: "UI Sketch 5", id: "yLNPqGL" },
  { title: "UI Sketch 6", id: "bGdYjOz" },
  { title: "UI Sketch 7", id: "VwLrBgy" },
  { title: "UI Sketch 8", id: "eYNejXJ" },
  { title: "UI Sketch 9", id: "wvaPxZN" },
  { title: "UI Sketch 10", id: "dyoZqpe" },
  { title: "UI Sketch 11", id: "qBdVMqx" },
  { title: "UI Sketch 12", id: "zYGPJWP" },
  { title: "UI Sketch 13", id: "QWbOVRG" },
  { title: "UI Sketch 14", id: "VwLrGON" },
  { title: "UI Sketch 15", id: "abOVaej" },
  { title: "UI Sketch 16", id: "ExjbdVe" },
  { title: "UI Sketch 17", id: "wvaPYJg" },
  { title: "UI Sketch 18", id: "PoqOyKG" },
  { title: "UI Sketch 19", id: "NWqwmXP" },
  { title: "UI Sketch 20", id: "XWbzQPz" },
  { title: "UI Sketch 21", id: "dyoZLBa" },
  { title: "UI Sketch 22", id: "ZEGaNKo" },
  { title: "UI Sketch 23", id: "ExjbzXO" },
  { title: "UI Sketch 24", id: "xxGPNXB" },
  { title: "UI Sketch 25", id: "abOVrVX" },
  { title: "UI Sketch 26", id: "dyoZEdy" },
  { title: "UI Sketch 27", id: "mdJqYxP" },
  { title: "UI Sketch 28", id: "vYOWwjN" },
  { title: "UI Sketch 29", id: "QWbORXr" },
  { title: "UI Sketch 30", id: "vYOWqBy" },
  { title: "UI Sketch 31", id: "poJdXgQ" },
  { title: "UI Sketch 32", id: "eYNewdw" },
  { title: "UI Sketch 33", id: "zYGPVjv" },
  { title: "UI Sketch 34", id: "qBdVzKR" },
  { title: "UI Sketch 35", id: "PoqOryB" },
  { title: "UI Sketch 36", id: "jOPajQo" },
  { title: "UI Sketch 37", id: "wvaPLNR" },
  { title: "UI Sketch 38", id: "XWbzvBe" },
  { title: "UI Sketch 39", id: "dyoZxjg" },
  { title: "UI Sketch 40", id: "zYGPgMp" },
  { title: "UI Sketch 41", id: "vYOWobM" },
  { title: "UI Sketch 42", id: "OJVzLmX" },
  { title: "UI Sketch 43", id: "abOEoqM" },
  { title: "UI Sketch 44", id: "MWwrgzq" },
  { title: "UI Sketch 45", id: "gOpoYZg" },
  { title: "UI Sketch 46", id: "poJpojQ" },
  { title: "UI Sketch 47", id: "qBdpBqb" },
  { title: "UI Sketch 48", id: "LYVeYLR" },
  { title: "UI Sketch 49", id: "jOPYOGX" },
  { title: "UI Sketch 50", id: "abOEbEd" },
  { title: "UI Sketch 51", id: "GRJyRyy" },
];

for (let i = 0; i < sketches.length; i++) {
  sketches[i].render = () => {
    return html`
      <h2>${sketches[i].title}</h2>
      <iframe
        scrolling="no"
        title="${sketches[i].title}"
        src="https://codepen.io/wurde/embed/${sketches[i].id}?height=265&theme-id=dark&default-tab=css,result"
        frameborder="no"
        allowtransparency="true"
        allowfullscreen="true"
      >
        See the Pen
        <a href="https://codepen.io/wurde/pen/${sketches[i].id}">${sketches[i].title}</a> by Andy
        Bettisworth (<a href="https://codepen.io/wurde">@wurde</a>) on
        <a href="https://codepen.io">CodePen</a>.
      </iframe>
    `;
  }
}

export default sketches;
