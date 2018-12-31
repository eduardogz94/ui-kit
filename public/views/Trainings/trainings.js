import {
  createTextElement,
  createTable
} from "../../../src/core/sivaFunctions.js";

export const boxappTrainingsTable = title => {
  let traningTable = createTable("table-hover table-striped", "trainings");

  let trainingsTitle = createTextElement(
    "h1",
    "animated bounceInRight text-primary blanch offset-4 mt-4",
    title
  );

  return { traningTable, trainingsTitle };
};

export const boxappUsersTable = title => {
  let traningTable = createTable("table-hover table-striped", "users");

  let trainingsTitle = createTextElement(
    "h1",
    "animated bounceInRight text-primary blanch offset-4 mt-4",
    title
  );

  return { traningTable, trainingsTitle };
};
