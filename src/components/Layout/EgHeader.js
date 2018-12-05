import {
  getElementObjects,
  createAndAppendElement,
  appendMultipleElements,
  createMultipleElements,
  safeSet,
  safeChildSet,
  safeMultipleSet,
  setBorder,
  setFont,
  setFontStyle,
  setBackground,
  setDimensions,
  setPosition
} from '../../js/bindingFunctions.js';

import {
  observerCallback,
  initIntersectionObserver,
  disconnectObserver
} from '../../observer/index.js';

/**
 * EgHeader Class
 * @extends {HTMLElement}
 */
export default class EgHeader extends HTMLElement {
  /** Creates a EgHeader.
   * @class
   * @constructor
   * @public
   */
  constructor() {
    super();
    this.tabs = [];

    // Bind the observer so it can access the element with `this`.
    this.observerCallback = observerCallback.bind(this);
    this.disconnectObserver = disconnectObserver.bind(this);
    this.initIntersectionObserver = initIntersectionObserver.bind(this);

    // Bind the multiple Siva-functions.
    this.getElementObjects = getElementObjects.bind(this);
    this.createAndAppendElement = createAndAppendElement.bind(this);
    this.appendMultipleElements = appendMultipleElements.bind(this);
    this.createElements = createMultipleElements.bind(this);

    // Bind the component attributes functions.
    this.safeSet = safeSet.bind(this);
    this.safeChildSet = safeChildSet.bind(this);
    this.safeMultipleSet = safeMultipleSet.bind(this);

    // Bind the multiple Siva components style functions.
    this.setBorder = setBorder.bind(this);
    this.setFont = setFont.bind(this);
    this.setFontStyle = setFontStyle.bind(this);
    this.setBackground = setBackground.bind(this);
    this.setDimensions = setDimensions.bind(this);
    this.setPosition = setPosition.bind(this);
  }

  /** A lyfecicle method that calls when the component has finally rendered.
   * @function
   * @protected
   */
  connectedCallback() {
    this.innerHTML = '<nav/>';

    this.setComponent();
    this.defaultProperties();

    ccc.registerComponent(this, {
      id: this.id,
      secret: 'Header Parent'
    });
  }

  /** A lifecycle method that calls when the component has unmounted.
   * @function
   * @protected
   */
  disconnectedCallback() {
    this.disconnectObserver();
  }

  /** A function to get the component inside the EgHeader tag.
   * @function
   * @protected
   */
  getComponent() {
    return this.querySelector('nav');
  }

  /** A function to set the Component properties as they are received from a js instance.
   * @function
   * @protected
   */
  setComponent() {
    // Properties
    if (this.id) this.safeSet('id', this.id);
    if (this.type) this.safeSet('type', this.type);

    // Attributes
    if (this.nav) this.safeSet('nav', this.nav);
    if (this.col) this.safeSet('col', this.col);
    if (this.offset) this.safeSet('offset', this.offset);
    if (this.css) this.safeSet('css', this.css);
  }

  /** Set the default properties for the EgHeader object.
   * @function
   * @protected
   */
  defaultProperties() {
    let classname = '';

    this.getAttributeNames().forEach(key => {
      if (key === 'id')
        return this.safeChildSet(key, `${this.getAttribute(`${key}`)}-header`);

      if (key === 'nav') {
        this.createBrand(this.getAttribute(key));
        return (classname += `navbar `);
      }

      classname += `${this.getAttribute(`${key}`)} `;
    });

    this.getComponent().className = classname;
  }

  createBrand(title) {
    let navBrand = document.createElement('h2');
    navBrand.innerHTML = title;
    navBrand.className = 'navbar-brand mt-3';
    this.getComponent().appendChild(navBrand);
  }

  addExistingTab(tab) {
    let ulColapse = document.querySelector('.navbar-nav');
    ulColapse.appendChild(tab);
    this.tabs.push(tab);
  }

  addNewTab(tab) {
    let ulColapse = document.querySelector('.navbar-nav');
    let li = document.createElement('li');

    tab.className = 'nav-link';
    li.className = 'nav-item';

    li.appendChild(tab);
    ulColapse.appendChild(li);
    this.tabs.push(li);
  }

  resetTabs() {
    let ulColapse = document.querySelector('.navbar-nav');
    this.tabs.forEach(tab => {
      ulColapse.removeChild(tab);
    });
    this.tabs = [];
  }

  createCollapse(...tabs) {
    let navCollapse = document.createElement('div');
    let ulColapse = document.createElement('ul');

    navCollapse.className = 'collapse navbar-collapse';
    ulColapse.className = 'navbar-nav ml-auto row';

    tabs.forEach(tab => {
      let li = document.createElement('li');
      li.className = 'nav-item';
      tab.className = 'nav-link';
      li.appendChild(tab);
      ulColapse.appendChild(li);
      this.tabs.push(li);
    });

    navCollapse.appendChild(ulColapse);
    this.getComponent().appendChild(navCollapse);
  }

  deleteCollapse() {
    let navCollapse = document.createElement('div');
    this.getComponent().appendChild(navCollapse);
  }

  getTabs() {
    return this.tabs;
  }
}

// You must change this 2 consts after generated.
let tagName = 'eg-header';
let registerDOM = () => customElements.define(tagName, EgHeader);

//Async loading.
window.WebComponents
  ? window.WebComponents.waitFor(registerDOM)
  : registerDOM();
