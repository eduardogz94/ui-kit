export function shadowCtx() {

  let shadowRoot = this.attachShadow({
    mode: 'open'
  });

  shadowRoot.appendChild(this.template);

  return shadowRoot
}
