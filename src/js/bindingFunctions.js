/**
 * A function to get all the specified elements passed as a string of a element.
 * @param {Object} obj A string as the elements to look into the parent element(required).
 * @protected
 */
export function getElementObjects(obj) {
  return this.querySelectorAll(`${obj}`);
}

/**
 * A function to create a element and append it to the component.
 * @param {String} element Representing the element to add(required).
 * @protected
 */
export function createAndAppendElement(element) {
  let object = document.createElement(`${element}`);
  this.appendChild(object);
}

/**
 * A function to add multiple elements into the parent element.
 * @param  {...any} elements All the elements that will be added into the parent component(required 1).
 * @protected
 */
export function appendMultipleElements(...elements) {
  if (this) {
    elements.forEach(element => {
      this.appendChild(element);
    });
  } else {
    throw new Error("TESTS");
  }
}

/**
 * A function to create a element multiple times and append it into the parent element.
 * @param {String} element Representing the element that will be appened n times(required).
 * @param {Int} quantity Representing the quantity of elements that will be appened(required).
 * @protected
 */
export function createMultipleElements(element, quantity) {
  for (let i = 0; i < quantity; i++) {
    let object = document.createElement(`${element}`);
    object.id = i;
    this.appendChild(object);
  }
}

/**
 * A function to set component Properties in a par key-value.
 * @param {String} props Properties received as a string in a array(required).
 * @param {String} keys Kets received as a string in a array(required).
 * @protected
 */
export function safeMultipleSet(props, keys) {
  if (props.lenght === keys.lenght) {
    for (let index in props) {
      this.setAttribute(props[index], keys[index]);
    }
  } else {
    console.error("both arrays must be same lenght");
  }
}

/**
 * Guards against loops when reflecting observed attributes.
 * @param  {String} name Attribute name
 * @param  {any} value
 * @protected
 */
export function safeSet(name, value) {
  if (this.getAttribute(name) !== value) this.setAttribute(name, value);
}

/**
 * Guards against loops when reflecting observed attributes.
 * @param  {String} name Attribute name
 * @param  {any} value
 * @protected
 */
export function safeChildSet(name, value) {
  if (this.getComponent().getAttribute(name) !== value)
    this.getComponent().setAttribute(name, value);
}

/**
 * A function to set Border css of the component.
 * @param {String} color  color for the component border(required).
 * @param {String} val  value of the component border(required).
 * @param {String} radius  radius of the component border(required).
 */
export function setBorder(color, value, radius) {
  this.getComponent().style.borderColor = color;
  this.getComponent().style.border = value;
  this.getComponent().style.borderRadius = radius;
}

/**
 * A function that sets the font css of the component.
 * @param {String} val
 * @param {String} size
 * @param {String} color
 * @protected
 */
export function setFont(value, size, color) {
  this.getComponent().style.fontFamily = value;
  this.getComponent().style.fontSize = size;
  this.getComponent().style.color = color;
}

/**
 * A function to set Font Style css of the component.
 * @param {String} size  as the font size for the component(required).
 * @param {String} weigth  as the font weight for the component(required).
 * @protected
 */
export function setFontStyle(size, weigth) {
  this.getComponent().style.fontStyle = size;
  this.getComponent().style.fontWeight = weigth;
}

export function setBackground(color, img) {
  this.getComponent().style.background = color;
  img = "none"
    ? (img = "")
    : (this.getComponent().style.backgroundImage =
        "url(" + this.pathImg + img + ")");
}

export function onClear() {
  this.getComponent().value = "";
}

export function setPosition(x, y) {
  this.getComponent().style.top = x + "%";
  this.getComponent().style.left = y + "%";
  this.getComponent().style.position = "relative";
}

export function setDimensions(width, height) {
  this.getComponent().style.width = width + "%";
  this.getComponent().style.height = height + "%";
}
