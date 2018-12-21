export const stringToArrayJson = string => {
  let newArr = string.split(", ");
  let jsonArr = [];
  newArr.forEach(json => {
    if (json[0] === "[") {
      json = json.substr(1);
    } else if (json[json.length - 1] === "]") {
      json = json.slice(0, -1);
    }
    jsonArr.push(JSON.parse(json));
  });
  return jsonArr;
};

export const stringToArray = string => {
  let newArr = string.split(", ");
  let list = [];
  newArr.forEach(element => {
    if (element[0] === "[") {
      element = element.substr(1);
    } else if (element[element.length - 1] === "]") {
      element = element.slice(0, -1);
    }
    list.push(element);
  });
  return list;
};
