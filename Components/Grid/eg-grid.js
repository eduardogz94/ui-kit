class EgGrid extends HTMLElement {
    constructor() {
        super();
        console.log('<- New Grid ->')
    }

    connectedCallback() {
        this.innerHTML = ` <div>${this.innerText}</div>`;
      
        ccc.registerComponent(this, {
            id: this.id,
            secret: 'Grid Parent'
        });
    }

    getGrid() {
        return this.querySelector('div');
    }

    setGrid() {

        console.log(this)
        console.log('<- End of grid ->')
        console.log('')
    }
}

customElements.define("eg-grid", EgGrid);