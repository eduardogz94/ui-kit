# Siva-components

## Documentation and ussage

### Siva-button

> Contiene las propiedades predeterminadas de estilo del elemento button dentro del componente
```
defaultProperties(){}
```
> Recibe un parametro y devuelve propiedades que seran agregadas a dich componente 
```
environment(env) {}
```
> Metodo para añadir atributos al elemento boton
```
setButton(){}
```

> Retorna el boton que se encuentra dentro del componente
```
 getButton(){}
```

> Añade estilo de borde al componente, sus parametro son color: para el color que se le quiera especificar al borde, val: valor o grosor del borde, radius: radio de las esquinas del componente
```
setBorder(color,val,radius){}
```
> Estilo de fundo, sus parametros son color: especifica el color del fondo, img: la imagen que se le quiera añadir al fondo(se debe espesificar la direccion, url de la imagen)
```
setBackground(color, img){}
```
> Le da un estilo y tamaño a la fuente 
```
setFontStyle(s, w) {}
```
>
```
setFont(val, size, color) {}
```

### Siva-input

>Contiene las propiedades predeterminadas de estilo del elemento input dentro del componente
```
defaultProperties(){}
```
> Este metodo contiene tiene como parametro env, que recibe un string para un estilo especifico  predeterminado
```
objectProperties(env){}
```

> Permite asignarle atributos al componente posee dos parametros array, 1ro contiene las propiedades a ingresar, 2do posee los keys de esas propiedades
```
setObjectProperties(props, keys) {
```

> Añade estilo de borde al componente sus parametro son color: para el color que se le quiera especificar al borde, val: valor o grosor del borde, radius: radio de las esquinas del componente
```
setBorder(color,val,radius){}
```

> Estilo de fundo, sus parametros son color: especifica el color del fondo, img: la imagen que se le quiera añadir al fondo(se debe espesificar la direccion, url de la imagen)
```
setBackground(color, img){}
```

> Le da un estilo y tamaño a la fuente 
```
setFontStyle(s, w) {}
```
> Añade estilo a la fuente, espesificando el tipo de fuente(val), el tamaño de la fuente (size), y el color (color)
```
setFont(val, size, color) {}
```

> Retorna el valor y el tipo de data que contenga el input, verificando primeramente si se encuentra vacio
```
getInputValue() {
```

>Retorna el input contenido dentro del componente
```
getInput() {}
```

>Metodo para añadir atributos al elemento input dentro del componente
```
setInput(){}
```

> Borra el contenido dentro del elemento input
```
onClear() {}
```

>Ubica al elemento input en la posicion segun las coordenadas (x,y), especificadas
```
setPos(x, y) {}
```

>Modifica el tamaño(ancho, alto) del componente
```
setDimensions(width, height) {}
```

> Evalua la cadena ingresada en el componente y retorna true o false si hay alguna coincidencia 
```
caps() {} verifica si hay letras mayusculas 
integer() {} verifica si hay numero enteros
floatTest() {} verifica si hay numeros decimales
lowerCaps() {} verifica si hay letras minusculas
```

> Retorna true o false, si el componente esta vacio
```
validateValue() {}
```

### Siva-form


> Contiene las propiedades predeterminadas de estilo del elemento button dentro del componente
```
defaultProperties(){}
```

> Este metodo contiene tiene como parametro env, que recibe un string para un estilo especifico  predeterminado
```
objectProperties(env){}
```
> Permite asignarle atributos al componente posee dos parametros array, 1ro contiene las propiedades a ingresar, 2do posee los keys de esas propiedades
```
setObjectProperties(props, keys) {
```

> Retorna el boton que se encuentra dentro del componente
```
getButton(){}
```

> Retorna todos los elementos input dentro del componente,
```
getInputs() {}
```

> Retorna todos los elementos dentro del componente
```
getObjects(obj) {}
```

> Metodo para agregar atributos al componente
```
setForm() {}
```
> Añade solo un elemento dentro del componente
```
addSingleObject(element) {}
```
> Añade n cantidad de objetos al componente pasando como parametro los objetos 
```
addMultipleObjects(...elements) {
```

> Añade multiples elementos al componente enviando como parametro el elemento que se desea agregar y la cantidad
```
createMultipleObjects(element,quantity){}   
```