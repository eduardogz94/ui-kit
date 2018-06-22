class EgInput extends HTMLElement {
    constructor() {
        super();
        console.log('<- New Input ->')
    }

    connectedCallback() {
        this.innerHTML = ` ${this.innerText}:<input id=${this.id}-input />`
        this.setInput();

        ccc.registerComponent(this, {
            id: this.id,
            secret: 'Input Parent'
        });
    }

    getInput(param) {
        console.log(`Changed Input Attribute => ${param}`)
        return this.querySelector('input');
    }

    setInput() {
        console.log(`placeholder is => ${this.placeholder}`)
        console.log(`placeholder ATR is => ${this.getAttribute('placeholder')}`)

        this.id == '' ? this.getInput("id").id = 'no-id' : console.log('new id not needed') ;

        if (this.placeholder == undefined) {
            this.getAttribute('placeholder') == null ?
            this.getInput("placeholder").placeholder = '' : this.getInput("placeholder").placeholder = this.getAttribute('placeholder');
        } else {
            this.getInput("placeholder").placeholder = this.placeholder;
        }

        console.log('<- End of input ->')
        console.log('')
    }

    onClear() {
        this.value = "";
        this.style.position = "static";
        this.placeholder = "Cleared";
    }

    setPos(x, y) {
        this.style.top = x + "px";
        this.style.left = y + "px";
        this.style.position = "relative";
    }

    setDimensions(width, height) {
        this.style.width = width + "px";
        this.style.height = height + "px";
    }

    caps() {
        alert(/[A-Z]/.test(this.value) ? "Valid" : "Not Valid");
    }

    integer() {
        alert(/[^0-9]/.test(this.value) ? "Valid" : "Not valid");
    }

    floatTest() {
        alert(/[0-9]/.test(this.value) ? "Valid" : "Not Valid");
    }

    lowerCaps() {
        alert(/[a-z]/.test(this.value) ? "Valid" : "Not Valid");
    }

    validateValue() {
        (this.value == '') ? alert('Input Empty'): alert('Not Empty');
    }
}

customElements.define("eg-input", EgInput);