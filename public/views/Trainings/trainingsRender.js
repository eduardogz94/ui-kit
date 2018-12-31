import { boxappTrainingsTable } from "./trainings.js";
import { training1 } from "../../helpers/mockupData.js";
import { getUsers } from "../../requests/trainings.js";
import { boxappUsersTableComponent } from "./usersTrainingRender.js";
import { Router } from "../../../routes/index.js";

import {
  appendsCreateCol,
  createButton
} from "../../../src/core/sivaFunctions.js";


export const boxappTrainingsComponent = () => {

  let view = boxappTrainingsTable("Trainings Available!");
  let component = appendsCreateCol("col-8", view.trainingsTitle);
  component.css = "mt-5 offset-2";

  component.appendElements(view.traningTable);

  let render = () => {
    view.traningTable.createHeadings(
      "Id",
      "Users Allowed",
      "Hour",
      "Book now",
      "Users Reserved"
    );

    //Aqui va el request
    training1.forEach((data, id) => {
      let newBookingButton = createButton(
        "btn-primary btn-sm",
        "New Booking",
        "booking"
      );

      let getUsersButton = createButton(
        "btn-primary btn-sm",
        "Check Users",
        "booking"
      );

      getUsersButton.onclick = function(ev) {
        getUsers(id + 1);

        let usersTrainingComponent = boxappUsersTableComponent(id + 1);

        let usersTrainingRoute = {
          url: `/Trainings/AllUsers/${id + 1}`,
          script: "../public/views/Trainings/usersTrainingRender",
          component: usersTrainingComponent.usersComponent,
          lazyDOM: usersTrainingComponent.render
        };

        Router.resetView();
        Router.load(usersTrainingRoute);
      };

      view.traningTable.createData(
        id + 1,
        data.quantity,
        data.hour,
        newBookingButton,
        getUsersButton
      );
    });
  };

  return { component, render };
};
