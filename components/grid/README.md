## Global Methods for Grid, Row, Col.

> Receive a string and return all the desired objects inside our component.
```javascript
getObjects(obj) {}
```

> Appends and creates single object (element) to our form component.
```javascript
addSingleObject(element) {}

const grid = new EgGrid()
grid.addSingleObject('h1')
```
> Appends N numbers of objects (elements) to our form component. 
```javascript
addMultipleObjects(...elements) {}

const grid = new EgGrid()
const row = new EgRow()
const col = new EgCol()
grid.addMultipleObjects(input,button)
```

> Create via string and int values pair elements to append our form component.
```javascript
createMultipleObjects(element,quantity){}

const grid = new Grid()
grid.createMultipleObjects('h1', 3)
grid.createMultipleObjects('eg-input', 2)
```

### eg-col
> Set default properties of the element inside our component.
```javascript
defaultProperties() {}
```
> Setters of the div inside our component.
```javascript
setCol(){}
```