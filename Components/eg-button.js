class EgButton extends HTMLElement {
	constructor() {
	    super();
	}

	connectedCallback() {
	    this.innerHTML = ` <button>${this.innerText}</button>`;
	    this.setButton();
	    ccc.registerComponent(this, {
	        id: this.id,
	        secret: 'Button Parent'
	    });
	}

	getButton() {
	    return this.querySelector('button');
	}

	setButton() {	

	    this.id == '' 
	    ? this.getButton().id = 'no-id' 
	    : this.getButton().id = `${this.id}-button`
	    
	    this.innerText == ' ' 
	    ? this.getButton().innerText = 'Button' 
	    : this.getButton().innerText = this.innerText

	    if (this.onclick == null) {
	    	this.method == undefined 
	    	?  this.getButton().setAttribute('onClick', this.getAttribute('method'))   
	    	:  this.getButton().setAttribute('onClick', this.method)    
	    }
	}

	callFromJs(){
		console.log('finish calling from js')
	}

	callFromHtml(){
		console.log("finished calling from html")
	}
	
}

customElements.define("eg-button", EgButton);