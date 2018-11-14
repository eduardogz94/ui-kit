/**
 * A function that sets to the desired EgInput a length value validation.
 * @function
 * @param {EgInput} input EgInput elements that will be validated (required).
 * @param {Int} length Int as the value to be validated with (required).
 * @return {setValidateLength()} Calls a input function to handle a validation.
 */
function validateValue(input, length) {
  setValidationLength(input, length);
}

/**
 * A function that sets to the desired EgInput a email type validation.
 * @function
 * @param {EgInput} input EgInput elements that will be validated (required).
 * @param {String} type String as the type of email to be validated (required).
 * @return {setValidateLength()} Calls a the input function to handle a validation.
 */
function validateEmail(input, type) {
  setValidationEmail(input, type);
}

/**
 * A function that generates a new EgInput with control and type minimum.
 * @function
 * @param {String} control Control attribute for input (required).
 * @param {String} type Type of input (required).
 * @param {String} [id] Id of input (optional but recomended).
 * @param {String} [col] Col attribute for the input (optional).
 * @param {String} [placeholder] Placeholder attribute for the input (optional)
 * @return {EgInput} EgInput with the props passed.
 */
const createInput = (
  control,
  type,
  id = null,
  col = null,
  placeholder = null
) => {
  let newInput = new EgInput(control, type);
  if (id) newInput.id = id;
  if (col) newInput.col = col;
  if (placeholder) newInput.placeholder = placeholder;

  return newInput;
};

/**
 * A function that creates eg-card title object (h6).
 * @function
 * @param {Sting} style A string that sets the style of the text (required).
 * @param {String} text Text that belongs to the card header title (required).
 * @return {EgCard} EgCard with the props passed.
 */
const createCardText = (style, text) => {
  let cardText = document.createElement("h6");
  cardText.setAttribute("class", style);
  cardText.innerHTML = text;

  return cardText;
};

/**
 * A function that creates a eg-button with style and text.
 * @function
 * @param {String} style A string that sets button style (required).
 * @param {String} [text] A string that sets innerText of the button (optional but recommended).
 * @param {String} [id] A string that sets the id of the button (optional but recommended).
 * @param {String} [col] A string that sets the col of the button (optional).
 * @return {EgButton} EgButton with the props passed.
 */
const createButton = (style, text = null, id = null, col = null) => {
  let newButton = new EgButton(style);
  if (col) newButton.col = col;
  if (text) newButton.innerText = text;
  if (id) newButton.id = id;

  return newButton;
};

/**
 * A function to appends and create a element into a new col.
 * @function
 * @param {EgElement} Element receives a element and appends it (required).
 * @param {String} col A string for the col attribute (required).
 * @param {String} [offset] A string for the offset attribute (optional).
 * @return {EgCol} EgCol with the element passed.
 */
const createCol = (element, col, offset = null) => {
  let newCol = new EgCol(col, offset);
  newCol.appendChild(element);

  return newCol;
};

/**
 * A function to appends some elements into a new col and creates it.
 * @function
 * @param {String} col A string for the col attribute (required).
 * @param {EgElements} elements Receives various elements and appends them into the new col (required).
 * @return {EgCol} EgCol with the all the elements passed.
 */
const appendsCreateCol = (col, ...elements) => {
  let newCol = new EgCol(col);
  elements.forEach(element => {
    newCol.appendChild(element);
  });

  return newCol;
};

/**
 * A function that create a new text element with a class and obviously a text.
 * @function
 * @param {String} element A string typed as the html element that you want to create(required).
 * @param {String} css A string typed as the css class that you want to set to the object (required).
 * @param {String} text A string typed as the text you want to set to the element (required).
 * @return {HTMLElement} Text element with the props passed.
 */
const createTextElement = (element, css, text) => {
  let newElement = document.createElement(element);
  newElement.setAttribute("class", css);
  newElement.innerHTML = text;

  return newElement;
};

/**
 * A function to set Border css of the component.
 * @param {String} color as the color to the component border(required).
 * @param {String} val as the value of the component border(required).
 * @param {String} radius as the radius of the component border(required).
 */
const setBorder = (color, val, radius) => {
  this.getButton().style.borderColor = color;
  this.getButton().style.border = val;
  this.getButton().style.borderRadius = radius;
};

/**
 * A function that sets the font css of the component.
 * @function
 * @param {String} val
 * @param {String} size
 * @param {String} color
 */
const setFont = (val, size, color) => {
  this.getButton().style.fontFamily = val;
  this.getButton().style.fontSize = size;
  this.getButton().style.color = color;
};

/**
 * A function to set Font Style css of the component.
 * @param {String} size as the font size for the component(required).
 * @param {String} weight as the font weight for the component(required).
 */
const setFontStyle = (s, w) => {
  this.getButton().style.fontStyle = s;
  this.getButton().style.fontWeight = w;
};
