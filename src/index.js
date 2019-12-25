import {login} from './scripts/login';
import {signUp} from './scripts/registration';
import {resetPassword} from "./scripts/reset-pass";
import {validateEmail,validatePassword,validateName,validateRepeatPassword } from "./scripts/validator";

let signUpForm = document.getElementById("signup-form");
if (signUpForm) {
    signUpForm.addEventListener("submit", function (submit) {
        submit.preventDefault();
        let email = document.getElementById("signup-email").value;
        let name = document.getElementById("signup-name").value;
        let password = document.getElementById("signup-password").value;
        let repeatPass = document.getElementById("signup-rep-pass").value;
        if(validateEmail(email)) {
            if(validatePassword(password, 8, 40)) {
                if (validateName(name)) {
                    if (validateRepeatPassword(password, repeatPass)){
                        signUp(email,password,name);
                    }
                } else return false;
            }
        }
    });
}

let loginForm = document.getElementById("login-form");
if (loginForm) {
    loginForm.addEventListener("submit", function (submit) {
        submit.preventDefault();
        let email = document.getElementById("login-email").value;
        let password = document.getElementById("login-password").value;
        if(validateEmail(email)) {
            if(validatePassword(password,8,40)) {
                login(email,password);
            }
        } else return false;
    });
}

let resetForm = document.getElementById("reset-form");
if (resetForm) {
    resetForm.addEventListener("submit", function (submit) {
        submit.preventDefault();
        let email = document.getElementById("reset-email").value;
        let password = document.getElementById("reset-password").value;
        let repeatPassword = document.getElementById("reset-rep-pass").value;
        if(validateEmail(email)) {
            if(validatePassword(password,8,40)) {
                if(validateRepeatPassword(password, repeatPassword)){
                    resetPassword(password,repeatPassword,email);
                }
            }
        } else return false;
    });
}

async function ifLogined() {
    let response = await fetch('http://localhost:3000/api/users/current', {
        headers: {
            "x-access-token": localStorage.token
        }
    });

    if (response.status === 200) {
        alert("You are signed in now")
    }

    console.log(response);
}

window.onload = async function () {
    if(localStorage.token) {
        ifLogined();
    }
}