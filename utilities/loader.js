addScript("Components/eg-input").then(response => {

    // const username = new SivaInput();
    // username.id = "user";
    // username.innerText = 'Username';
    // username.placeholder = "Placing from JS"

    // const password = new SivaInput();
    // password.id = "password";
    // password.innerText = 'Password';
    // password.placeholder = "Password JS"

    // document.body.appendChild(username);
    // document.body.appendChild(password);

    console.log('Added Input Components')
    console.log(ccc.getComponents())

}).catch(err => {
    console.log(err)
})

addScript("Components/eg-button").then(response => {

	// const BOTest = new SivaButton();
	// BOTest.id = 'BOTest';
	// BOTest.innerText = 'Siva Validate';
	// BOTest.method = 'BO_Test'

	// const BOCheck = new SivaButton();
	// BOCheck.id = 'BOCheck';
	// BOCheck.innerText = 'Siva Check';
	// BOCheck.method = 'BO_Check'

	// const BODate = new SivaButton();
	// BODate.id = 'BODate';
	// BODate.innerText = 'Siva Date';
	// BODate.method = 'BO_Date'


	// document.body.appendChild(BOTest);
	// document.body.appendChild(BOCheck);
	// document.body.appendChild(BODate);

	console.log('Added Buttons Components')
	console.log(ccc.getComponents())

}).catch(err => {
	console.log(err)
})