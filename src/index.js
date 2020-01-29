import './assets/scss/main';
import {login} from './scripts/login';
import {signUp} from './scripts/registration';
import {resetPassword} from "./scripts/reset-pass";
import {validateEmail,validatePassword,validateName,validateRepeatPassword } from "./scripts/validator";
import {
    clearNoMessagesNotification,
    clearThread,
    createPageMessages,
    createThread,
    getAllThreadMessages,
    sendMessage
} from "./scripts/create-pages/messages";
import {createLoginPage} from "./scripts/create-pages/login";
import {createSignUpPage} from "./scripts/create-pages/signup";
import {createResetPage} from "./scripts/create-pages/reset-pass";
import {setAuthToken} from "./scripts/create-pages/shared/header";

/*async function ifLogined() {
    let response = await fetch('https://geekhub-frontend-js-9.herokuapp.com/api/users/', {
        headers: {
            "x-access-token": localStorage.token
        }
    });

    /!*if (response.status === 200) {
        alert("You are signed in now")
    }*!/

    console.log(response);
}

window.onload = async function () {
    if(localStorage.token) {
        ifLogined();
    }
};*/

if (window.location.href.match('messages.html')) {
    createPageMessages("messages-header", "messages-main");

    setTimeout(function () {
        let conversationClick = document.getElementsByClassName("messages-user");
        for (let i = 0; i < conversationClick.length; i++) {
            conversationClick[i].addEventListener("click", function(click) {
                click.preventDefault();
                let current = document.getElementsByClassName("messages-user_active");
                if (current.length > 0) {
                    current[0].className = current[0].className.replace(" messages-user_active", "");
                }
                this.className += " messages-user_active";
                clearThread("messages-chatMessages", "messages-senderinfo");
                clearNoMessagesNotification();
                getAllThreadMessages(conversationClick[i].id);
            });
        }
    }, 500);

    setTimeout(function() {
        let logOut = document.getElementById("header-menu__logout");
        if (logOut) {
            logOut.addEventListener("click", function(click) {
                click.preventDefault();
                localStorage.clear();
                window.location.href = "login.html";
            })
        }
    }, 200);

    setTimeout(function () {
        let sendButton = document.getElementById("messages-chat__send");
        let textArea = document.getElementById("messages-chat__textarea");
        if(sendButton) {
            sendButton.addEventListener("click", function(click) {
                click.preventDefault();
                clearNoMessagesNotification();
                sendMessage();
                textArea.value = "";
            });
            textArea.addEventListener("keypress", function(e) {
               if(e.key === "Enter") {
                   e.preventDefault();
                   sendMessage();
                   textArea.value = "";
               }
            })
        }
    }, 100);

    setTimeout(function () {
        let startThreadBtn = document.getElementById("messages-conversation__button");
        if (startThreadBtn) {
            startThreadBtn.addEventListener("click", function (click) {
                click.preventDefault();
                createThread();
            })
        }
    })
}

if (window.location.href.match('login.html')) {
    //creating SignIn page
    createLoginPage("login-header", "login-main");

    //submit for SignIn
    let loginForm = document.getElementById("login-form");
    if (loginForm) {
        loginForm.addEventListener("submit", function (submit) {
            submit.preventDefault();
            let email = document.getElementById("login-email").value;
            let password = document.getElementById("login-password").value;
            if(validateEmail(email)) {
                if(validatePassword(password,8,40)) {
                    login(email,password);
                    setAuthToken();
                    /*/!*setTimeout(function () {
                        window.location.href = "messages.html";
                    }, *!/200);*/
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
