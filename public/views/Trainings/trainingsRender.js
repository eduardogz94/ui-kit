import { allTrainings } from "./trainings.js";
import { stringToArrayJson } from "../../helpers/parser.js";
import { getUsers, getTrainings } from "../../requests/trainings.js";
import { boxappUsersTrainingRender } from "./usersTrainingRender.js";
import { Router } from "../../../routes/public-loader.js";

import {
  appendsCreateCol,
  createButton
} from "../../../src/js/sivaFunctions.js";
import { newBooking } from "../../requests/bookings.js";

export const boxAppTraningsRender = () => {
  let view = allTrainings("Trainings Available!");
  let trainings = appendsCreateCol("col-8", view.trainingsTitle);
  trainings.css = "mt-5 offset-2";

  trainings.appendMultipleElements(view.traningTable);

  const AfterDOM = async () => {
    view.traningTable.createHeadings(
      "Id",
      "Users Allowed",
      "Hour",
      "Book now",
      "Users Reserved"
    );

    const train = await getTrainings();
    const list = stringToArrayJson(train.data);
    list.forEach(training => {
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

      newBookingButton.onclick = async function(ev) {
        const create = await newBooking(training.id);
        if (create.status === 200) {
          alert("You have booked!");
        }
      };

      getUsersButton.onclick = function(ev) {
        getUsers(training.id);

        let usersTrainingComponent = boxappUsersTrainingRender(training.id);

        let usersTrainingRoute = {
          url: `/Trainings/User/${training.id}`,
          script: "../public/views/Trainings/usersTrainingRender",
          component: usersTrainingComponent.users,
          lazyDOM: usersTrainingComponent.AfterDOM
        };

        Router.resetView();
        Router.load(usersTrainingRoute);
      };

      view.traningTable.createData(
        training.id,
        training.quantity,
        training.hour,
        newBookingButton,
        getUsersButton
      );
    });
  };

  return { trainings, AfterDOM };
};
