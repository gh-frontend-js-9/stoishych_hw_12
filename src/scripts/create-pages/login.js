import {createHeader} from "./shared/header";
import {createSidebarNav} from "./shared/sidebarNav";
import {HTMLRender} from "./createPageClass";

export function createLoginPage (headerLogin, mainLogin) {

    /*header*/
    createHeader(headerLogin);
    /*end of header*/

    /*sidebarNav*/
    createSidebarNav(mainLogin);
    /*end of sidebarNav*/

    const main = document.getElementById(mainLogin);
    const loginSection = new HTMLRender({
        tag: "section",
        class: "authorization"
    }).createElement();
    main.appendChild(loginSection);

    const loginWrapper = new HTMLRender({
        tag: "div",
        class: "authorization-wrapper"
    }).createElement();
    loginSection.appendChild(loginWrapper);


    const loginH1 = new HTMLRender({
        tag: "h1",
        class: "authorization__text",
        text: "Sign in"
    }).createElement();
    loginWrapper.appendChild(loginH1);

    const loginNotAMember = new HTMLRender({
        tag: "a",
        href: "signup.html",
        class: "authorization-link",
        text: "Not a member?"
    }).createElement();
    loginWrapper.appendChild(loginNotAMember);

    //creating form

    const loginForm = new HTMLRender({
        tag: "form",
        action: "https://geekhub-frontend-js-9.herokuapp.com/api/users/login",
        method: "post",
        id: "login-form",
        class: "authorization-form"
    }).createElement();
    loginWrapper.appendChild(loginForm);

    const loginEmailGroup = new HTMLRender({
        tag: "div",
        class: "form__group"
    }).createElement();
    loginForm.appendChild(loginEmailGroup);

    const loginEmailInput = new HTMLRender({
        tag: "input",
        type: "email",
        id: "login-email",
        placeholder: "Enter your email",
        class: "form__field"
    }).createElement();
    loginEmailGroup.appendChild(loginEmailInput);

    const loginEmailLabel = new HTMLRender({
        tag: "label",
        for: "login-email",
        class: "form__label",
        text: "Email"
    }).createElement();
    loginEmailGroup.appendChild(loginEmailLabel);

    const loginPasswordGroup = new HTMLRender({
        tag: "div",
        class: "form__group"
    }).createElement();
    loginForm.appendChild(loginPasswordGroup);

    const loginPasswordInput = new HTMLRender({
        tag: "input",
        type: "password",
        id: "login-password",
        placeholder: "Enter your password",
        class: "form__field"
    }).createElement();
    loginPasswordGroup.appendChild(loginPasswordInput);

    const loginPasswordLabel = new HTMLRender({
        tag: "label",
        for: "login-password",
        class: "form__label",
        text: "Password"
    }).createElement();
    loginPasswordGroup.appendChild(loginPasswordLabel);

    const loginSubmit = new HTMLRender({
        tag: "input",
        type: "submit",
        value: "Sign in",
        id: "login-submit",
        class: "form__submit"
    }).createElement();
    loginForm.appendChild(loginSubmit);

    //end of form

    const loginForgotPassword = new HTMLRender ({
        tag: "a",
        href: "reset-pass.html",
        class: "authorization-link",
        text: "Forgot password?"
    }).createElement();
    loginWrapper.appendChild(loginForgotPassword);
}