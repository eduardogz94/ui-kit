class EgForm extends HTMLElement {
    constructor() {
        super();
        this.method = this.method;
        this.userLabel = this.userLabel;
        this.passLabel = this.passLabel;
    }

    connectedCallback() {
        this.innerHTML = `<form id=${this.id}>	
        		${this.userLabel}:<eg-input id=${this.id}-user>${this.userLabel}</eg-input>
        		${this.passLabel}:<eg-input id=${this.id}-pass></eg-input>
        	</form>`;

        ccc.registerComponent(this, {
          id: this.id,
          secret: 'Form Parent'
        });    
    }
}

customElements.define("eg-form", EgForm);