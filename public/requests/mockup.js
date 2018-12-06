BussinessObject_Mockup = async () => {
  let params = [];
  let typeParams = [];

  params.push();
  typeParams.push();

  const body = {
    objName: `YOUR OWN PARAMS!!!`,
    metName: "",
    params: params,
    typeParams: typeParams
  };

  const data = await ccc.sendRequest(body);
  console.log(data);
};
