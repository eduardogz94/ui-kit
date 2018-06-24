class EgInput extends HTMLElement {
    constructor() {
        super();
        console.log('<- New Input ->')
    }

    connectedCallback() {
        this.innerHTML = ` ${this.innerText}:<input/>`
        this.setInput();

        ccc.registerComponent(this, {
            id: this.id,
            secret: 'Input Parent'
        });
    }

    getInput() {
        return this.querySelector('input');
    }

    setInput() {

        this.id == '' ?
            this.getInput().id = 'no-id' :
            this.getInput().id = `${this.id}-input`

        if (this.placeholder == undefined) {

            this.getAttribute('placeholder') == null ?
                this.getInput().placeholder = '' :
                this.getInput().placeholder = this.getAttribute('placeholder');
        } else {
            this.getInput().placeholder = this.placeholder;
        }

        console.log(this)
        console.log('<- End of input ->')
        console.log('')
    }

    onClear() {
        this.getInput().value = "";
        this.getInput().style.position = "static";
        this.getInput().placeholder = "Cleared";
    }

    setPos(x, y) {
        this.getInput().style.top = x + "px";
        this.getInput().style.left = y + "px";
        this.getInput().style.position = "relative";
    }

    setDimensions(width, height) {
        this.getInput().style.width = width + "px";
        this.getInput().style.height = height + "px";
    }

    caps() {
        alert(/[A-Z]/.test(this.getInput().value) ? "Valid" : "Not Valid");
    }

    integer() {
        alert(/[^0-9]/.test(this.getInput().value) ? "Valid" : "Not valid");
    }

    floatTest() {
        alert(/[0-9]/.test(this.getInput().value) ? "Valid" : "Not Valid");
    }

    lowerCaps() {
        alert(/[a-z]/.test(this.getInput().value) ? "Valid" : "Not Valid");
    }

    validateValue() {
        (this.getInput().value == '') ? alert('Input Empty'): alert('Not Empty');
    }
}

customElements.define("eg-input", EgInput);