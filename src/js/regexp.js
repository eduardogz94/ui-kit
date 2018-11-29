let regexp = new RegExp();

export function caps() {
  alert(/[A-Z]/.test(this.getComponent().value) ? true : false);
  regexp = null;
}

export function integer() {
  alert(/[^0-9]/.test(this.getComponent().value) ? true : false);
  regexp = null;
}

export function floatTest() {
  alert(/[0-9]/.test(this.getComponent().value) ? true : false);
  regexp = null;
}

export function lowerCaps() {
  alert(/[a-z]/.test(this.getComponent().value) ? true : false);
  regexp = null;
}
