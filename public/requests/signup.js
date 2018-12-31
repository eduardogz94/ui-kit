createUser = async form => {
  let params = [];
  let typeParams = [];
  const size = form.getInputs();

  form.getInputValues().forEach(values => {
    if (values.filled === true) {
      params.push(values.value);
      typeParams.push(values.type);
    } else {
      console.error("There are empty inputs.");
    }
  });

  if (size.length === (params.length && typeParams.length)) {
    if (params[2] === params[3]) {
      const body = {
        objName: `siva.security.Concierge`,
        metName: "registerUser",
        params: params,
        typeParams: typeParams
      };

      const data = await ccc.sendRequest(body);
      console.log(data);
    } else {
      console.error("Passwords doesnt match.");
    }
  }
};
