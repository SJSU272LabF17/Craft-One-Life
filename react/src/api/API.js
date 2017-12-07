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
            //alert("back in API  : " + JSON.stringify(res));
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
            },
            credentials:'include'
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
    fetch(`${api}/saveUserProfile/upload`, {
        method: 'POST',
        headers: {
            'path':'./public/uploads/Profile_pics/'
        },
        credentials:'include',
        body: payload
    }).then(res => res.json())
        .then(res =>{
            console.log("Response in API ",res);
            return res;
        })
        .catch(error => {
            console.log("This is error in user profile update ",error);
            return error;
        });

export const getImages = () =>
    fetch(`${api}/files`)
        .then(res => res.json())
        .catch(error => {
            console.log("This is error.");
            return error;
        });

export const getBookDetails = (payload) =>
    fetch(`${api}/getBookDetails`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        credentials:'include',
        body: JSON.stringify(payload)
    }).then(res => res.json())
        .then(res =>{
            //alert("Response in API "+JSON.stringify(res));
            return res;
        })
        .catch(error => {
            console.log("There is error in getting book details ",error);
            return error;
        });
export const fetchUserProfile = (payload) =>
    fetch(`${api}/getUserProfile`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        credentials:'include',
        body: JSON.stringify(payload)
    }).then(res => res.json())
        .then(res =>{
            return res;
        })
        .catch(error => {
            console.log("This is error");
            return error;
        });




export const addToCart = (payload) => {
    return fetch(`${api}/addToCart`, {
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


export const doLogout = () =>
    fetch(`${api}/logout`, {
        method: 'POST',
        headers: {
            ...headers
        },
        credentials:'include'
    }).then(res => {
        alert("in api response : "+JSON.stringify(res));
        return res.status;
    })
        .catch(error => {
            console.log("This is error");
            return error;
        });

export const getusersforapproval = (payload) =>
    fetch(`${api}/admin/getallusers`, {
        method: 'GET',
        headers: {
            ...headers
        },
        credentials:'include'
    }).then(res => res.json())
        .then(res =>{
            console.log('response from server get users for approval', res);
            return res;
        })
        .catch(error => {
            console.log("This is error in get users for approval API");
            return error;
        });



export const doHandleCartDelete = (payload) =>
    fetch(`${api}/deleteBookQuantity`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        credentials:'include',
        body: JSON.stringify(payload)
    }).then(res => res.json())
        .then(res =>{
            //alert("Response in API useCart"+JSON.stringify(res));
            return res;
        })
        .catch(error => {
            console.log("There is error in getting book details ",error);
            return error;
        });


export const approveuser = (payload) =>
    fetch(`${api}/admin/approveuser`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        credentials:'include',
        body:JSON.stringify(payload)
    }).then(res => {
        alert('response from server approveuser', res.data);
        return res.data;
    })
        .catch(error => {
            console.log("This is error in fileupload API");
            return error;
        });
export const getBooksForApproval = (payload) =>
    fetch(`${api}/admin/getallbooks`, {
        method: 'GET',
        headers: {
            ...headers
        },
        credentials:'include'
    }).then(res => res.json())
        .then(res =>{
            console.log('response from server get books for approval', res);
            return res;
        })
        .catch(error => {
            console.log("This is error in ge books for approval API");
            return error;
        });

export const approveBooks = (payload) =>
    fetch(`${api}/admin/approvebook`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        credentials:'include',
        body:JSON.stringify(payload)
    }).then(res => {
        alert('response from server approvebooks', res.data);
        return res.data;
    })
        .catch(error => {
            console.log("This is error in approve books API");
            return error;
        });


export const getCartDetails = (payload) =>
    fetch(`${api}/userCart`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        credentials:'include',
        body: JSON.stringify(payload)
    }).then(res => res.json())
        .then(res =>{
            //alert("Response in API useCart"+JSON.stringify(res));
            return res;
        })
        .catch(error => {
            console.log("There is error in getting book details ",error);
            return error;
        });



export const doHandleCheckOut = (payload) =>
    fetch(`${api}/proceedCheckout`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        credentials:'include',
        body: JSON.stringify(payload)
    }).then(res => res.json())
        .then(res =>{
            //alert("Response in API useCart"+JSON.stringify(res));
            return res;
        })
        .catch(error => {
            console.log("There is error in getting book details ",error);
            return error;
        });

export const doEmptyCart = (payload) =>
    fetch(`${api}/emptyCheckout`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        credentials:'include',
        body: JSON.stringify(payload)
    }).then(res => res.json())
        .then(res =>{
            alert("Response in API useCart"+JSON.stringify(res));
            return res;
        })
        .catch(error => {
            console.log("There is error in getting book details ",error);
            return error;
        });


export const handleContactUs = (payload) => {
    return fetch(`${api}/handleHomelessSignup`, {
            method: 'POST',
            headers: {
                ...headers,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload),
            credentials:'include'
        }
    ).then(res => res.json())
        .then(res => {
            // alert("in api response : "+JSON.stringify(res));
            return res;
        })
        .catch(error => {
            console.log("This is error");
            return error;
        });
};

export const handleAddQuantity = (payload) =>
    fetch(`${api}/addQty`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        credentials:'include',
        body: JSON.stringify(payload)
    }).then(res => res.json())
        .then(res =>{
            //alert("Response in API useCart"+JSON.stringify(res));
            return res;
        })
        .catch(error => {
            console.log("There is error in getting book details ",error);
            return error;
        });

export const handleRemoveQuantity = (payload) =>
    fetch(`${api}/removeQty`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        credentials:'include',
        body: JSON.stringify(payload)
    }).then(res => res.json())
        .then(res =>{
            //alert("Response in API useCart"+JSON.stringify(res));
            return res;
        })
        .catch(error => {
            console.log("There is error in getting book details ",error);
            return error;
        });