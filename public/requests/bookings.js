import { session } from "../../container/publicSession.js";

export const newBooking = async id => {
  const body = {
    objName: "siva.proxy.Booking",
    metName: "create",
    params: [id, session.context.user],
    typeParams: ["Integer", "string"]
  };

  const data = await ccc.sendRequest("http://localhost:2000/Siva", body);
  return data;
};
