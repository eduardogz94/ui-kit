import EgTable from "../../src/components/EgTable.js";

let traningTable = new EgTable();

export const boxappTrainings = () => {
  traningTable.id = "trainings";

  return traningTable;
};