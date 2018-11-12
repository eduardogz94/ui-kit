##Components Functions

This functions are created in order to be faster and easier to create our components

 * A function that sets to the desired EgInput a length value validation.
```javascript
/**
 * @param {EgInput} input EgInput elements that will be validated.
 * @param {Int} length Int as the value to be validated with.
 */
function validateValue(input, length) {
  setValidationLength(input, length);
}
```

 * A function that sets to the desired EgInput a email type validation.
```javascript
/**
 * @param {EgInput} input EgInput elements that will be validated.
 * @param {String} type String as the type of email to be validated.
 */
function validateEmail(input, type) {
  setValidationEmail(input, type);
}
```

 * A function that generates a new EgInput with control and type minimum.
```javascript
/**
 * @param {String} control, Control attribute for input (required).
 * @param {String} type, Type of input (required).
 * @param {String} id, Id of input (optional but recomended).
 * @param {String} col, Col attribute for the input (optional).
 * @param {String} placeholder, Placeholder attribute for the input (optional)
 */
const createInput = ( control, type, id = null, col = null, placeholder = null ) => {
  let newInput = new EgInput(control, type);
  if (id) newInput.id = id;
  if (col) newInput.col = col;
  if (placeholder) newInput.placeholder = placeholder;

  return newInput;
};
```

 * A function that creates card title object (h6).
```javascript
/**
 * @param {Sting} style A string that sets the style of the text (required).
 * @param {String} text Text that belongs to the card header title (required).
 */
const createCardText = (style, text) => {
  let cardText = document.createElement("h6");
  cardText.setAttribute("class", style);
  cardText.innerHTML = text;

  return cardText;
};
```

* A function that creates a eg-button with style and text.

```javascript
/**
 * @param {String} style A string that sets button style (required).
 * @param {String} text A string that sets innerText of the button (optional but recommended).
 * @param {String} id A string that sets the id of the button (optional but recommended).
 * @param {String} col A string that sets the col of the button (optional).
 */
const createButton = (style, text = null, id = null, col = null) => {
  let newButton = new EgButton(style);
  if (col) newButton.col = col;
  if (text) newButton.innerText = text;
  if (id) newButton.id = id;

  return newButton;
};
```

 * A function to appends and create a element into a new col.
```javascript
/**
 * @param {EgElement} Element receives a element and appends it (required).
 * @param {String} col A string for the col attribute (required).
 * @param {String} offset A string for the offset attribute (optional).
 */
const createCol = (element, col, offset = null) => {
  let newCol = new EgCol(col, offset);
  newCol.appendChild(element);

  return newCol;
};
```

 * A function to appends a some elements into a new col and creates it.
```javascript
/**
 * @param {String} col A string for the col attribute.
 * @param {EgElements} elements receives various elements and appends them into the new col.
 */
const appendsCreateCol = (col, ...elements) => {
  let newCol = new EgCol(col);
  elements.forEach(element => {
    newCol.appendChild(element);
  });

  return newCol;
};
```

 * A function that create a new text element with a class and obviously a text.
```javascript
/**
 * @param {HTMLTextElement} textElement A string typed as the html element that you want to create(required). 
 * @param {String} css A string typed as the css class that you want to set to the object (required).
 * @param {String} text A string typed as the text you want to set to the element (required).
 */
const returnTextElement = (element, css, text) => {
  let newElement = document.createElement(element);
  newElement.setAttribute("class", css);
  newElement.innerHTML = text;

  return newElement;
};

```
