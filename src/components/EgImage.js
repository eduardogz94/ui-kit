class EgImage extends HTMLElement {
  constructor(src, alt) {
    super();
    this.src = src;
    this.alt = alt;
  }

  connectedCallback() {
    this.innerHTML = `<img></img>`;
    this.setImage();
    this.defaultProperties();
    ccc.registerComponent(this, {
      id: this.id,
      secret: "Image Parent"
    });
  }

  getImage() {
    return this.querySelector("img");
  }

  defaultProperties() {
    let classname = "";
    this.getAttributeNames().forEach(element => {
      if (element === "src")
        return this.setImageSource(this.getAttribute(`${element}`));
      if (element === "alt")
        return this.setImageAlt(this.getAttribute(`${element}`));
      if (element === "id") return null;
      classname += `${this.getAttribute(`${element}`)}`;
    });
    this.getImage().className = classname;
  }

  setImage() {
    if (this.id) this.getImage().setAttribute("id", `${this.id}-image`);
    if (this.type) this.setAttribute("type", this.type);
    if (this.alt) this.setAttribute("alt", this.alt);
    if (this.src) this.setAttribute("src", this.src);
    if (this.col) this.setAttribute("col", this.col);
    if (this.offset) this.setAttribute("offset", this.offset);
    if (this.css) this.setAttribute("css", this.css);
  }

  setImageSource(src) {
    let image = this.getImage();
    image.src = src;
  }

  setImageAlt(alt) {
    let image = this.getImage();
    image.alt = alt;
  }
}

customElements.define("eg-img", EgImage);