class EgButton extends HTMLElement {
	constructor() {
	    super();
	    this.method = this.method;
	    console.log('<- New Button ->')
	}

	connectedCallback() {
	    this.innerHTML = ` <button id=${this.id}-button onClick=${this.method}()>${this.innerText}</button>`;
	    this.setButton();

	    ccc.registerComponent(this, {
	        id: this.id,
	        secret: 'Button Parent'
	    });
	}

	getButton(param) {
		console.log(`Changing Button Attribute => ${param}`)
	    return this.querySelector('button');
	}

	setButton() {
	    this.id == '' ? this.getButton("id").id = 'no-id' : console.log('Has Id')
	    
	    this.innerText == ' ' ? this.getButton("innerText").innerText = 'Button' : console.log('Has Text')

	    console.log('<- End of button ->')
	    console.log('')
	}
}

customElements.define("eg-button", EgButton);