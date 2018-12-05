import { boxappTrainings, traningTable } from "./trainings.js";
import { appendsCreateCol } from "../../src/js/sivaFunctions.js";

let view = boxappTrainings();

export const boxAppTraningsRender = () => {
  let trainingsCol = appendsCreateCol("col-6", view.trainingsTitle);
  trainingsCol.css = "mt-5 offset-3";

  trainingsCol.appendMultipleElements(traningTable, view.newBookButton);
  return trainingsCol;
};

export const boxAppTrainingsAfterDOM = () => {
  traningTable.createHeadings("Firstname", "Lastname");
  traningTable.createData("John", "Doe");
  traningTable.createData("hello", "test");
  traningTable.createData("asd", "dsa");
};
