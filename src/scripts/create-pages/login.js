import {createHeader} from "./shared/header";
import {createSidebarNav} from "./shared/sidebarNav";

export function createLoginPage (headerLogin, mainLogin) {

    /*header*/
    createHeader(headerLogin);
    /*end of header*/

    /*sidebarNav*/
    createSidebarNav(mainLogin);
    /*end of sidebarNav*/

    const main = document.getElementById(mainLogin);
    const loginSection = document.createElement("section");
    loginSection.setAttribute("class", "authorization");
    main.appendChild(loginSection);

    const loginWrapper = document.createElement("div");
    loginWrapper.setAttribute("class", "authorization-wrapper");
    loginSection.appendChild(loginWrapper);

    const loginH1 = document.createElement("h1");
    loginH1.setAttribute("class", "authorization__text");
    loginH1.innerHTML = "Sign in";
    loginWrapper.appendChild(loginH1);

    const loginNotAMember = document.createElement("a");
    loginNotAMember.setAttribute("href", "signup.html");
    loginNotAMember.setAttribute("class", "authorization-link");
    loginNotAMember.innerHTML = "Not a member?";
    loginWrapper.appendChild(loginNotAMember);

    //creating form

    const loginForm = document.createElement("form");
    loginForm.setAttribute("action", "https://geekhub-frontend-js-9.herokuapp.com/api/users/login");
    loginForm.setAttribute("method", "post");
    loginForm.setAttribute("id", "login-form");
    loginForm.setAttribute("class", "authorization-form");
    loginWrapper.appendChild(loginForm);

    const loginEmailGroup = document.createElement("div");
    loginEmailGroup.setAttribute("class", "form__group");
    loginForm.appendChild(loginEmailGroup);

    const loginEmailInput = document.createElement("input");
    loginEmailInput.setAttribute("type", "email");
    loginEmailInput.setAttribute("id", "login-email");
    loginEmailInput.setAttribute("placeholder", "Enter your email");
    loginEmailInput.setAttribute("class", "form__field");
    loginEmailGroup.appendChild(loginEmailInput);

    const loginEmailLabel = document.createElement("label");
    loginEmailLabel.setAttribute("for", "login-email");
    loginEmailLabel.setAttribute("class", "form__label");
    loginEmailLabel.innerHTML = "Email";
    loginEmailGroup.appendChild(loginEmailLabel);



    /*const breakInputs = document.createElement("br");
    loginForm.appendChild(breakInputs);*/

    const loginPasswordGroup = document.createElement("div");
    loginPasswordGroup.setAttribute("class", "form__group");
    loginForm.appendChild(loginPasswordGroup);

    const loginPasswordInput = document.createElement("input");
    loginPasswordInput.setAttribute("type", "password");
    loginPasswordInput.setAttribute("id", "login-password");
    loginPasswordInput.setAttribute("placeholder", "Enter your password");
    loginPasswordInput.setAttribute("class", "form__field");
    loginPasswordGroup.appendChild(loginPasswordInput);

    const loginPasswordLabel = document.createElement("label");
    loginPasswordLabel.setAttribute("for", "login-password");
    loginPasswordLabel.setAttribute("class", "form__label" );
    loginPasswordLabel.innerHTML = "Password";
    loginPasswordGroup.appendChild(loginPasswordLabel);



    const loginSubmit = document.createElement("input");
    loginSubmit.setAttribute("type", "submit");
    loginSubmit.setAttribute("value", "Sign in");
    loginSubmit.setAttribute("id", "login-submit");
    loginSubmit.setAttribute("class", "form__submit");
    loginForm.appendChild(loginSubmit);

    //end of form

    const loginForgotPassword = document.createElement("a");
    loginForgotPassword.setAttribute("href", "reset-pass.html");
    loginForgotPassword.setAttribute("class", "authorization-link");
    loginForgotPassword.innerHTML = "Forgot password?";
    loginWrapper.appendChild(loginForgotPassword);


}