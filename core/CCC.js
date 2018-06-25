class CCC {
    constructor() {
        this.components = [];
    }

    registerComponent(component, configs) {
        this.components.push({
            component: component,
            id: configs.id,
            secret: configs.secret
        });
    }

    initApp() {
        this.addScript("utilities/loader").then(response => {
            console.log("<---- Testings Started ----->")
        }).catch(err => {
            console.log(err)
        })
    }
    
    getComponents() {
        return this.components;
    }

    addScript(url) {
        return new Promise((resolve, reject) => {
            let script = document.createElement('script');
            script.async = true;
            script.src = url + '.js';
            script.onload = resolve;
            script.onerror = reject;
            document.head.appendChild(script);
        });
    }

    handleRequests(){
      this.addScript("utilities/fetch").then(response => {
          console.log("fetch component loaded")
      }).catch(err => {
          console.log(err)
      })
    }

}