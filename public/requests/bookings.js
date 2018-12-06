export const newBooking = async (user, id) => {
  const body = {
    objName: "siva.business.Booking",
    metName: "checkBooked",
    params: [user, id],
    typeParams: ["string", "string"]
  };

  const data = await ccc.sendRequest(body);
  console.log(data);
  return data;
};
