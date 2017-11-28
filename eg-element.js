    		 var inputProto = Object.create(HTMLInputElement.prototype);   						
			 //funciones del js API (prototype del componnente)	 
			 inputProto.onClear = function(){
				 this.value = "";
			 }

			 inputProto.setDimensions = function(width,height){
				 this.style.width = width + "px";
				 this.style.height = height + "px";
			 }

			 inputProto.caps = function(input){
				 input = this.value;
				 var regEx = /[A-Z]/;
				 var match = regEx.test(input);
					 if(match){
					     alert("Valid")}
					 else{
						 alert("Not valid")
					 }
			 }
			
			 inputProto.lowerCaps = function(input){
 			 	 input = this.value;
  		      	 var regEx =/[^A-Z]/;
    			 var match = regEx.test(input);
    				 if (match){
    					 alert("Valid")
    				 }else{
        				 alert("Not valid")
    				 }
			 }
						
			 var EgComponent = document.registerElement('eg-input', 
				 {prototype: inputProto, extends:'input'}
				 );

			 var egcomp = new EgComponent();
			 //function de componente ya creado en el DOM
			 function prueba(){
   				 egcomp.onClear();
   				 egcomp.setDimensions(250,15);
			 }

			 function prueba1(){
				 egcomp.setDimensions(350,15);
			 }

			 function prueba2(){
				 egcomp.caps();
			 }

			 function prueba3(){
				 egcomp.lowerCaps();
			 }
			 //metiendo el componente al html desde el dom
			 document.body.appendChild(egcomp);