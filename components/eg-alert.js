class EgAlert extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.setAttribute("role", "alert");
    this.innerHTML = `
        <div>
            <h4 class="alert-title"></h4>
            <div class="alert-msg"></div>
            <div class="alert-body"></div>
        </div>`;
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
      if (element === "text")
        return this.setAlertMessage(this.getAttribute(`${element}`));
      if (element === "title")
        return this.setAlertTitle(this.getAttribute(`${element}`));
      if (element === "close") this.setAlertCloseButton();
      classname += `${this.getAttribute(`${element}`)} `;
    });
    this.getAlert().className = classname;
    this.getAlert().setAttribute("role","alert");
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
    let main = this.getAlert()
    let alert = this.getAlert().querySelector(".alert-body");
    let alertButton = document.createElement("button");
    let buttonX = document.createElement("span");

    alertButton.className = "close";
    alertButton.setAttribute("data-dismiss", "alert");
    alertButton.setAttribute("arial-label", "Close");

    buttonX.setAttribute("aria-hidden", "true");
    buttonX.innerHTML = "&times";
    buttonX.onclick = function () {
      main.className = "collapse"
    };

    alertButton.appendChild(buttonX);
    alert.appendChild(alertButton);
  }
}

customElements.define("eg-alert", EgAlert);
