class EgForm extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.setButton()
        ccc.registerComponent(this, {
            id: this.id,
            secret: 'Form Parent'
        });
    }

    getButton() {
        return this.querySelector('button');
    }
    
    getInputs() {
        return this.querySelectorAll('input');
    }

    getInputValues() {
        let data = []

        this.getInputs().forEach(response => {
            data.push(response.value)
        })
        return data
    }

    getObjects(obj) {
        return this.querySelectorAll(`${obj}`);
    }

    setButton() {

        if (this.onclick == null) {
            this.method == undefined ?
                this.getButton().setAttribute('onClick', this.getAttribute('method')) :
                this.getButton().setAttribute('onClick', this.method)
        }
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

customElements.define("eg-form", EgForm);