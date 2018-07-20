class EgInput extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `<input id=${this.id}/>`
        this.setInput();
        this.defaultProperties()
        this.objectProperties(this.env)
        ccc.registerComponent(this, {
            id: this.id,
            secret: 'Input Parent'
        });
    }

    defaultProperties() {
        this.getInput().style.display = 'inline-block';
        this.getInput().style.width = '97.5%';
        this.getInput().style.lineHeight = '1.42857143';
        this.getInput().style.heigth = '25px';
        this.getInput().style.padding = '0px 12px';
        this.getInput().style.marginBottom = '5px';
        this.getInput().style.marginTop = '5px';
        this.getInput().style.outline = 'none'
    }

    objectProperties(env) {
        switch (env) {
            case 'jungle':
                this.setFont('arial', '14px', 'green');
                this.setBorder('white', '1px solid transparent', '8px');
                this.setBackground('white', 'none')
            break;

            case 'sky':
                this.setFont('arial', '14px', '#337ab7');
                this.setBorder('black', '1px solid transparent', '8px');
                this.setBackground('white', 'none')
            break;

            case 'dark':
                this.setFont('arial', '14px', '#9E1F1E');
                this.setBorder('white', '1px solid transparent', '8px');
                this.setBackground('white', 'none')
            break;

            default:
                this.setFont('arial', '14px', 'purple');
                this.setBorder('#D4AF37', '1px solid transparent', '8px');
                this.setBackground('white', 'none')
            break;
        }
    }

    setObjectProperties(props, keys) {
        if (props.lenght === keys.lenght) {
            for (let index in props) {
                this.getInput().setAttribute(props[index], keys[index])
            }
        } else {
            console.log('both arrays must be same lenght')
        }
    }

    setBorder(color, val, radius) {
        this.getInput().style.borderColor = color;
        this.getInput().style.border = val;
        this.getInput().style.borderRadius = radius;
    }

    setFont(val, size, color) {
        this.getInput().style.fontFamily = val;
        this.getInput().style.fontSize = size;
        this.getInput().style.color = color;
    }

    setFontStyle(s, w) {
        this.getInput().style.fontStyle = s;
        this.getInput().style.fontWeight = w;
    }

    setBackground(color, img) {
        this.getInput().style.background = color;
        img = 'none' 
            ? console.log('no image for the background') 
            : this.getInput().style.backgroundImage = 'url(' + this.pathImg + img + ')'
    }

    getInput() {
        return this.querySelector('input');
    }

    setInput() {

        this.id == '' 
            ? this.getInput().id = 'no-id' 
            : this.getInput().id = `${this.id}-input`

        if(this.getAttribute('env')) {
            this.env = this.getAttribute('env')
        }

        if (this.placeholder == undefined) {
            this.getAttribute('placeholder') == null 
                ? this.getInput().placeholder = '' 
                : this.getInput().placeholder = this.getAttribute('placeholder');
        } else {
            this.getInput().placeholder = this.placeholder;
        }
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