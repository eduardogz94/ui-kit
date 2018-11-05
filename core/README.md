# Core

## Documentation and ussage

### CCC

> Receive params component and cofigs to register the desired component into CCC.
```javascript
registerComponent(component, configs) {
    this.components.push({
        component: component,
        id: configs.id,
        secret: configs.secret
    });
}
```


> Receive a String param to add a Script into the head of the document, returns a promise.
```javascript
addScript(url) {
        return new Promise((resolve, reject)
}
```

> Adds the script loader to the head of the document to start the whole client. 
```javascript
initApp() {
    this.addScript("utilities/loader")
}
```

> Receive a String param to add a Script into the head of the document, consuming the promise of the addScript method
```javascript
chargeScript(url) {
    this.addScript(`${url}`).then(response => {
        console.log('Added Script)
    })
}
```

> Returns all the components registered into the ccc. 
```javascript
getComponents() {
    return this.components;
}
```

> Method to do requests to our server, receives a options object and returns the message from the server.
```javascript
sendRequest(options) {
    this.addScript("utilities/fetch").then(response => {       
        fetching(options, 'POST', './Siva', msg => {
            console.log(msg)
        })
}
```
> Adds the log4javascript script into the head of our document.
```javascript
startLogger() {
    this.addScript('utilities/log4javascript')
}
```
