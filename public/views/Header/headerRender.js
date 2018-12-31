import {
  boxappHeader,
  boxappHomeTab,
  boxappSignupTab,
  boxappLoginTab
} from "./header.js";

export const boxappHeaderComponent = boxappHeader();

export const boxappHeaderRender = () => {
  boxappHeaderComponent.createCollapse(
    boxappHomeTab(),
    boxappSignupTab(),
    boxappLoginTab()
  );
};
