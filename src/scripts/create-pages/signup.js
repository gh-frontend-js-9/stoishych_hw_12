import {createHeader} from "./shared/header";
import {createSidebarNav} from "./shared/sidebarNav";
import {HTMLRender} from "./createPageClass";

export function createSignUpPage (headerSignUp, mainSignUp) {
    /*header*/
    createHeader(headerSignUp);
    /*end of header*/

    /*sidebarNav*/
    createSidebarNav(mainSignUp);
    /*end of sidebarNav*/

    const main = document.getElementById(mainSignUp);

    const signUpSection = new HTMLRender({
        tag: "section",
        class: "authorization"
    }).createElement();
    main.appendChild(signUpSection);

    const signUpWrapper = new HTMLRender({
        tag: "div",
        class: "authorization-wrapper"
    }).createElement();
    signUpSection.appendChild(signUpWrapper);

    const signUpH1 = new HTMLRender({
        tag: "h1",
        class: "authorization__text",
        text: "Sign up"
    }).createElement();
    signUpWrapper.appendChild(signUpH1);

    const signUpNotAMember = new HTMLRender({
        tag: "a",
        href: "login.html",
        class: "authorization-link",
        text: "Existing member?"
    }).createElement();
    signUpWrapper.appendChild(signUpNotAMember);

    //creating form

    const signUpForm = new HTMLRender({
        tag: "form",
        action: "https://geekhub-frontend-js-9.herokuapp.com/api/users/",
        method: "post",
        id: "signup-form",
        class: "authorization-form"
    }).createElement();
    signUpWrapper.appendChild(signUpForm);

    //name

    const signUpNameGroup = new HTMLRender({
        tag: "div",
        class: "form__group"
    }).createElement();
    signUpForm.appendChild(signUpNameGroup);

    const signUpNameInput = new HTMLRender ({
        tag: "input",
        type: "text",
        id: "signup-name",
        placeholder: "Enter your name",
        class: "form__field"
    }).createElement();
    signUpNameGroup.appendChild(signUpNameInput);

    const signUpNameLabel = new HTMLRender({
        tag: "label",
        for: "signup-name",
        class: "form__label",
        text: "Name"
    }).createElement();
    signUpNameGroup.appendChild(signUpNameLabel);

    //email
    const signUpEmailGroup = new HTMLRender({
        tag: "div",
        class: "form__group"
    }).createElement();
    signUpForm.appendChild(signUpEmailGroup);

    const signUpEmailInput = new HTMLRender({
        tag: "input",
        type: "email",
        id: "signup-email",
        placeholder: "Enter your email",
        class: "form__field"
    }).createElement();
    signUpEmailGroup.appendChild(signUpEmailInput);

    const signUpEmailLabel = new HTMLRender({
        tag: "label",
        for: "signup-email",
        class: "form__label",
        text: "Email"
    }).createElement();
    signUpEmailGroup.appendChild(signUpEmailLabel);


    //password

    const signUpPasswordGroup = new HTMLRender({
        tag: "div",
        class: "form__group"
    }).createElement();
    signUpForm.appendChild(signUpPasswordGroup);

    const signUpPasswordInput =  new HTMLRender({
        tag: "input",
        type: "password",
        id: "signup-password",
        placeholder: "Enter your password",
        class: "form__field"
    }).createElement();
    signUpPasswordGroup.appendChild(signUpPasswordInput);

    const signUpPasswordLabel = new HTMLRender({
        tag: "label",
        for: "signup-password",
        class: "form__label",
        text: "Password"
    }).createElement();
    signUpPasswordGroup.appendChild(signUpPasswordLabel);

    //repeat password
    const signUpRepPasswordGroup = new HTMLRender({
        tag: "div",
        class: "form__group"
    }).createElement();
    signUpForm.appendChild(signUpRepPasswordGroup);

    const signUpRepPasswordInput = new HTMLRender({
        tag: "input",
        type: "password",
        id: "signup-rep-pass",
        placeholder: "Rewrite your password",
        class: "form__field"
    }).createElement();
    signUpRepPasswordGroup.appendChild(signUpRepPasswordInput);

    const signUpRepPasswordLabel = new HTMLRender ({
        tag: "label",
        for: "signup-rep-pass",
        class: "form__label",
        text: "Rewrite your password"
    }).createElement();
    signUpRepPasswordGroup.appendChild(signUpRepPasswordLabel);

    //submit form

    const signUpSubmit = new HTMLRender({
        tag: "input",
        type: "submit",
        value: "Sign up",
        id: "signup-submit",
        class: "form__submit"
    }).createElement();
    signUpForm.appendChild(signUpSubmit);

    //end of form

}