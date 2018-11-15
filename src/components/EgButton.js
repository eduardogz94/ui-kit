/**
 * EgButton Class
 * @extends {HTMLElement}
 */
class EgButton extends HTMLElement {
  /**
   * Creates a EgButton.
   * @param {String} btn Class for the eg-button.
   */
  constructor(btn) {
    super();
    this.btn = btn;
  }

  /**
   * A lyfecicle method that calls when the component has finally rendered.
   * @function
   * @returns {HTMLElement} Renders a EgButton component.
   */
  connectedCallback() {
    this.innerHTML = `<button>${this.innerText}</button>`;
    this.setButton();
    this.defaultProperties();

    ccc.registerComponent(this, {
      id: this.id,
      secret: "Button Parent"
    });
  }

  /**
   * Set the default properties for the EgButton object.
   * @function
   * @returns {HTMLElement} Sets the default classname of the EgButton instance.
   */
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

  /**
   * A function to set Border css of the component.
   * @param {String} color  as the color to the component border(required).
   * @param {String} val  as the value of the component border(required).
   * @param {String} radius  as the radius of the component border(required).
   */
  setBorder(color, val, radius) {
    this.getButton().style.borderColor = color;
    this.getButton().style.border = val;
    this.getButton().style.borderRadius = radius;
  }

  /**
   * A function that sets the font css of the component.
   * @function
   * @param {String} val
   * @param {String} size
   * @param {String} color
   */
  setFont(val, size, color) {
    this.getButton().style.fontFamily = val;
    this.getButton().style.fontSize = size;
    this.getButton().style.color = color;
  }

  /**
   * A function to set Font Style css of the component.
   * @param {String} s  as the font size for the component(required).
   * @param {String} w  as the font weight for the component(required).
   */
  setFontStyle(s, w) {
    this.getButton().style.fontStyle = s;
    this.getButton().style.fontWeight = w;
  }

  /**
   * A function to set Button properties as they are received from a js instance.
   * @function
   * @returns {defaultProperties()}
   */
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

  /**
   * A function to get the button inside the EgButton tag.
   * @function
   * @returns {Button}
   */
  getButton() {
    return this.querySelector("button");
  }

  /**
   * A function to add an icon to the EgButton.
   * @param {String} icon  as the class for the icon(required).
   * @returns {EgButtonIcon}
   */
  addIcon(icon) {
    let egIcon = new EgIcon(icon);
    egIcon.setAttribute("css", "ml-1");
    this.getButton().appendChild(egIcon);
  }
}

customElements.define("eg-button", EgButton);
