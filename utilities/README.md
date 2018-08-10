# Utilities 

## Documentation and ussage

### Loader

> Consumes addScripts promise, receiving a string as url of the scripts to add.
```
ccc.addScript('Components/renders/login')
ccc.addScript('Components/renders/signup')
ccc.addScript('Components/renders/themes')

```

### Fetch

> Component that sends requests to the server
```
    Params:
        data, options to be send to the server
        method, method to execute from fetch 
        url, endpoint to be call
        cb, a callback to manipulate data
    
fetching = (data, method, url, cb) => {}
```