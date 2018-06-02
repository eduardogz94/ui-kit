class EgButton extends HTMLElement {
    constructor() {
        super();
        this.id = this.id;
    }

    connectedCallback() {
        this.innerHTML = '<button></button>'
    }
}

customElements.define("eg-comp-button", EgButton, {
    extends: "button"
});

const button = new EgButton();
button.id = '1';

document.body.appendChild(button);