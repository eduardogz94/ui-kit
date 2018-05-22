var inputProto = Object.create(HTMLInputElement.prototype);   						
//funciones del js API (prototype del componnente)	 
inputProto.onClear = function(){
 this.value = "";
 this.style.position = "static";
 this.placeholder = "Cleared";
}

inputProto.setPos = function(x,y){
 this.style.top = x + "px";
 this.style.left = y + "px";
 this.style.position =  "relative";
}

inputProto.setDimensions = function(width,height){
 this.style.width = width + "px";
 this.style.height = height + "px";
}

inputProto.caps = function(input){
 var match = /[A-Z]/.test(this.value);
	 if(match){
	     alert("Valid")}
	 else{
		 alert("Not valid")
	 }
}

inputProto.integer = function(input){
	 var match = /[0-9]/.test(this.value);
		 if(match){
		 	 alert("Valid")
		 }
		 else{
		 	 alert("Not Valid")
		 }
}

inputProto.floatTest = function(input){
	 var match = /[^0-9]/.test(this.value);
		 if(match){
		 	 alert("Valid")
		 }
		 else{
		 	 alert("Not Valid")
		 }
}	

inputProto.lowerCaps = function(){
 var match = /[a-z]/.test(this.value);
	 if (match){
		 alert("Valid")
	 }else{
		 alert("Not valid")
	 }
}
			 
var EgComponent = document.registerElement('eg-input', {
 	prototype: inputProto, 
 	extends:'input'}
);

var egcomp = new EgComponent();

egcomp.placeholder = "Input de eduardo vanilla";
egcomp.style = 'margin-left:35%; margin-top:5%';

console.log('-----------------------')
console.log('vanilla')
console.log(egcomp)
console.log('-----------------------')

/* Funciones de los botones para ejecutar el input */
test  = () => {
   egcomp.onClear();
   egcomp.setDimensions(200,15);
 }

test1 = () => {
   egcomp.setDimensions(261,15);
 }

test2 = () => {
   egcomp.caps();
 }

test3 = () => {
   egcomp.lowerCaps();
 }

test4 = () => {
   egcomp.setPos(3,580);
 }

test5 = () => {
   egcomp.integer();
 }

test6 = () => {
   egcomp.floatTest();
 }

 //metiendo el componente al html desde el dom
 document.body.appendChild(egcomp);
