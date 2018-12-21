import { searchUsers } from "./trainings.js";
import { getUsers } from "../../requests/trainings.js";
import { stringToArray } from "../../helpers/parser.js";
import { appendsCreateCol } from "../../../src/js/sivaFunctions.js";

export const boxappUsersTrainingRender = id => {
  let usersTable = searchUsers("All users");

  let users = appendsCreateCol("col-8", usersTable.trainingsTitle);
  usersTable.css = "mt-5 offset-2";

  users.appendMultipleElements(usersTable.traningTable);

  async function AfterDOM() {
    usersTable.traningTable.createHeadings("Name");

    const all = await getUsers(id);
    const list = stringToArray(all.data);
    list.forEach(user => {
      usersTable.traningTable.createData(user);
    });
  }

  return { users, AfterDOM };
};
