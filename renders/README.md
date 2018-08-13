# Eg-components

## Documentation and ussage

## Example for Button, Input, Form.

```javascript
const title_login = document.createElement('h1')
title_login.setAttribute('class', 'offset-4')
title_login.innerText = 'Login Form'

const username_login = new EgInput()
username_login.id = 'username_login'
username_login.placeholder = 'username_login from js'

const button_login = new EgButton()
button_login.innerText = 'Login'
button_login.method = 'A METHOD FROM ANY JS AS STRING'

const login_form = new EgForm()
login_form.addMultipleObjects(title_login, username_login, button_login)

document.body.appendChild(login_form)
```

## Example for Button, Input, Form inside a Col, Row, Grid.
##Setting functions.

```javascript
const grid_login = new EgGrid()

const row_login = new EgRow()

const col_login = new EgCol()
col_login.col = 'col-12'

const title_login = document.createElement('h1')
title_login.setAttribute('class', 'offset-4')
title_login.innerText = 'Login Form'

const username_login = new EgInput()
username_login.id = 'username_login'
username_login.placeholder = 'username_login from js'

const password_login = new EgInput()
password_login.id = 'password_login'
password_login.placeholder = 'password_login from js'

const button_login = new EgButton()
button_login.innerText = 'Login'
button_login.method = 'Authenticate(login_form)'

const login_form = new EgForm()

login_form.addMultipleObjects(title_login, username_login, password_login,button_login)
col_login.appendChild(login_form)
row_login.appendChild(col_login)

grid_login.appendChild(row_login)
document.body.appendChild(grid_login)
```

## Example for Themed Button, Input, Form inside a Col, Row, Grid.
##Setting functions.

```javascript
/* </--------- START THEMES ---------/> */
const start = document.createElement('h1')
start.innerText = 'THEMES '

document.body.appendChild(start)

const SkyButton = new EgButton();
SkyButton.innerText = 'SkyButton'
SkyButton.env = 'sky'

const SkyInput = new EgInput();
SkyInput.env = 'sky'
SkyInput.placeholder = "Sky Input JS"

const SkyForm = new EgForm();
SkyForm.col = 'col-6'
SkyForm.env = 'sky'
SkyForm.addMultipleObjects(SkyInput, SkyButton)
document.body.appendChild(SkyForm)

const DarkButton = new EgButton();
DarkButton.innerText = 'DarkButton'
DarkButton.env = 'dark'

const DarkInput = new EgInput();
DarkInput.env = 'dark'
DarkInput.placeholder = "Dark Input JS"

const DarkForm = new EgForm()
DarkForm.col = 'col-6'
DarkForm.env = 'dark'
DarkForm.addMultipleObjects(DarkInput, DarkButton)
document.body.appendChild(DarkForm)

const JungleButton = new EgButton();
JungleButton.innerText = 'JungleButton'
JungleButton.env = 'jungle'

const JungleInput = new EgInput();
JungleInput.env = 'jungle'
JungleInput.placeholder = "Jungle Input JS"

const JungleForm = new EgForm()
JungleForm.col = 'col-6'
JungleForm.env = 'jungle'
JungleForm.addMultipleObjects(JungleInput, JungleButton)
document.body.appendChild(JungleForm)

const DefaultButton = new EgButton();
DefaultButton.innerText = 'DefaultButton'
DefaultButton.env = 'default'

const DefaultInput = new EgInput();
DefaultInput.env = 'default'
DefaultInput.placeholder = "Default Input JS"

const DefaultForm = new EgForm()
DefaultForm.col = 'col-6'
DefaultForm.env = 'default'

DefaultForm.addMultipleObjects(DefaultInput, DefaultButton)
document.body.appendChild(DefaultForm)

/* </-------------- END THEMES --------------/> */
```