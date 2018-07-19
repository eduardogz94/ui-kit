class EgCol extends HTMLElement {
    constructor() {
        super();
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
            :  this.setAttribute('class', this.col);
    }

    getObjects(obj) {
        return this.querySelectorAll(`${obj}`);
    }

    addSingleObject(element) {
        const object = document.createElement(`${element}`)
        this.appendChild(object)
    }
    
    addMultipleObjects(...elements) {
        elements.forEach(element => {
            this.appendChild(element)
        });
    }

    createMultipleObjects(element, quantity) {
        for (let i = 0; i < quantity; i++) {
            const object = document.createElement(`${element}`)
            object.id = i
            this.appendChild(object)
        }
    }


}

customElements.define("eg-col", EgCol);