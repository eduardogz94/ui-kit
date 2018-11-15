/**
 * EgCol Class
 * @extends {HTMLElement}
 */
class EgCol extends HTMLElement {
  /**
   * Creates a EgCol element acepting a col and a offset attribute,
   * @param {String} col Col attribute for the eg-col.
   * @param {String} offset Offset attribute for the eg-col.
   */
  constructor(col, offset) {
    super();
    this.col = col;
    this.offset = offset;
  }

  /**
   * A lyfecicle method that calls when the component has finally rendered.
   * @function
   * @returns {HTMLElement} Renders a EgCol component.
   */
  connectedCallback() {
    this.setCol();
    this.defaultProperties();
    ccc.registerComponent(this, {
      id: this.id,
      secret: "Col Parent"
    });
  }

  /**
   * Set the default properties for the EgCol element.
   * @function
   * @returns {HTMLElement} Sets the default classname of the EgCol instance.
   */
  defaultProperties() {
    this.style.display = "inline-block";
    this.style.marginTop = "2.5px";

    let classname = "";
    this.getAttributeNames().forEach(element => {
      classname += `${this.getAttribute(`${element}`)} `;
    });
    this.className = classname;
  }

  /**
   * A function to set EgCol properties as they are received from a js instance.
   * @function
   * @returns {defaultProperties()}
   */
  setCol() {
    if (this.id) this.setAttribute("id", this.id);
    if (this.col) this.setAttribute("col", this.col);
    if (this.offset) this.setAttribute("offset", this.offset);
    if (this.bg) this.setAttribute("bg", this.bg);
    if (this.css) this.setAttribute("css", this.css);
  }
}

customElements.define("eg-col", EgCol);
