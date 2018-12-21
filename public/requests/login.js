export const loginRequest = async values => {
  let params = values;
  let typeParams = [];
  for (var i in values) {
    const type = typeof values[i];
    typeParams.push(type);
  }

  const body = {
    objName: "siva.security.securityManager",
    metName: "authenticate",
    params,
    typeParams
  };

  const data = await ccc.sendRequest(`http://localhost:2000/Siva`, body);
  return data;
};
