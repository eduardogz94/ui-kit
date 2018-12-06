import EgInput from "../components/EgInput.js";
import EgButton from "../components/EgButton.js";
import EgCol from "../components/Grid/EgCol.js";
import EgGrid from "../components/Grid/EgGrid.js";
import EgIcon from "../components/EgIcon.js";
import EgAlert from "../components/EgAlert.js";
import EgTable from "../components/EgTable.js";

/** A function that sets to the desired EgInput a length value validation.
 * @function
 * @param {EgInput} input EgInput elements that will be validated (required).
 * @param {Int} length Int as the value to be validated with (required).
 * @public
 */
export const lengthValidator = (input, length) => {
  return input.validateValue(length);
};

/** A function that sets to the desired EgInput a email type validation.
 * @function
 * @param {EgInput} input EgInput elements that will be validated (required).
 * @param {String} type String as the type of email to be validated (required).
 * @public
 */
export const emailValidator = (input, type) => {
  return input.validateEmail(type);
};

/** A function that generates a new EgInput with control and type minimum.
 * @function
 * @param {String} control Control attribute for input (required).
 * @param {String} type Type of input (required).
 * @param {String} [id] Id of input (optional but recomended).
 * @param {String} [col] Col attribute for the input (optional).
 * @param {String} [placeholder] Placeholder attribute for the input (optional)
 * @public
 * @return EgInput with the props passed.
 */
export const createInput = (
  control,
  type,
  id = null,
  col = null,
  ph = null
) => {
  let newInput = new EgInput(control, type);
  if (id) newInput.id = id;
  if (col) newInput.col = col;
  if (ph) newInput.placeholder = ph;

  return newInput;
};

/** A function that creates EgCard title object (h6).
 * @function
 * @param {Sting} style A string that sets the style of the text (required).
 * @param {String} text Text that belongs to the card header title (required).
 * @public
 * @return EgCardaText with the props passed.
 */
export const createCardText = (style, text) => {
  let cardText = document.createElement("h6");
  cardText.setAttribute("class", style);
  cardText.innerHTML = text;

  return cardText;
};

/** A function that creates a EgButton with style and text.
 * @function
 * @param {String} type A string that sets button type (required).
 * @param {String} [text] A string that sets innerText of the button (optional but recommended).
 * @param {String} [id] A string that sets the id of the button (optional but recommended).
 * @param {String} [col] A string that sets the col of the button (optional).
 * @public
 * @return EgButton with the props passed.
 */
export const createButton = (
  type,
  text = null,
  id = null,
  col = null,
  offset = null
) => {
  let newButton = new EgButton(type);
  if (col) newButton.col = col;
  if (text) newButton.innerText = text;
  if (id) newButton.id = id;
  if (offset) newButton.offset = offset;

  return newButton;
};

/** A function to appends and create a element into a new col.
 * @function
 * @param {EgElement} Element receives a element and appends it (required).
 * @param {String} col A string for the col attribute (required).
 * @param {String} [offset] A string for the offset attribute (optional).
 * @public
 * @return EgCol with the element passed.
 */
export const createCol = (element, col, offset = null) => {
  let newCol = new EgCol(col, offset);
  newCol.appendChild(element);

  return newCol;
};

/** A function to appends some elements into a new col and creates it.
 * @function
 * @param {String} col A string for the col attribute (required).
 * @param {EgElements} elements Receives various elements and appends them into the new col (required).
 * @public
 * @return EgCol with the all the elements passed.
 */
export const appendsCreateCol = (col, ...elements) => {
  let newCol = new EgCol(col);
  elements.forEach(element => {
    newCol.appendChild(element);
  });

  return newCol;
};

/** A function to appends some elements into a new grid and creates it.
 * @function
 * @param {EgElements} elements Receives various elements and appends them into the new grid (required).
 * @public
 * @return EgGrid with the all the elements passed.
 */
export const createView = (...elements) => {
  let container = new EgGrid();
  elements.forEach(element => {
    container.appendChild(element);
  });

  document.body.appendChild(container);
};

/** A function that create a new text element with a class and obviously a text.
 * @function
 * @param {String} element A string typed as the html element that you want to create(required).
 * @param {String} css A string typed as the css class that you want to set to the object (required).
 * @param {String} text A string typed as the text you want to set to the element (required).
 * @public
 * @return HTMLElement New text element with the props passed.
 */
export const createTextElement = (element, css, text) => {
  let newElement = document.createElement(element);
  newElement.setAttribute("class", css);
  newElement.innerHTML = text;

  return newElement;
};

/** Creates a new alert.
 * @function
 * @param {String} type Class for the alert.
 * @param {String} text Text for the alert.
 * @param {String} [id] ID of the alert.
 * @param {String} [close] Closes the alert.
 * @public
 * @return {EgAlert} with all the new props.
 */
export const createAlert = (type, text, id = null, close = null) => {
  let newAlert = new EgAlert(type, text);
  if (id) newAlert.id = id;
  if (close) newAlert.close = close;

  return newAlert;
};

/** Creates a new icon.
 * @function
 * @param {String} icon Type of icon.
 * @param {String} size Size of the icon.
 * @param {String} [css] Class for the icon
 * @public
 * @return {EgIcon} with all the new props.
 */
export const createIcon = (icon, size, css = null) => {
  let newIcon = new EgIcon(icon, size);
  if (css) newIcon.css = css;

  return newIcon;
};

/** Creates a new icon.
 * @function
 * @param {String} title String for the title
 * @param {String} css Class for the icon
 * @param {String} [id] ID of the table.
 * @public
 * @return {EgTable} with all the new props.
 */
export const createTable = (css, id = null) => {
  let traningTable = new EgTable(css);
  if (id) traningTable.id = null;

  return traningTable;
};
