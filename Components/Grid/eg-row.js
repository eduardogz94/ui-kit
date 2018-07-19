class EgRow extends HTMLElement {
    constructor() {
        super();
        console.log('<- New Row ->')
    }

    connectedCallback() {
        this.innerHTML = ` <div>${this.innerText}</div>`;

        ccc.registerComponent(this, {
            id: this.id,
            secret: 'Row Parent'
        });
    }

    getGrid() {
        return this.querySelector('div');
    }

    setGrid() {

        console.log(this)
        console.log('<- End of Row ->')
        console.log('')
    }
}

customElements.define("eg-row", EgRow);