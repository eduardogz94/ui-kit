export const getUsers = async id => {
  const body = {
    objName: "siva.proxy.Training",
    metName: "checkBooked",
    params: [id],
    typeParams: ["Integer"]
  };

  const users = await ccc.sendRequest(`http://localhost:2000/Siva`, body);
  return users;
};

export const getTrainings = async () => {
  const body = {
    objName: "siva.proxy.Training",
    metName: "all",
    params: [],
    typeParams: []
  };

  const trainings = await ccc.sendRequest(`http://localhost:2000/Siva`, body);
  return trainings;
};
