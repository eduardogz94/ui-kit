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