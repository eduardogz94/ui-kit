const ccc = new CCC();

addScript = (url) => {
    return new Promise((resolve, reject) => {
        let script = document.createElement('script');
        script.async = true;
        script.src = url + '.js';
        script.onload = resolve;
        script.onerror = reject;
        document.head.appendChild(script);
    });
}

initApp = () => {
    addScript("utilities/loader").then(response => {
        console.log("<---- Siva-Framework Started ----->")
    }).catch(err => {
        console.log(err)
    })
}

initApp();