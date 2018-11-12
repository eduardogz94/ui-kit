class EgInput extends HTMLElement {
  constructor(control, type) {
    super();
    this.control = control;
    this.type = type;
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
      if (element === "placeholder") return null;
      if (element === "type") return null;
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
    let response = this.getInput();
    let id = "";

    response.id || response.id == undefined
      ? (id = response.id)
      : (id = "no id input");

    let data = {
      value: response.value,
      type: typeof response.value,
      id: id,
    };

    response.value !== "" ? data.filled = true : data.filled = false;

    return data;
  }

  getInput() {
    return this.querySelector("input");
  }

  setInput() {
    if (this.id) this.getInput().setAttribute("id", `${this.id}-input`);
    if (this.type) this.getInput().setAttribute("type", this.type); 
    if (this.control) this.setAttribute("control", this.control);
    if (this.col) this.setAttribute("col", this.col);
    if (this.offset) this.setAttribute("offset", this.offset);
    if (this.css) this.setAttribute("css", this.css);
    
    if (this.getAttribute("type"))
      this.getInput().setAttribute("type", this.getAttribute("type"));

    if (this.placeholder)
      this.getInput().setAttribute("placeholder", this.placeholder);

    if (this.getAttribute("placeholder"))
      this.getInput().setAttribute(
        "placeholder",
        this.getAttribute("placeholder")
      );
  }

  setInputAttribute(key, value) {
    this.getInput().setAttribute(key, value);
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

  validateValue(length) {
    let input = this.getInputValue();
    if (input.value.length <= length - 1) {
      this.setFormControl("form-control-warning");
    } else {
      this.setFormControl("form-control-success");
    }
  }

  validateEmail(emailType) {
    if (this.getInput().getAttribute("type") === "email") {
      let input = this.getInputValue();
      if (input.value.search(emailType) === -1) {
        this.setFormControl("form-control-danger");
      } else {
        this.setFormControl("form-control-success");
      }
    }
  }

  validatePassword(length) {
    if (this.getInput().getAttribute("type") === "password") {
      let input = this.getInputValue();
      if (input.value.length === 0) {
        this.setFormControl("form-control-danger");
      } else if (input.value.length <= length - 1) {
        this.setFormControl("form-control-warning");
      } else {
        this.setFormControl("form-control-success");
      }
    }
  }

  setFormControl(value) {
    let classname = "";
    this.getAttributeNames().forEach(element => {
      if (element === "id") return null;
      if (element === "class") return null;
      if (element === "control") return null;
      if (element === "placeholder") return null;
      if (element === "type") return null;
      classname += `${this.getAttribute(`${element}`)} `;
    });

    this.getInput().className = `${classname} form-control ${value}`;
  }
}

customElements.define("eg-input", EgInput);

/**
 * A function that generates a new EgInput
 * @param {String} control Contorl attribute for input (required).
 * @param {String} type Type of input (required).
 * @param {String} id Id of input (optional but recomended).
 * @param {String} col Col attribute for the input (optional).
 * @param {String} placeholder Placeholder attribute for the input (optional)
 */
const createInput = (control, type, id = null, col = null, placeholder = null) => {
  let newInput = new EgInput(control, type);
  if (id) newInput.id = id;
  if (col) newInput.col = col;
  if (placeholder) newInput.placeholder = placeholder;

  return newInput;
};

/**
 * A function that sets the validation length of a desired Input.
 * @param {EgInput} input The input that desires to set a validation length (required). 
 * @param {Integer} length Length of the string that will validate the input (required). 
 */
const setValidationLength = (input, length) => {
  input.validateValue(length,length)
}

/**
 * A function that sets the validation email of a desired input.
 * @param {EgInput} input The input that desires to validate email (required).
 * @param {String} type A string with the type of email that you want to validate (required). 
 */
const setValidationEmail = (input, type) => {
  input.validateEmail(type,type)
}
