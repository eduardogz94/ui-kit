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
  let module = await import("../helpers/mockupData.js");
  if (id === 1) {
    users = module.users1;
  }

  if (id === 2) {
    users = module.users2;
  }

  if (id === 3) {
    users = module.users3;
  }

  if (id === 4) {
    users = module.users4;
  }

  if (id === 5) {
    users = module.users5;
  }

  if (id === 6) {
    users = module.users6;
  }

  if (id === 7) {
    users = module.users7;
  }

  if (id === 8) {
    users = module.users8;
  }

  if (id === 9) {
    users = module.users9;
  }

  if (id === 10) {
    users = module.users10;
  }

  return users;
};
