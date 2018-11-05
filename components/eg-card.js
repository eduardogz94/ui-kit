class EgCard extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.setAttribute("card", "card");
    this.innerHTML = `<div>
        <div class="card-header"><h4 id="card-header-text"></h4></div>
        <div class="card-body"></div>
        <div class="card-footer"></div>
      </div>`;
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
      if (element === "header") this.setCardTitle(this.getAttribute(`${element}`));
      if (element === "body") this.setCardBody(this.getAttribute(`${element}`));
      if (element === "footer") this.setCardFooter(this.getAttribute(`${element}`));
      classname += `${this.getAttribute(`${element}`)} `;
    });
    this.getCard().className = classname;
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
