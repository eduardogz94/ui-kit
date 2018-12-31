export let regexp = new RegExp();

export function caps() {
  regexp = /[A-Z]/;
  alert(regexp.test(this.getComponent().value) ? true : false);
  regexp = null;
}

export function integer() {
  regexp = /[^0-9]/;
  alert(regexp.test(this.getComponent().value) ? true : false);
  regexp = null;
}

export function floatTest() {
  regexp = /[0-9]/;
  alert(regexp.test(this.getComponent().value) ? true : false);
  regexp = null;
}

export function lowerCaps() {
  regexp = /[a-z]/;
  alert(regexp.test(this.getComponent().value) ? true : false);
  regexp = null;
}
