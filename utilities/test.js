request = (method, endpoint, cb, params = {}, headers = 'multipart/form-data') => {
    let fetchOptions = {
        method: method,
        body: JSON.stringify(params),
        credentials: 'include',
        headers: {
            'Content-type': headers
        }
    };

    switch (method) {
        case 'GET':
            fetch(endpoint,{
                method: 'GET',
                credentials: 'include',
                headers: {
                    'Content-type': headers
                }
            })
            .then(response => response.json())
            .then(response => cb(response))
            .catch(err => console.log(`Error while making the request: ${err.message}`) )
        break;

        case 'POST':

            fetch(endpoint, fetchOptions)
            .then(response => response.json())
            .then(response => cb(response) )
            .catch(err => console.log(`Error while making the request: ${err.message}`) )
        break;

        case 'DELETE':

            fetch(endpoint, fetchOptions)
            .then(response => response.json())
            .then(response => cb(response) )
            .catch(err => console.log(`Error while making the request: ${err.message}`) )
        break;

        case 'UPDATE':

            fetch(endpoint, fetchOptions)
            .then(response => response.json())
            .then(response => cb(response) )
            .catch(err => console.log(`Error while making the request: ${err.message}`) )
        break;
    }
}