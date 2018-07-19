class EgForm extends HTMLElement {
    constructor() {
        super();
        // console.log("<- New Form->")
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

    setButton() {

        if (this.onclick == null) {

            this.method == undefined ?
                this.getButton().setAttribute('onClick', this.getAttribute('method')) :
                this.getButton().setAttribute('onClick', this.method)
        }

    }

    getInput() {
        return this.querySelectorAll('input');
    }

    getInputValues() {
        let data = []

        this.getInput().forEach(response => {
            data.push(response.value)
        })

        return data
    }
}

customElements.define("eg-form", EgForm);