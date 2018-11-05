class EgForm extends HTMLElement {
    constructor() {
        super();
        this.id = this.id
    }

    connectedCallback() {
        this.setForm()
        // this.defaultProperties()

        ccc.registerComponent(this, {
            id: this.id,
            secret: 'Form Parent'
        });
    }

    defaultProperties() {
        this.style.display = 'inline-block';
        this.style.width = '99.2%';
        this.style.padding = '0px 4px'
        this.style.marginTop = '4px'
        this.style.webkitTransition = 'all 1.5s';
    }

    setObjectProperties(props, keys) {
        if (props.lenght === keys.lenght) {
            for (let index in props) {
                this.setAttribute(props[index], keys[index])
            }
        } else {
            console.error('both arrays must be same lenght')
        }
    }

    setBorder(color, val, radius) {
        this.style.borderColor = color;
        this.style.border = val;
        this.style.borderRadius = radius;
    }

    setFont(val, size, color) {
        this.style.fontFamily = val;
        this.style.fontSize = size;
        this.style.color = color;
    }

    setFontStyle(s, w) {
        this.style.fontStyle = s;
        this.style.fontWeight = w;
    }

    setBackground(color, img) {
        this.style.background = color;
        img = 'none' ?
            img = '' :
            this.style.backgroundImage = 'url(' + this.pathImg + img + ')'
    }

    getButtons() {
        return this.querySelectorAll('button');
    }

    getInputs() {
        return this.querySelectorAll('input');
    }

    getInputValues() {
        let data = []

        this.getInputs().forEach(response => {
            let id = '';
            response.id || response.id == undefined ?
                id = response.id :
                id = 'no id input';

            response.value !== "" ?
                data.push({
                    value: response.value,
                    type: typeof response.value,
                    id: id,
                    filled: true
                }) :
                data.push({
                    value: response.value,
                    type: typeof response.value,
                    id: id,
                    filled: false
                });
        })
        return data
    }

    getObjects(obj) {
        return this.querySelectorAll(`${obj}`);
    }

    setForm() {
        if (this.getAttribute('env')) {
            this.env = this.getAttribute('env')
        }

        if (this.getAttribute('id')) {
            this.id = this.getAttribute('id')
        }

        if (this.col) {
            this.setAttribute('class', this.col)
        }

        if (this.getAttribute('col')) {
            this.setAttribute('class', `${this.getAttribute('col')}`)
        }

        if (this.offset) {
            this.setAttribute('class', this.offset)
        }

        if (this.getAttribute('offset')) {
            this.setAttribute('class', this.getAttribute('offset'))
        }

        if (this.col && this.offset) {
            this.setAttribute('class', `${this.col} ${this.offset}`)
        }

        if (this.getAttribute('col') && this.getAttribute('offset')) {
            this.setAttribute('class', `${this.getAttribute('col')} ${this.getAttribute('offset')}`)
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