class EgForm extends HTMLElement {
  constructor() {
    super();
    this.id = this.id;
  }

  connectedCallback() {
    this.setForm();
    // this.defaultProperties()

    ccc.registerComponent(this, {
      id: this.id,
      secret: "Form Parent"
    });
  }

  defaultProperties() {
    let classname = "";
    this.getAttributeNames().forEach(element => {
      if (element === "id") return null;
      classname += `${this.getAttribute(`${element}`)} `;
    });
    this.className = classname;
  }

  setObjectProperties(props, keys) {
    if (props.lenght === keys.lenght) {
      for (let index in props) {
        this.setAttribute(props[index], keys[index]);
      }
    } else {
      console.error("both arrays must be same lenght");
    }
  }

  setBorder(color, val, radius) {
    this.style.borderColor = color;
    this.style.border = val;
    this.style.borderRadius = radius;
  }

  setFont(val, size, color) {
    this.style.fontFamily = val;
    this.style.fontSize = size;
    this.style.color = color;
  }

  setFontStyle(s, w) {
    this.style.fontStyle = s;
    this.style.fontWeight = w;
  }

  setBackground(color, img) {
    this.style.background = color;
    img = "none"
      ? (img = "")
      : (this.style.backgroundImage = "url(" + this.pathImg + img + ")");
  }

  getButtons() {
    return this.querySelectorAll("button");
  }

  getInputs() {
    return this.querySelectorAll("input");
  }

  getInputValues() {
    let data = [];

    this.getInputs().forEach(response => {
      let id = "";
      response.id || response.id == undefined
        ? (id = response.id)
        : (id = "no id input");

      response.value !== ""
        ? data.push({
            value: response.value,
            type: typeof response.value,
            id: id,
            filled: true
          })
        : data.push({
            value: response.value,
            type: typeof response.value,
            id: id,
            filled: false
          });
    });
    return data;
  }

  setForm() {
    if (this.id) this.setAttribute("id", this.id);
    if (this.type) this.setAttribute("type", this.type);
    if (this.innerText) this.setAttribute("innerText", this.innerText);
    if (this.control) this.setAttribute("control", this.control);
    if (this.col) this.setAttribute("col", this.col);
    if (this.offset) this.setAttribute("offset", this.offset);
    if (this.placeholder) this.setAttribute("placeholder", this.placeholder);
    if (this.css) this.setAttribute("css", this.css);
  }
}

customElements.define("eg-form", EgForm);
