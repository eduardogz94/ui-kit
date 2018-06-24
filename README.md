# Eg-Components

Sample of customElements components.

## Getting Started

```
git clone https://github.com/eduardogz94/web-component.git
```

## Authors

* **Eduardo Gonzalez** - *Initial work* - [Freelance](https://github.com/eduardogz94)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Hat tip to anyone who's code was used
* Inspiration
* etc

## Documentation and ussage

## HTML CALLS OF OUR COMPONENTS

```
<eg-button></eg-button>

To acess directly to eg-button functions you must go with onClick such as:

	<eg-button onClick="callFromHtml()">
		<button></button>
	</eg-button>

And this wont make our children to have any visible attributes, as you can see.


otherwhise, you can pass functions of different scripts (not the eg-comp functions) from parent to child with "method", we will call the ScriptJS() function in the index.js script

	<eg-button method="ScriptJS()"></eg-button>

this will return:

	<eg-button method="ScriptJS()">
		<button onClick="ScriptJS()"></button>
	</eg-button>

in order to use your form component.

Adding id.
	
	<eg-button id="Test"></eg-button>

This, will return this:

	<eg-button id="Test">
		<button id=Test-button></button>
	</eg-button>

If no id, component will be created as id="no-id"	

Adding innerText.
	
	<eg-button>Name</eg-button>

This, will return this:

	<eg-button>
		<button>Test</button>
	</eg-button>

If no innerText, component will be created with the name of "Button"	


Input works as usual as the HTMLInputelement

	<eg-input></eg-input>

Adding id.

	<eg-input id="Test"></eg-input>	

	This, will return this:

	<eg-input id="Test">
		<input id="Test-input"></input>
	</eg-input>

It works with placeholder too.

<eg-form></eg-form>
```

## Javascript CALLS OF OUR COMPONENTS

```

You can call our components like this:

	const input = new EgInput();
	document.body.appendChild(input)

You can add any kind of attributes like this:
	
	const input = new EgInput();
	input.id = "Test";
	input.placeholder = "Using from JS";
	document.body.appendChild(input)


We pass the functions as String

	const Validate = new EgButton();
	Validate.id = 'JS';
	Validate.innerText = 'Validate Outsider JS';
	Validate.method = 'ScriptJS()'
	document.body.appendChild(Validate);

this method is in our index.js

	ScriptJS = () => {
		alert('validated')
	}

For now we cant do it via addEventListener.	

```