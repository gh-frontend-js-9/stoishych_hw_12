/*export function ifValid () {
    let pass = document.getElementById("password").value;
    let email = document.getElementById("email").value;
    let name = document.getElementById("name").value;
    console.log(pass);
    validateName(name);
    validateEmail(email);
    validatePassword(pass,7,40);
}*/

export function validateEmail(uemail) {
    let mailformat = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(uemail.match(mailformat)) {
        return true;
    } else {
        alert("You have entered an invalid email address!");
        return false;
    }
}

export function validatePassword(pass,mx,my) {
    let passLength = pass.length;
    if (passLength == 0 ||passLength >= my || passLength < mx) {
        alert("Password should not be empty / length be between "+mx+" to "+my);
        return false;
    } else
    return true;
}

export function validateName(name) {
    let nameLength = name.length;
    if (nameLength == 0) {
        alert("Name should not be empty");
        return false;
    } else return true;
}

export function validateRepeatPassword(password, repeatPassword) {
    if (password !== repeatPassword) {
        alert("Passwords should be equal, rewrite passwords.");
        return false;
    } else return true;
}