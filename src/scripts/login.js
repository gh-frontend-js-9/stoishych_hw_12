export async function login(email,password) {

    let user =  {
        "email": email,
        "password": password
    };

    console.log(user);

    let sendData = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    };

    let response = await fetch("https://geekhub-frontend-js-9.herokuapp.com/api/users/login/", sendData);

    console.log(response);
    if (response.status === 200) {
        console.log(response.headers.get('X-Auth-Token'));
        localStorage.setItem('token', response.headers.get('X-Auth-Token'));
        getCurrentUser();
    } else alert ("Login or password is incorrect, try again")
}

async function getCurrentUser () {
    let requestOptions = {
        method: 'GET',
        headers: {
            "x-access-token": localStorage.token
        },
        redirect: 'follow'
    };

    let response = await fetch("https://geekhub-frontend-js-9.herokuapp.com/api/users/", requestOptions);
    let result = await response.json();
    console.log(result._id);
    localStorage.setItem("currentUser", `${result._id}`);

    window.location.href = "messages.html";
}




