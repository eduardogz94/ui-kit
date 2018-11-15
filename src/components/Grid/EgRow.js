class EgRow extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.setAttribute("class", "row");
    this.defaultProperties();
    ccc.registerComponent(this, {
      id: this.id,
      secret: "Row Parent"
    });
  }

  defaultProperties() {
    let classname = "";
    this.getAttributeNames().forEach(element => {
      classname += `${this.getAttribute(`${element}`)} `;
    });
    this.className = classname;
  }
}

customElements.define("eg-row", EgRow);
