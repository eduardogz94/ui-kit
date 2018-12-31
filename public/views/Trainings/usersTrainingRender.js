import { boxappUsersTable } from "./trainings.js";
import { getUsers } from "../../requests/trainings.js";
import { appendsCreateCol } from "../../../src/core/sivaFunctions.js";

export const boxappUsersTableComponent = id => {
  let usersTable = boxappUsersTable("All users");

  let component = appendsCreateCol("col-8", usersTable.trainingsTitle);
  component.css = "mt-5 offset-2";

  component.appendElements(usersTable.traningTable);

  let render = () => {
    usersTable.traningTable.createHeadings("Name");

    getUsers(id).then(all => {
      all.forEach(user => {
        usersTable.traningTable.createData(user);
      });
    });
  };

  return { component, render };
};
