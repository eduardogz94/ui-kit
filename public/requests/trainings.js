export const getUsers = async id => {
  const body = {
    objName: "siva.business.Training.",
    metName: "checkBooked",
    params: [id],
    typeParams: ["string"]
  };

  // const data = await ccc.sendRequest(body)
  // console.log(data)

  // Esto seria el body pero directo sin esa comparacion
  let users;
  if (id === 1) {
    let module = await import("../helpers/mockupData.js");
    users = module.users1;
  }

  if (id === 2) {
    let module = await import("../helpers/mockupData.js");
    users = module.users2;
  }

  return users;
};
