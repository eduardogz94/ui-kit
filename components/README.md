# eg-components

## Documentation and ussage

## Global Methods for Button, Input, Form.

> Set default properties of the element inside our component.
```
defaultProperties(){}
```
> Receive a string to change the component theme (defined styles). 
```
environment(env) {}
```
> Set border color, border value, and border radius of the element inside our component.
```
setBorder(color,val,radius){}
```
> Set the background color and image of the element inside our component.
```
setBackground(color, img){}
```
> Set the font style and width of the element inside our component. 
```
setFontStyle(s, w) {}
```
> Set the font family, size and color of the element inside our component.
```
setFont(val, size, color) {}
```
> Receive an array of key-values pairs to set the desired attributes to the element inside our component.
```
setObjectProperties(props, keys) {
```

### eg-button

> Setters of the button inside our component.
```
setButton(){}
```

> Returns the button inside our component.
```
 getButton(){}
```

### eg-input

> Returns type of input, value of input and checks if the input is empty.
```
getInputValue() {
```

> Returns the input inside our component.
```
getInput() {}
```

> Setters of the input inside our component.
```
setInput(){}
```

> Clears the input inside our component.
```
onClear() {}
```

> Sets the position X and Y of the input inside our component.
```
setPos(x, y) {}
```

> Sets the width and height of the input inside our component.
```
setDimensions(width, height) {}
```

> Evaluate the value of the input inside our component to check if: 
```
caps() {} return true or false if its CAPS 
lowerCaps() {} return true or false if lower caps
integer() {} return true or false if integer
floatTest() {} return true or false if float
validateValue() {} return true or false if empty
```

### eg-form

> Return all the buttons inside our form component.
```
getButtons(){}
```

> Return all the inputs inside our form component.
```
getInputs() {}
```

> Receive a string and return all the desired objects inside our form component.
```
getObjects(obj) {}
```

> Setters of our form component.
```
setForm() {}
```
> Appends a single object (element) to our form component.
```
addSingleObject(element) {}
```
> Appends N numbers of objects (elements) to our form component. 
```
addMultipleObjects(...elements) {
```

> Create via string and int values pair elements to append our form component.
```
createMultipleObjects(element,quantity){}   
```