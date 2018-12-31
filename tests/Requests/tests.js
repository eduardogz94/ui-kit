import EgFetch from "../../src/other/EgFetch.js";

const http = new EgFetch();
let testEP = "http://localhost:3000/formdata";

let formdata = new FormData();
formdata.append("blob", new Blob(["Hello World!\n"]), "test");

// http.post(testEP, formdata).then(res => console.log(res));

let json = {
  test1: 1,
  test2: 2
};

// http.post(testEP, json, "application/json").then(res => console.log(res));
//
let options = {
  method: "POST",
  body: formdata
};

// fetch(testEP, options).then(r => r.json().then(r => console.log(r)));
