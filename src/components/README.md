# Eg-components

## Documentation and ussage

## Global Methods for Button, Input, Form.

> Set default properties of the element inside our component.
```javascript
defaultProperties(){}
```
> Receive a string to change the component theme (defined styles). 
```javascript
environment(env) {}

const input = new EgInput()
input.environtment('Sky')
```
> Set border color, border value, and border radius of the element inside our component.
```javascript
setBorder(color,val,radius){}

const input = new EgInput()
input.setBorder('blue,1px solid, 8px')
```
> Set the background color and image of the element inside our component.
```javascript
setBackground(color, img){}

const button = new EgButton()
// URL CAN BE NULL
button.setBackground('blue', 'url')
```
> Set the font style and width of the element inside our component. 
```javascript
setFontStyle(s, w) {}

const form = new EgForm()
form.setFontStyle('bold', '900px');
```
> Set the font family, size and color of the element inside our component.
```javascript
setFont(val, size, color) {}

const button = new EgButton()
button.setFont('arial', '14px', 'green');
```
> Receive an array of key-values pairs to set the desired attributes to the element inside our component.
```javascript
setObjectProperties(props, keys) {}

const input = new EgInput()
const props = ['class', 'col', 'offset']
const keys = ['col', 'col-3', 'offset-3']
input.setObjectProperties(props,keys)
```

### Eg-button

> Setters of the button inside our component.
```javascript
setButton(){}
```

> Returns the button inside our component.
```javascript
getButton(){}
const button = new EgButton()
button.getButton()
```

### Eg-input

> Returns type of input, value of input and checks if the input is empty.
```javascript
getInputValue() {} 
// returns value, typeof, id and a filled attribute

const input = new EgInput()
input.getInputValue()
```

> Returns the input inside our component.
```javascript
getInput() {}

const input = new EgInput()
input.getInput()
```

> Setters of the input inside our component.
```javascript
setInput(){}

// Calls automatic when mounted
```

> Clears the input inside our component.
```javascript
onClear() {}

const input = new EgInput()
input.onClear()
```

> Sets the position X and Y of the input inside our component.
```javascript
setPos(x, y) {}

const input = new EgInput()
input.setPos('15', '50')
```

> Sets the width and height of the input inside our component.
```javascript
setDimensions(width, height) {}

const input = new EgInput()
input.setDImensions('15', '50')
```

> Evaluate the value of the input inside our component to check if: 
```javascript
caps() {} return true or false if CAPS 
lowerCaps() {} return true or false if LOWER CAPS
integer() {} return true or false if INTEgER
floatTest() {} return true or false if FLOAT
validateValue() {} return true or false if null

const input = new EgInput()
input.caps()
input.lowerCaps()
input.integer()
input.floatTest()
input.validateValue()
```

### Eg-form

> Return all the buttons inside our form component.
```javascript
getButtons(){}

const form = new EgForm()
form.getButtons()
```

> Return all the inputs inside our form component.
```javascript
getInputs() {}

const form = new EgForm()
form.getInputs()
```

> Receive a string and return all the desired objects inside our form component.
```javascript
getObjects(obj) {}

const form = new EgForm()
form.getObjects('inputs')
form.getObjects('h1')
form.getObjects('a')
form.getObjects('Eg-button')
```

> Setters of our form component.
```javascript
setForm() {}

// Calls when mounted
```
> Appends and creates single object (element) to our form component.
```javascript
addSingleObject(element) {}

const form = new EgForm()
form.addSingleObject('h1')
```
> Appends N numbers of objects (elements) to our form component. 
```javascript
addMultipleObjects(...elements) {}

const form = new EgForm()
const input = new EgInput()
const button = new EgButton()
form.addMultipleObjects(input,button)
```

> Create via string and int v