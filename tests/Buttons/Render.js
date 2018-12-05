import { sampleButtonColors } from './ColorsButtons.js';
import { sampleButtonOutline } from './OutlineColorsButtons.js';
import { sampleButtonSizes } from './SizesButtons.js';
import { sampleButtonStyles } from './StylesButtons.js';

import {
  createTextElement,
  appendsCreateCol
} from '../../src/js/sivaFunctions.js';

let buttonColors = sampleButtonColors();
let buttonOutline = sampleButtonOutline();
let buttonStyles = sampleButtonStyles();
let buttonSizes = sampleButtonSizes();

export const buttonsSampleRender = () => {
  let br = document.createElement('br');
  let buttonsMainCol = appendsCreateCol('col-8', br);
  buttonsMainCol.css = 'offset-2';

  let buttonsTitle = createTextElement(
    'h1',
    'animated bounceInRight text-primary text-center blanch',
    'Buttons'
  );

  let br1 = document.createElement('br');
  let br2 = document.createElement('br');
  buttonsMainCol.appendMultipleElements(
    br1,br2,
    buttonsTitle,
    buttonColors,
    buttonOutline,
    buttonStyles,
    buttonSizes
  );

  return buttonsMainCol;
};
