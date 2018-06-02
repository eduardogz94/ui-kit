class EgInput extends HTMLElement {
    constructor() {
        super();
        this.id = this.id;
        this.placeholder = this.placeholder;
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

    postData() {
        let params = this.value;

        const options = {
            method: 'post',
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                params: params
            })
        }

        fetch('./CCC', options)
            .then(response => response.json())
            .then(body => {
                (body.status == 200) ? console.log(body): console.log('error')
            })
            .catch((err) => {
                console.log(err)
            })
    }

    connectedCallback() {
        this.innerHTML = '<input></input>'
    }
}

customElements.define("eg-comp", EgInput, {
    extends: "input"
});

const input = new EgInput()
input.id = 1;

document.body.appendChild(input)