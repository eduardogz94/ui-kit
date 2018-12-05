import EgHeader from '../../../src/components/Layout/EgHeader.js';


/** A function that return the header sample.
 * @function
 * @returns {EgHeader} EgHeader sample.
 */
export const sampleDefaultHeader = () => {
  let header = new EgHeader();
  header.id = 'test';
  header.nav = 'EgHeader';
  header.css = 'navbar-inverse bg-primary fixed-top navbar-toggleable ';
  return header;
};
