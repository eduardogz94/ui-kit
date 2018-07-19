class EgCol extends HTMLElement {
    constructor() {
        super();
        console.log('<- New Col ->')
    }

    connectedCallback() {   
        this.setAttribute('class', this.getAttribute('col'))
        ccc.registerComponent(this, {
            id: this.id,
            secret: 'Col Parent'
        });
    }
    
    setCol() {
        //This is HTML call
        if (this.col == undefined) {

            this.getAttribute('col') == null 
                ? this.getCol().col = '' 
                : this.setAttribute('class', this.getAttribute('col'))
        } else {
            this.getCol().col = this.col;
        }
    }

    
}

customElements.define("eg-col", EgCol);