/**
 * A function that create a new text element with a class.
 * @param {HTMLElement} element A string typed as the html element that you want to create(required). 
 * @param {String} css A string typed as the css class that you want to set to the object (required).
 * @param {String} text A string typed as the text you want to set to the element (required).
 */
const returnTextElement = (element, css, text) => {
  let newElement = document.createElement(element);
  newElement.setAttribute("class", css);
  newElement.innerHTML = text;

  return newElement;
};
