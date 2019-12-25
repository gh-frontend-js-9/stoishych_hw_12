export async function resetPassword(password,confirmationPassword,email) {

    let user = {
        "password": password,
        "confirmationPassword": confirmationPassword,
        "email": email,

    };

    console.log(user);

    let sendData = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    };

    let response = await fetch("http://localhost:3000/api/users/reset_password", sendData);
    console.log(response);
}