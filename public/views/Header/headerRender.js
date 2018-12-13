import {
  boxappHeader,
  boxappHomeTab,
  boxappSignupTab,
  boxappLoginTab
} from "./header.js";

export const boxappHeaderRender = boxappHeader();

export const boxappHeaderAfterDOM = () => {
  boxappHeaderRender.createCollapse(
    boxappHomeTab(),
    boxappSignupTab(),
    boxappLoginTab()
  );
};
