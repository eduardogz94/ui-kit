/* ---------- The EgComponent class ---------- */ ;
(function() {
    /* Create a new object from the prototype of HTMLInputElement. */
    var inputProto = Object.create(HTMLInputElement.prototype);

    /* Define some basic methods for the prototype of the component */
    Object.defineProperties(inputProto, {

        /* The function that clears a component instance. */
        onClear: {
            value: () => {
                this.value = "";
                this.style.position = "static";
                this.placeholder = "Cleared";
            }
        },

        /* The function that sets the position of a component instance. */
        setPos: {
            value: (x, y) => {
                this.style.top = x + "px";
                this.style.left = y + "px";
                this.style.position = "relative";
            }
        },

        /* The function that sets the dimensions of a component instance. */
        setDimensions: {
            value: (width, height) => {
                this.style.width = width + "px";
                this.style.height = height + "px";
            }
        },

        /* The function that return if the value of a component instance is integer. */
        integer: {
            value: (input) => {
                alert(/[0-9]/.test(this.value) ? "Valid" : "Not Valid");
            }
        },

        /* The function that returns if the value of a component instance is float. */
        floatTest: {
            value: (input) => {
                alert(/[^0-9]/.test(this.value) ? "Valid" : "Not valid");
            }
        },

        /* The function that returns if the value of a component instance is uppercase. */
        caps: {
            value: (input) => {
                alert(/[A-Z]/.test(this.value) ? "Valid" : "Not Valid");
            }
        },

        /* The function that returns if the value of a component instance is lowercase. */
        lowerCaps: {
            value: (input) => {
                alert(/[a-z]/.test(this.value) ? "Valid" : "Not Valid");
            }
        },

        /* The function that returns if the value of a component instance is empty. */
        validateValue: {
            value: (input) => {
                (this.value == '') ? alert('Input Empty'): alert('Not Empty');
            }
        },

        postData: {
            value: (input) => {
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
        }


    }); // DefineProperties

    /* Register the EgComponent in the browser. */
    window.EgComponent = document.registerElement("eg-input-es6", {
        prototype: inputProto,
        extends: "input"
    });

})(); // Function 

/* ---------- Instantiating an EgComponent ---------- */
/* Create a new instance of EgComponent. */
var egcomp = new EgComponent();

/* Set the 'placeholder' property. */
egcomp.placeholder = "Input de eduardo ES6";

/* Set the 'pattern' property. */
egcomp.pattern = /[a-z]/;

/* Set initial position. */
egcomp.style = 'margin-left:35%; margin-top:5%';

/* Insert the component into the body of the document. */

var test = document.getElementById('test');
test.appendChild(egcomp);

/* Log the component to the console. */

console.log('-----------------------')
console.log(egcomp)
console.log('-----------------------')


test = () => {
    egcomp.onClear();
    egcomp.setDimensions(200, 15);
}

test1 = () => {
    egcomp.setDimensions(261, 15);
}

test2 = () => {
    egcomp.caps();
}

test3 = () => {
    egcomp.lowerCaps();
}

test4 = () => {
    egcomp.setPos(3, 580);
}

test5 = () => {
    egcomp.integer();
}

test6 = () => {
    egcomp.floatTest();
}

test7 = () => {
    egcomp.validateValue();
}

test8 = () => {
    egcomp.postData();
}