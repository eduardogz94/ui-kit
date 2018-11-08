class EgAlert extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.setAttribute("role", "alert");
    this.innerHTML = `
        <div>
            <h4 class="alert-title"></h4>
            <h6 class="alert-msg"></h6>
            <div class="alert-body"></div>
        </div>`;
    this.setAlert();
    this.defaultProperties();
    ccc.registerComponent(this, {
      id: this.id,
      secret: "Alert Parent"
    });
  }

  getAlert() {
    return this.querySelector("div");
  }

  defaultProperties() {
    let classname = "";
    this.getAttributeNames().forEach(element => {
      if (element === "id") return null;
      if (element === "text")
        return this.setAlertMessage(this.getAttribute(`${element}`));
      if (element === "title")
        return this.setAlertTitle(this.getAttribute(`${element}`));
      if (element === "close") this.setAlertCloseButton();
      classname += `${this.getAttribute(`${element}`)} `;
    });
    this.getAlert().className = classname;
    this.getAlert().setAttribute("role", "alert");
  }

  setAlert() {
    if (this.id) this.getAlert().setAttribute("id", `${this.id}-alert`);
    if (this.type) this.setAttribute("type", this.type);
    if (this.col) this.setAttribute("col", this.col);
    if (this.offset) this.setAttribute("offset", this.offset);
    if (this.css) this.setAttribute("css", this.css);
    if (this.title) this.setAttribute("title", this.title);
    if (this.close) this.setAttribute("close", this.close);
    if (this.text) this.setAttribute("text", this.text);
  }

  setAlertMessage(text) {
    let alert = this.getAlert().querySelector(".alert-msg");
    alert.innerHTML = text;
  }

  setAlertTitle(text) {
    let alert = this.getAlert().querySelector(".alert-title");
    alert.innerHTML = text;
  }

  setAlertCloseButton() {
    let main = this.getAlert();
    let alert = this.getAlert().querySelector(".alert-body");
    let alertButton = document.createElement("button");
    let buttonX = document.createElement("span");

    alertButton.className = "close";
    alertButton.setAttribute("data-dismiss", "alert");
    alertButton.setAttribute("arial-label", "Close");

    buttonX.setAttribute("aria-hidden", "true");
    buttonX.innerHTML = "&times";
    buttonX.onclick = function() {
      main.className = "collapse";
    };

    alertButton.appendChild(buttonX);
    alert.appendChild(alertButton);
  }
}

customElements.define("eg-alert", EgAlert);
