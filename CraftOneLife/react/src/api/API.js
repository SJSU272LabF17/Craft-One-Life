const api = process.env.REACT_APP_CONTACTS_API_URL || 'http://localhost:3001'

const headers = {
    'Accept': 'application/json'
};

export const doLogin = (payload) => {
    return fetch(`${api}/login`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    }).then(res => res.json())
        .then(res => {
            alert("back in API  : " + JSON.stringify(res));
            return res;
        })
        .catch(error => {
            console.log("This is error");
            return error;
        });
};
export const doSignup = (payload) => {
    return fetch(`${api}/doSignUp`, {
            method: 'POST',
            headers: {
                ...headers,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        }
    ).then(res => res.json())
        .then(res => {
            alert("in api response : "+JSON.stringify(res));
            return res;
        })
        .catch(error => {
            console.log("This is error");
            return error;
        });
};
export const uploadBook = (payload) =>
    fetch(`${api}/files/upload`, {
            method: 'POST',
            body: payload,
            headers: {
                'path': payload.get('path')
            }
        }
    ).then(res => res.json())
        .then(res => {
            debugger
            console.log("My response is ",JSON.stringify(res))
            return res;
        }).catch(error => {
        debugger
        console.log(payload)
        console.log("This is error while file upload ", error.message);
        return error;
    })
export const saveUserProfile = (payload) =>
    fetch(`${api}/saveUserProfile`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    }).then(res => res.json())
        .then(res =>{
            console.log("Response in API ",res)
            return res;
        })
        .catch(error => {
            console.log("This is error in user profile update ",error);
            return error;
        });
