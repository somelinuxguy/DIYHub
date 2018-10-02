import url from '../globalVars';

let postAuth = (data, callback, dispatch) => {
    let myStorage = window.localStorage;
    console.log(data);
    console.log(callback);
    return fetch(url + '/authenticate', {
        method: "POST",
        headers: {
            "Content-Type": "application/json; charset=utf-8",     
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(response => {
        console.log(response)
        if (response.token) {
            myStorage.setItem('token', response.token);
            callback('/');
            return response;
        } else {
            dispatch({
                type: 'SET_TOAST',
                toast: {
                    text: 'Invalid Login.  Please try again',
                    type: 'error'
                }
            });
        }
    })
    .then(response => {
        console.log(response)
        if (response) {
            let token = {token: response.token}
            return fetch(url + "/validate", {
                method: "POST",
                headers: {"Content-Type": "application/json; charset=utf-8",},
                body: JSON.stringify(token)
            })
        }
    }).then(response => response && response.json())
    .then(response => {
        if (response) {
            dispatch({type: "ASSIGN_USER", package: {
                    name: response.name,
                    id: response.id,
                    token: myStorage.token,
                }})
            myStorage.setItem('name', response.name);
            myStorage.setItem('id', response.id);
        }
    })
}

export default postAuth;