class EgRow extends HTMLElement {
    constructor() {
        super();
        console.log('<- New Row ->')
    }

    connectedCallback() {
        this.setAttribute('class', 'row')
        ccc.registerComponent(this, {
            id: this.id,
            secret: 'Row Parent'
        });
    }
}

customElements.define("eg-row", EgRow);