/**
 * EgContext Class
 * @extends {HTMLElement}
 */
export default class EgContext {
  /** Constructor for EgContext.
   * @class
   * @constructor
   * @protected
   */
  constructor(ctx) {
    this.context = ctx;
  }

  setContext(ctx) {
    this.context = ctx;
  }

  getContext() {
    return this.context;
  }
}
