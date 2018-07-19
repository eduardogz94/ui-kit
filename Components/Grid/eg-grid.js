class EgGrid extends HTMLElement {
    constructor() {
        super();
        // console.log('<- New Grid ->')
    }

    connectedCallback() {
        this.setAttribute('class', 'container')
        ccc.registerComponent(this, {
            id: this.id,
            secret: 'Grid Parent'
        });
    }

    getCol() {
        return this.querySelector('eg-col');
    }

    getRow() {
        return this.querySelector('eg-row');
    }

}

customElements.define("eg-grid", EgGrid);