// ccc.addScript("Components/eg-input").then(response => {

//     const username = new EgInput();
//     username.id = "user";
//     username.innerText = 'Username';
//     username.placeholder = "Placing from JS"

//     const password = new EgInput();
//     password.id = "password";
//     password.innerText = 'Password';
//     password.placeholder = "Password JS"

//     document.body.appendChild(username);
//     document.body.appendChild(password);

//     console.log('Added Input Components')
//     console.log(ccc.getComponents())

// }).catch(err => {
//     console.log(err)
// })

// ccc.addScript("Components/eg-button").then(response => {

// 	const Validate = new EgButton();
// 	Validate.id = 'JS';
// 	Validate.innerText = 'Validate Outsider JS';
// 	Validate.method = 'ScriptJS()'
// 	document.body.appendChild(Validate);

// 	// const Test = new EgButton();
// 	// Test.callFromJs()

// 	// document.body.appendChild(Test);
	
// 	// console.log('Added Buttons Components')
// 	// console.log(ccc.getComponents())

// }).catch(err => {
// 	console.log(err)
// })

// addScript("Components/eg-form").then(response => {

// 	const Form = new EgForm()
// 	Form.id = "Log"
// 	Form.method = "Loging(event)"

// 	document.body.appendChild(Form);

// 	Loging = event => {
// 		event.preventDefault()
		
// 		const values = Form.getInputValues();
// 		let username = values[0];
// 		let password = values [1];

// 		const options = {
// 		    username: username,
// 		    password: password,
// 		    objName: `${bobjects}SessionObject`,
// 		    metName: 'Validate',
// 		    params: arr,
// 		    typeParams: typeParams
// 		}

// 		fetching(options, 'POST', './Siva', response => {
// 		    console.log(response)
// 		})
// 	}

// }).catch(err => {
// 	console.log(err)
// })

ccc.addScript("Components/Grid/eg-col").then(response => {
    const Col = new Col()
    Col.col = '1'

    document.body.appendChild(Col)
}).catch(err => {
    console.log(err)
})
