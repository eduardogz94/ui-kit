class EgButton extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `<button>${this.innerText}</button>`;
    this.setButton();
    this.defaultProperties();

    ccc.registerComponent(this, {
      id: this.id,
      secret: "Button Parent"
    });
  }

  defaultProperties() {
    let classname = "";
    this.getAttributeNames().forEach(element => {
      if (element === "btn")
        return (classname += `btn ${this.getAttribute(`${element}`)} `);
      if (element === "id") return null;
      if (element === "innertext") return null;

      if (element === "onclick") return null;
      classname += `${this.getAttribute(`${element}`)} `;
    });
    this.getButton().className = classname;
  }

  setObjectProperties(props, keys) {
    if (props.lenght === keys.lenght) {
      for (let index in props) {
        this.getButton().setAttribute(props[index], keys[index]);
      }
    } else {
      console.error("both arrays must be same lenght");
    }
  }

  setBorder(color, val, radius) {
    this.getButton().style.borderColor = color;
    this.getButton().style.border = val;
    this.getButton().style.borderRadius = radius;
  }

  setFont(val, size, color) {
    this.getButton().style.fontFamily = val;
    this.getButton().style.fontSize = size;
    this.getButton().style.color = color;
  }

  setFontStyle(s, w) {
    this.getButton().style.fontStyle = s;
    this.getButton().style.fontWeight = w;
  }

  setBackground(color, img) {
    this.getButton().style.background = color;
    img = "none"
      ? (img = "")
      : (this.getButton().style.backgroundImage =
          "url(" + this.pathImg + img + ")");
  }

  setButton() {
    if (this.id) this.setAttribute("id", this.id);
    if (this.type) this.setAttribute("type", this.type);
    if (this.innerText) this.setAttribute("innerText", this.innerText);
    if (this.btn) this.setAttribute("btn", this.btn);
    if (this.col) this.setAttribute("col", this.col);
    if (this.offset) this.setAttribute("offset", this.offset);
  }

  getButton() {
    return this.querySelector("button");
  }
}

customElements.define("eg-button", EgButton);
