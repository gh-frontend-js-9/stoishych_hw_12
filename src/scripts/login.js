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

    let response = await fetch("http://localhost:3000/api/users/login", sendData);
    console.log(response);
    if (response.status === 200) {
        localStorage.setItem('token', response.headers.get('x-auth-token'));
        alert("You successfully logined");
    } else alert ("Login or password is incorrect, try again")
}




