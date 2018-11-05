/* </-------------- START GRID-ROW-COL-FORM-INPUT-BUTTON ----------------/> */

const grid_sign = new EgGrid()

const row_sign = new EgRow()

const col_sign = new EgCol()
col_sign.col = 'col-12'

const title_signup = document.createElement('h1')
title_signup.setAttribute('class', 'offset-4')
title_signup.innerText = 'Signup Form'

const username_sign = new EgInput()
username_sign.col = 'col-6'
username_sign.offset = 'offset-3'
username_sign.env = 'dark'
username_sign.id = 'username_sign'
username_sign.placeholder = 'username_sign from js'

const password_sign = new EgInput()
password_sign.col = 'col-6'
password_sign.offset = 'offset-3'
password_sign.env = 'dark'
password_sign.id = 'password_sign'
password_sign.placeholder = 'password_sign from js'

const password_confirmation_sign = new EgInput()
password_confirmation_sign.col = 'col-6'
password_confirmation_sign.offset = 'offset-3'
password_confirmation_sign.env = 'dark'
password_confirmation_sign.id = 'password_confirmation_sign'
password_confirmation_sign.placeholder = 'password_confirmation_sign from js'

const button_sign = new EgButton()
button_sign.innerText = 'Signup'
button_sign.col = 'col-6'
button_sign.env = 'dark'
button_sign.offset = 'offset-3'
button_sign.method = 'createUser(signup_form)'

const signup_form = new EgForm()
signup_form.col = 'col-6'
signup_form.offset = 'offset-3'
signup_form.env = 'dark'
signup_form.addMultipleObjects(title_signup, username_sign, password_sign, password_confirmation_sign, button_sign)

col_sign.addMultipleObjects(signup_form)
row_sign.appendChild(col_sign)

grid_sign.appendChild(row_sign)
// document.body.appendChild(grid_sign)

/* </----------------- END GRID-ROW-COL-FORM-INPUT-BUTTON --------------------/> */