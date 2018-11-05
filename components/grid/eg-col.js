class EgCol extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.setCol();
    this.defaultProperties();
    ccc.registerComponent(this, {
      id: this.id,
      secret: "Col Parent"
    });
  }

  defaultProperties() {
    this.style.display = "inline-block";
    this.style.marginTop = "2.5px";
    
    let classname = "";
    this.getAttributeNames().forEach(element => {
      classname += `${this.getAttribute(`${element}`)} `;
    });
    this.className = classname;
  }

  setCol() {
    if (this.id) {
      this.setAttribute("id", this.id);
    }
  }

  getObjects(obj) {
    return this.querySelectorAll(`${obj}`);
  }

  addSingleObject(element) {
    const object = document.createElement(`${element}`);
    this.appendChild(object);
  }

  addMultipleObjects(...elements) {
    elements.forEach(element => {
      this.appendChild(element);
    });
  }

  createMultipleObjects(element, quantity) {
    for (let i = 0; i < quantity; i++) {
      const object = document.createElement(`${element}`);
      object.id = i;
      this.appendChild(object);
    }
  }
}

customElements.define("eg-col", EgCol);
