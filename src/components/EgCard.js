/**
 * EgCard Class
 * @extends {HTMLElement}
 */
class EgCard extends HTMLElement {
  constructor(type) {
    super();
    this.type = type;
  }

  connectedCallback() {
    this.setAttribute("card", "card");
    this.innerHTML = `<div>
      <div class="card-header"></div>
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
    if (this.css) this.setAttribute("css", this.css);
  }

  setCardBody(text) {
    let body = this.getCard().querySelector(".card-body");
    let msg = document.createElement("h6");
    msg.innerHTML = text;
    body.appendChild(msg);
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
    let msg = document.createElement("h6");
    msg.innerText = text;
    footer.appendChild(msg);
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
    let header = this.getCard().querySelector(".card-header");
    let msg = document.createElement("h6");
    msg.innerText = text;
    header.appendChild(msg);
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

/**
 * A function that creates card title object.
 * @param {Sting} style A string that sets the style of the card (required).
 * @param {String} text Text that belongs to the card header title (required).
 */
const createCard = style => {
  let newCard = new EgCard(style);
  return newCard;
};

/**
 * A function that creates card title object (h6).
 * @function
 * @param {Sting} style A string that sets the style of the text (required).
 * @param {String} text Text that belongs to the card header title (required).
 * @return {EgCard} return an eg-card with the props passed.
 */
const createCardText = (style, text) => {
  let cardText = document.createElement("h6");
  cardText.setAttribute("class", style);
  cardText.innerHTML = text;

  return cardText;
};
