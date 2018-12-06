export const loginRequest = async form => {
  let params = [];
  let typeParams = [];

  const body = {
    objName: `${securityManager}`,
    metName: "authenticate",
    params: params,
    typeParams: typeParams
  };

  const data = await ccc.sendRequest(body);
  console.log(data);
};
