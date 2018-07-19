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
            console.log("<---- app loaded and started ----->")
        }).catch(err => {
            console.error(err)
        })
    }
    
    getComponents() {
        console.info(this.components)
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
          console.log("<---- fetch loaded and started ----->")
      }).catch(err => {
          console.error(err)
      })
    }

    startLogging() {
        this.addScript('utilities/log4javascript').then(response => {
            console.log("<---- logger loaded and started ----->")
            this.initApp()
        }).catch(err => {
            console.debug(err)
        })
    }

}