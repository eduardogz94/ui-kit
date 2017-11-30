/* ---------- The EgComponent class ---------- */
;(function () {
  /* Create a new object from the prototype of HTMLInputElement. */
  var inputProto = Object.create(HTMLInputElement.prototype);

  /* Define some basic methods for the prototype of the component */
  Object.defineProperties(inputProto, {
    /* The function that clears a component instance. */
    onClear: {
      value: function() {
        this.value = "";
        this.style.position = "static";
        this.placeholder = "Cleared";
      }
    },

    /* The function that sets the position of a component instance. */
    setPos: {
      value: function(x, y) {
        this.style.top = x + "px";
        this.style.left = y + "px";
        this.style.position = "relative";
      }
    },

    /* The function that sets the dimensions of a component instance. */
    setDimensions: {
      value: function(width, height) {
        this.style.width = width + "px";
        this.style.height = height + "px";
      }
    },

    /* The function that return if the value of a component instance is integer. */
    integer:{
      value: function(input){
        alert(/[0-9]/.test(this.value) ? "Valid" : "Not Valid");
      }
    },

    /* The function that returns if the value of a component instance is float. */
    floatTest:{
      value: function(input){
        alert(/[^0-9]/.test(this.value) ? "Valid" : "Not valid");
      }
    },
    /* The function that returns if the value of a component instance is uppercase. */
    caps: {
      value: function(input) {
        alert(/[A-Z]/.test(this.value) ? "Valid" : "Not Valid");
      }
    },

    /* The function that returns if the value of a component instance is lowercase. */
    lowerCaps: {
      value: function(input) {
        alert(/[a-z]/.test(this.value) ? "Valid" : "Not Valid");
      }
    },
  }); // DefineProperties

  /* Register the EgComponent in the browser. */
  window.EgComponent = document.registerElement("eg-input", {
    prototype: inputProto,
    extends: "input"
  });

}
)(); // Function 

/* ---------- Instantiating an EgComponent ---------- */

/* Create a new instance of EgComponent. */
var egcomp = new EgComponent();

/* Set the 'placeholder' property. */
egcomp.placeholder = "Input de eduardo";

/* Set the 'pattern' property. */
egcomp.pattern = /[a-z]/;

/* Insert the component into the body of the document. */
document.body.appendChild(egcomp);

/* Log the component to the console. */
console.log(egcomp);

 function test(){
   egcomp.onClear();
   egcomp.setDimensions(200,15);
 }

 function test1(){
   egcomp.setDimensions(261,15);
 }

 function test2(){
   egcomp.caps();
 }

 function test3(){
   egcomp.lowerCaps();
 }

 function test4(){
   egcomp.setPos(3,580);
 }

 function test5(){
   egcomp.integer();
 }

 function test6(){
   egcomp.floatTest();
 }