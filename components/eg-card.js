class EgCard extends HTMLElement {
  constructor(type) {
    super();
    this.type = type
  }

  connectedCallback() {
    this.setAttribute("card", "card");
    this.innerHTML = `<div>
    <div class="card-header">
    <h4 id="card-header-text"></h4>
    </div>
    <div class="card-body"></div>
    <div class="card-footer"></div>
    </div>`;

    this.setCard();
    this.defaultProperties();

    ccc.registerComponent(this, {
      id: this.id,
      secret: "Card Parent"
    });
  }

  getCard() {
    return this.querySelector("div");
  }

  defaultProperties() {
    let classname = "";
    this.getAttributeNames().forEach(element => {
      if (element === "id") return null;
      if (element === "header")
        return this.setCardTitle(this.getAttribute(`${element}`));
      if (element === "body")
        return this.setCardBody(this.getAttribute(`${element}`));
      if (element === "footer")
        return this.setCardFooter(this.getAttribute(`${element}`));
      classname += `${this.getAttribute(`${element}`)} `;
    });
    this.getCard().className = classname;
  }

  setCard() {
    if (this.id) this.getCard().setAttribute("id", `${this.id}-card`);
    if (this.type) this.setAttribute("type", this.type);
    if (this.footer) this.setAttribute("footer", this.footer);
    if (this.body) this.setAttribute("body", this.body);
    if (this.header) this.setAttribute("header", this.header);
    if (this.col) this.setAttribute("col", this.col);
    if (this.offset) this.setAttribute("offset", this.offset);
  }

  setCardBody(text) {
    let body = this.getCard().querySelector(".card-body");
    body.innerHTML = text;
  }

  addToCardBody(element) {
    let body = this.getCard().querySelector(".card-body");
    body.appendChild(element);
  }

  addMultipleObjectsToBody(...elements) {
    let body = this.getCard().querySelector(".card-body");
    elements.forEach(element => {
      body.appendChild(element);
    });
  }

  setCardFooter(text) {
    let footer = this.getCard().querySelector(".card-footer");
    footer.innerHTML = text;
  }

  addToCardFooter(element) {
    let footer = this.getCard().querySelector(".card-footer");
    footer.appendChild(element);
  }

  addMultipleObjectsToFooter(...elements) {
    let footer = this.getCard().querySelector(".card-footer");
    elements.forEach(element => {
      footer.appendChild(element);
    });
  }

  setCardTitle(text) {
    let title = this.getCard().querySelector("#card-header-text");
    title.innerHTML = text;
  }

  addToCardHeader(element) {
    let header = this.getCard().querySelector(".card-header");
    header.appendChild(element);
  }

  addSingleObject(element) {
    const object = document.createElement(`${element}`);
    this.appendChild(object);
  }

  addMultipleObjects(...elements) {
    elements.forEach(element => {
      this.appendChild(element);
    });
  }

  createMultipleObjects(element, quantity) {
    for (let i = 0; i < quantity; i++) {
      const object = document.createElement(`${element}`);
      object.id = i;
      this.appendChild(object);
    }
  }
}

customElements.define("eg-card", EgCard);
