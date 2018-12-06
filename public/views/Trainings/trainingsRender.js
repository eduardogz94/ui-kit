import { allTrainings } from "./trainings.js";
import { training1 } from "../../helpers/mockupData.js";
import { getUsers } from "../../requests/trainings.js";

import {
  appendsCreateCol,
  createButton
} from "../../../src/js/sivaFunctions.js";
import { boxappUsersTrainingRender } from "./usersTrainingRender.js";
import { Router } from "../../../routes/public-loader.js";

export const boxAppTraningsRender = () => {
  let view = allTrainings("Trainings Available!");
  let trainings = appendsCreateCol("col-8", view.trainingsTitle);
  trainings.css = "mt-5 offset-2";

  trainings.appendMultipleElements(view.traningTable);

  const AfterDOM = () => {
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

        let usersTrainingComponent = boxappUsersTrainingRender(id + 1);

        let usersTrainingRoute = {
          url: `/Trainings/User/${id + 1}`,
          script: "../public/views/Trainings/usersTrainingRender",
          component: usersTrainingComponent.users,
          lazyDOM: usersTrainingComponent.AfterDOM
        };

        Router.restartSPA();
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

  return { trainings, AfterDOM };
};
