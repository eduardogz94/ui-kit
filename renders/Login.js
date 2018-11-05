let input1 = document.querySelector("#validation");
input1.querySelector("#validation-input").onchange = changeEventHandler;

function changeEventHandler(event) {
  // You can use “this” to refer to the selected element.
  if (event.target.value === "") {
    input1.setFormControl("form-control-danger");
  } else {
    input1.setFormControl("form-control-success");
  }
}

// http.post("http://192.168.1.101:3000/post", options).then(data => {
//   console.log(data);
// });
