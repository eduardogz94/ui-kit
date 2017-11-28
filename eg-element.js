    		 var inputProto = Object.create(HTMLInputElement.prototype);   						
			 //funciones del js API (prototype del componnente)	 
			 inputProto.onClear = function(){
				 this.value = "";
			 }

			 inputProto.setPos = function(x,y){
			 	this.style.x = x;
			 	this.style.y = y;
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
			 function test(){
   				 egcomp.onClear();
   				 egcomp.setDimensions(250,15);
			 }

			 function test1(){
				 egcomp.setDimensions(350,15);
			 }

			 function test2(){
				 egcomp.caps();
			 }

			 function test3(){
				 egcomp.lowerCaps();
			 }

			 function test4(){
			 	egcomp.setPos(20,250);
			 }
			 //metiendo el componente al html desde el dom
			 document.body.appendChild(egcomp);