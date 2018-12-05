import EgTable from "../../src/components/EgTable.js";
import { createButton, createTextElement } from "../../src/js/sivaFunctions.js";

export let traningTable = new EgTable();

export const boxappTrainings = () => {
  traningTable.id = "trainings";

  let newBookButton = createButton("btn-primary", "New Booking", "booking");

  let trainingsTitle = createTextElement(
    "h1",
    "animated bounceInRight text-primary blanch offset-3 mt-4",
    "Trainings Available!"
  );

  return { newBookButton, trainingsTitle };
};
