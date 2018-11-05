class EgInput extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `<input/>`;
    this.setInput();
    this.defaultProperties();

    ccc.registerComponent(this, {
      id: this.id,
      secret: "Input Parent"
    });
  }

  defaultProperties() {
    let classname = "";
    this.getAttributeNames().forEach(element => {
      if (element === "id") return null;
      classname += `${this.getAttribute(`${element}`)} `;
    });
    this.getInput().className = classname;
    this.className = "form-group";
  }

  setObjectProperties(props, keys) {
    if (props.lenght === keys.lenght) {
      for (let index in props) {
        this.getInput().setAttribute(props[index], keys[index]);
      }
    } else {
      console.error("both arrays must be same lenght");
    }
  }

  setBorder(color, value, radius) {
    this.getInput().style.borderColor = color;
    this.getInput().style.border = value;
    this.getInput().style.borderRadius = radius;
  }

  setFont(value, size, color) {
    this.getInput().style.fontFamily = value;
    this.getInput().style.fontSize = size;
    this.getInput().style.color = color;
  }

  setFontStyle(s, w) {
    this.getInput().style.fontStyle = s;
    this.getInput().style.fontWeight = w;
  }

  setBackground(color, img) {
    this.getInput().style.background = color;
    img = "none"
      ? (img = "")
      : (this.getInput().style.backgroundImage =
          "url(" + this.pathImg + img + ")");
  }

  getInputValue() {
    let data = [];

    let response = this.getInput();
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

    return data;
  }

  getInput() {
    return this.querySelector("input");
  }

  setInput() {
    this.getInput().type = "text";

    if (this.id) {
      this.getInput().setAttribute("id", this.id);
    }

    if (this.getAttribute("id")) {
      this.getInput().setAttribute("id", `${this.getAttribute("id")}-input`);
    }
  }

  onClear() {
    this.getInput().value = "";
  }

  setPos(x, y) {
    this.getInput().style.top = x + "%";
    this.getInput().style.left = y + "%";
    this.getInput().style.position = "relative";
  }

  setDimensions(width, height) {
    this.getInput().style.width = width + "%";
    this.getInput().style.height = height + "%";
  }

  caps() {
    alert(/[A-Z]/.test(this.getInput().value) ? true : false);
  }

  integer() {
    alert(/[^0-9]/.test(this.getInput().value) ? true : false);
  }

  floatTest() {
    alert(/[0-9]/.test(this.getInput().value) ? true : false);
  }

  lowerCaps() {
    alert(/[a-z]/.test(this.getInput().value) ? true : false);
  }

  validateValue() {
    this.getInput().value == "" ? true : false;
  }

  validationHandler() {
    let classname = "";
    this.getAttributeNames().forEach(element => {
      if (element === "id") return null;
      if (element === "class") return null;
      if(element === "control") return null;
      classname += `${this.getAttribute(`${element}`)} `;
    });

    if (this.getInput().value === "") {
      this.className = "form-group has-danger";
      this.getInput().className = `${classname} form-control form-control-danger`;
    } else {
      this.className = "form-group has-success";
      this.getInput().className = `${classname} form-control form-control-success`;
    }
  }
}

customElements.define("eg-input", EgInput);
