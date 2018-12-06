import {
  createTextElement,
  createTable
} from "../../../src/js/sivaFunctions.js";

export const allTrainings = title => {
  let traningTable = createTable("table-hover table-striped", "trainings");

  let trainingsTitle = createTextElement(
    "h1",
    "animated bounceInRight text-primary blanch offset-4 mt-4",
    title
  );

  return { traningTable, trainingsTitle };
};

export const searchUsers = title => {
  let traningTable = createTable("table-hover table-striped", "users");

  let trainingsTitle = createTextElement(
    "h1",
    "animated bounceInRight text-primary blanch offset-4 mt-4",
    title
  );

  return { traningTable, trainingsTitle };
};
