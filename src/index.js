import './assets/scss/main';
import {login} from './scripts/login';
import {signUp} from './scripts/registration';
import {resetPassword} from "./scripts/reset-pass";
import {validateEmail,validatePassword,validateName,validateRepeatPassword } from "./scripts/validator";
import {createPageMessages} from "./scripts/create-pages/messages";
import {createLoginPage} from "./scripts/create-pages/login";
import {createSignUpPage} from "./scripts/create-pages/signup";
import {createResetPage} from "./scripts/create-pages/reset-pass";
import {setAuthToken} from "./scripts/create-pages/shared/header";

async function ifLogined() {
    let response = await fetch('http://localhost:3000/api/users/current', {
        headers: {
            "x-access-token": localStorage.token
        }
    });

    /*if (response.status === 200) {
        alert("You are signed in now")
    }*/

    console.log(response);
}

window.onload = async function () {
    if(localStorage.token) {
        ifLogined();
    }
};

if (window.location.href.match('messages.html')) {
    createPageMessages("messages-header", "messages-main");
}
/*window.onload = function () {
    createPageMessages("messages-header", "messages-main");
};*/

if (window.location.href.match('login.html')) {
    //creating SignIn page
    createLoginPage("login-header", "login-main");

    //submit for SignIn
    let loginForm = document.getElementById("login-form");
    console.log(loginForm);
    if (loginForm) {
        loginForm.addEventListener("submit", function (submit) {
            submit.preventDefault();
            let email = document.getElementById("login-email").value;
            let password = document.getElementById("login-password").value;
            if(validateEmail(email)) {
                if(validatePassword(password,8,40)) {
                    login(email,password);
                    setAuthToken();
                }
            } else return false;
        });
    }
}

if (window.location.href.match('signup.html')) {
    //creating SignUp page
    createSignUpPage("signup-header", "signup-main");

    //submit of SignUp
    let signUpForm = document.getElementById("signup-form");
    if (signUpForm) {
        signUpForm.addEventListener("submit", function (submit) {
            submit.preventDefault();
            let email = document.getElementById("signup-email").value;
            let name = document.getElementById("signup-name").value;
            let password = document.getElementById("signup-password").value;
            let repeatPass = document.getElementById("signup-rep-pass").value;
            if(validateName(name)) {
                if(validateEmail(email)) {
                    if (validatePassword(password, 8, 40)) {
                        if (validateRepeatPassword(password, repeatPass)){
                            signUp(email,password,name);
                        }
                    } else return false;
                }
            }
        });
    }
}

if (window.location.href.match('reset-pass.html')) {
    //creating SignUp page
    createResetPage("resetpass-header", "resetpass-main");

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
}

async function getDataUser () {
    /*var myHeaders = new Headers();
    myHeaders.append("Authorization", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZTEzMDk1MjQ0ZTI0NTgyYjQ2MDUxN2MiLCJpYXQiOjE1NzgzMDk3MjN9.pTHETno3kAcGiVtMD9RLd7QK4RT_6kIquJuWaHgb65A");

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    fetch("http://localhost:3000/api/threads", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));*/

    fetch("http://localhost:3000/api/users/")
        .then(response => console.log(response.text()));
}

getDataUser();
