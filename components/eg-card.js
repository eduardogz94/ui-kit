class EgCard extends HTMLElement {
  constructor() {
    super();
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
    if (this.id) this.setAttribute("id", this.id);
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

  setCardFooter(text) {
    let footer = this.getCard().querySelector(".card-footer");
    footer.innerHTML = text;
  }

  setCardTitle(text) {
    let title = this.getCard().querySelector("#card-header-text");
    title.innerHTML = text;
  }
}

customElements.define("eg-card", EgCard);
