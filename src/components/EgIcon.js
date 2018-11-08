class EgIcon extends HTMLElement {
  constructor(icon, size) {
    super();
    this.icon = icon;
    this.size = size;
  }

  connectedCallback() {
    this.innerHTML = `<i></i>`;

    this.setIcon();
    this.defaultProperties();

    ccc.registerComponent(this, {
      id: this.id,
      secret: "Icon Parent"
    });
  }

  getIcon() {
    return this.querySelector("i");
  }

  defaultProperties() {
    let classname = "";
    this.getAttributeNames().forEach(element => {
      classname += `${this.getAttribute(`${element}`)} `;
    });

    this.getIcon().className = classname;
  }

  setIcon() {
    if (this.id) this.getIcon().setAttribute("id", `${this.id}-icon`);
    if (this.icon) this.setAttribute("icon", this.icon);
    if (this.size) this.setAttribute("size", this.size);
    if (this.css) this.setAttribute("css", this.css);
  }
}

customElements.define("eg-icon", EgIcon);
