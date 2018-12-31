import { sampleDefaultHeader } from './defaultHeader.js';
import { Router } from '../../../routes/sample-loader.js';

let defaultHeader = sampleDefaultHeader();

export const headersSampleRender = () => {
  return defaultHeader;
};

export const headersSampleAfterDOM = () => {
  let home = document.createElement('a');
  home.innerHTML = 'Home';

  let signup = document.createElement('a');
  signup.innerHTML = 'Signup';

  defaultHeader.createCollapse(home, signup);

  home.onclick = function() {
    Router.restartSPA()
  };
};
