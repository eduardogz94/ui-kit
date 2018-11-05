class EgImage extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `<img></img>`;
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
        classname += this.getAttribute(`${element}`);
    });
    this.getImage().className = classname;
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
