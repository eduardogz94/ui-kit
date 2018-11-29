import EgFetch from "../src/other/EgFetch.js";
import EgCard from "../src/components/EgCard.js";
import {
  createTextElement,
  createCol,
  createButton,
  appendsCreateCol,
  createInput
} from "../src/js/sivaFunctions.js";

let requestCard = new EgCard("card-info");
requestCard.header = "Request Details";
requestCard.footer = "Documentation instead?";

export const requestRender = () => {
  let requestTitle = createTextElement(
    "h1",
    "animated fadeIn text-info text-center",
    "Eg-Request"
  );

  let mainCol = createCol(requestTitle, "col-6");

  let requestCol = createCol(requestCard, "col-12");
  mainCol.appendChild(requestCol);

  return mainCol;
};

export const requestAfterDOM = async () => {
  let container = document.createElement("div");

  let requestInput = createInput(
    "form-control",
    "text",
    "request",
    "col-12",
    "Insert your endpoint"
  );

  requestInput.css = "mb-2";

  let containerCol = appendsCreateCol("col-6", requestInput, container);

  let getButton = createButton("btn-info", "Get button", "post", "col-12");
  let postButton = createButton("btn-info", "post button", "get", "col-12");
  let buttonsCol = appendsCreateCol("col-6", getButton, postButton);

  let routingBody = appendsCreateCol("col-12", containerCol, buttonsCol);
  requestCard.addMultipleObjectsToBody(routingBody);

  let request = new EgFetch();

  let testGet = () => {
    let input = requestInput.getInputValue();
    request.get(input.value).then(data => {
      if (data.status === 200)
        container.innerHTML =
          "status " + data.status + " param:" + data.msg.param;
    });
  };

  getButton.onclick = testGet;

  let testPost = () => {
    console.log(true);
  };

  postButton.onclick = testPost;
};
