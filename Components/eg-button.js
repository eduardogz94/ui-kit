class EgButton extends HTMLElement {
	constructor() {
		super();
	}

	connectedCallback() {
	    this.innerHTML = ` <button>${this.innerText}</button>`;
		this.setButton();
		this.defaultProperties();
		this.objectProperties(this.env);

	    ccc.registerComponent(this, {
	        id: this.id,
	        secret: 'Button Parent'
	    });
	}

	defaultProperties(){
		this.getButton().style.display = 'inline-block';
		this.getButton().style.padding = '6px 12px';
		this.getButton().style.marginBottom = '0';
		this.getButton().style.lineHeight = '1.42857143';
		this.getButton().style.whiteSpace = 'nowrap';
		this.getButton().style.verticalAlign = 'middle';
		this.getButton().style.msTouchAction = 'manipulation';
		this.getButton().style.touchAction = 'manipulation';
		this.getButton().style.cursor = 'pointer';
		this.getButton().style.webkitTransition = 'all 2s';
		this.getButton().style.outline = 'none'
	}
	
	objectProperties(env) {
		switch (env) {
			case 'jungle':
				this.setFont('arial', '14px', 'green');
				this.setBorder('green', '1px solid transparent', '8px');
				this.setBackground('white', 'none')
			break;

			case 'sky':
				this.setFont('arial', '14px', '#337ab7');
				this.setBorder('black', '1px solid transparent', '8px');
				this.setBackground('white', 'none')
			break;

			case 'dark':
				this.setFont('arial', '14px', 'white');
				this.setBorder('white', '1px solid transparent', '4px');
				this.setBackground('#9E1F1E', 'none')
			break;

			default:
				this.setFont('arial', '14px', 'white');
				this.setBorder('#D4AF37', '1px solid transparent', '8px');
				this.setBackground('purple', 'none')
			break;
		}
	}
		
	setObjectProperties(props,keys) {
		if (props.lenght === keys.lenght) {
			for(let index in props) {
				this.getButton().setAttribute(props[index], keys[index])
			}
		} else {
			console.log('both arrays must be same lenght')
		}
	}
		
	setBorder(color,val, radius) {
		this.getButton().style.borderColor = color;
		this.getButton().style.border = val;
		this.getButton().style.borderRadius = radius;
	}

	setFont(val, size, color) {
		this.getButton().style.fontFamily = val;
		this.getButton().style.fontSize = size;
		this.getButton().style.color = color;
	}

	setFontStyle(s, w) {
		this.getButton().style.fontStyle = s;
		this.getButton().style.fontWeight = w;
	}

	setBackground(color, img) {
		this.getButton().style.background = color;
		img = 'none' 
		? console.log('no image for the background')
		: this.getButton().style.backgroundImage = 'url(' + this.pathImg + img + ')'
	}

	setButton() {	
		if (this.getAttribute('env')) {
			this.env = this.getAttribute('env')
		}

		this.id == '' 
			? this.getButton().id = 'no-id' 
			: this.getButton().id = `${this.id}-button`
		
		this.innerText == '' 
			? this.getButton().innerText = 'Button' 
			: this.getButton().innerText = this.innerText

		if (this.onclick == null) {
			this.method == undefined 
				?  this.getButton().setAttribute('onClick', this.getAttribute('method'))   
				:  this.getButton().setAttribute('onClick', this.method)    
		}
	}
	
	getButton() {
	    return this.querySelector('button');
	}

	callFromJs(){
		console.log('finish calling from js')
	}

	callFromHtml(){
		console.log("finished calling from html")
	}
	
}

customElements.define("eg-button", EgButton);