class EgCol extends HTMLElement {
    constructor() {
        super();
        // console.log('<- New Col ->')
    }

    connectedCallback() {   
        this.setCol()
        ccc.registerComponent(this, {
            id: this.id,
            secret: 'Col Parent'
        });
    }
    
    setCol() {
        //This is HTML call
        this.getAttribute('col') 
            ?  this.setAttribute('class', this.getAttribute('col'))
            :  this.setAttribute('class',this.col);
    }

}

customElements.define("eg-col", EgCol);