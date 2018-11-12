class EgButton extends HTMLElement {
  constructor(btn) {
    super();
    this.btn = btn;
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
      if (element === "id") return null;
      if (element === "innertext") return null;
      if (element === "type") return null;
      if (element === "onclick") return null;
      if (element === "icon")
        return this.addIcon(this.getAttribute(`${element}`));
      if (element === "btn")
        return (classname += `btn ${this.getAttribute(`${element}`)} `);

      classname += `${this.getAttribute(`${element}`)} `;
    });
    this.getButton().className = classname;
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

  setButton() {
    if (this.id) this.getButton().setAttribute("id", `${this.id}-button`);
    if (this.type) this.getButton().setAttribute("type", this.type);

    if (this.getAttribute("type"))
      this.getButton().setAttribute("type", this.getAttribute("type"));

    if (this.innerText) this.setAttribute("innerText", this.innerText);
    if (this.btn) this.setAttribute("btn", this.btn);
    if (this.col) this.setAttribute("col", this.col);
    if (this.offset) this.setAttribute("class", this.offset);
    if (this.css) this.setAttribute("css", this.css);
  }

  getButton() {
    return this.querySelector("button");
  }

  addIcon(icon) {
    let egIcon = new EgIcon(icon);
    egIcon.setAttribute("css", "ml-1");
    this.getButton().appendChild(egIcon);
  }
}

/**
 * A function that creates a button.
 * @param {String} style A string that sets button style (required).
 * @param {String} text A string that sets innerText of the button (optional but recommended).
 * @param {String} id A string that sets the id of the button (optional but recommended).
 * @param {String} col A string that sets the col of the button (optional).
 */
const createButton = (style, text = null, id = null, col = null) => {
  let newButton = new EgButton(style);
  if (col) newButton.col = col;
  if (text) newButton.innerText = text;
  if (id) newButton.id = id;

  return newButton;
};

customElements.define("eg-button", EgButton);
