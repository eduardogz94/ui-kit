class EgForm extends HTMLElement {
    constructor() {
        super();
        console.log("<- New Form->")
    }

    connectedCallback() {
        this.innerHTML =

        `<form id=${this.id}-form>	
    		<eg-input id=${this.id}-user placeholder="Enter User">Username</eg-input>
    		<eg-input id=${this.id}-pass placeholder="Enter Pass">Password</eg-input>
    	    <eg-button id=${this.id}-method></eg-button>
        </form>`;

        this.setButton()

        console.log(this)
        console.log('<- End of Form ->')
        console.log('')

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