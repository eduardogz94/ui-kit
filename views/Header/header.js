import EgHeader from "../../src/components/Layout/EgHeader.js";

export const boxappHeader = () => {
  let header = new EgHeader();
  header.id = "boxapp";
  header.nav = "BoxApp";
  header.css = "navbar-inverse bg-primary fixed-top navbar-toggleable ";
  return header;
};
