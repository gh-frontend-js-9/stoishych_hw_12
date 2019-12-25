export async function signUp(email,password,name) {

    let user =  {
        "email": email,
        "password": password,
        "name": name
    };

    console.log(user);

    let sendData = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    };

    let response = await fetch("http://localhost:3000/api/users/", sendData);

    if (response.status === 200) {
        alert("You created account");
    } else alert ("This account already exists");
}


