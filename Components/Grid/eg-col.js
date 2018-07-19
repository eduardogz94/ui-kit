class EgCol extends HTMLElement {
    constructor() {
        super();
        console.log('<- New Col ->')
    }

    connectedCallback() {
        this.innerHTML = ` <div>${this.innerText}</div>`;

        ccc.registerComponent(this, {
            id: this.id,
            secret: 'Col Parent'
        });
    }
    
    getCol() {
        return this.hasAttribute('col');
    }

    setCol() {
        const cols = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']
        
        cols.forEach(response => {
            
        })
        
        console.log(this)
        console.log('<- End of Col ->')
        console.log('')
    }
}

customElements.define("eg-col", EgCol);