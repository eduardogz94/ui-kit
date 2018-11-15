class EgGrid extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.setAttribute("class", "container-fluid");
    this.setGrid();
    this.defaultProperties();
    ccc.registerComponent(this, {
      id: this.id,
      secret: "Grid Parent"
    });
  }

  defaultProperties() {
    let classname = "";
    this.getAttributeNames().forEach(element => {
      classname += `${this.getAttribute(`${element}`)} `;
    });
    this.className = classname;
  }

  /**
   * A function to set EgGrid properties as they are received from a js instance.
   * @function
   * @returns {defaultProperties()}
   */
  setGrid() {
    if (this.id) this.setAttribute("id", this.id);
    if (this.col) this.setAttribute("col", this.col);
    if (this.offset) this.setAttribute("offset", this.offset);
    if (this.bg) this.setAttribute("bg", this.bg);
    if (this.css) this.setAttribute("css", this.css);
  }
}

customElements.define("eg-grid", EgGrid);
