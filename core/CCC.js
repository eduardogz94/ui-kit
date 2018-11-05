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

    async initApp()  {
        await this.addScript("utilities/loader")
    }

    async chargeScript(url) {
        await this.addScript(`${url}`)
    }

    getComponents() {
        return this.components;
    }

    async addScript(url) {
        return new Promise((resolve, reject) => {
            let script = document.createElement('script');
            script.async = true;
            script.src = url + '.js';
            script.onload = resolve;
            script.onerror = reject;
            document.head.appendChild(script);
        });
    }

    async sendRequest(options) {
        await this.addScript("utilities/fetch")
        let http = new Http()    
        let response = await http.request('POST', './Siva', options)
        return (response)
    }


    async startLogger() {
        await this.addScript('utilities/log4javascript')
        await this.initApp()
    }

}