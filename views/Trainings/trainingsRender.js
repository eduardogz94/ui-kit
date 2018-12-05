import {
  boxappTrainings
} from "./trainings.js";

let trainingsTable = boxappTrainings();

export const boxAppTraningsRender = () => {
  return trainingsTable;
};

export const boxAppTrainingsAfterDOM = () => {
    trainingsTable.createHeadings("Firstname", "Lastname", "Email");
    trainingsTable.createData("John", "Doe", "john@example.com");
    trainingsTable.createData("hello", "test", "john@example.com");
    trainingsTable.createData("asd", "dsa", "john@example.com");
}