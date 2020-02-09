import {createHeader} from "./shared/header";
import {createSidebarNav} from "./shared/sidebarNav";
import {HTMLRender} from "./createPageClass";

export function createResetPage (resetHeader, resetMain) {

    /*header*/
    createHeader(resetHeader);
    /*end of header*/

    /*sidebarNav*/
    createSidebarNav(resetMain);
    /*end of sidebarNav*/

    const main = document.getElementById(resetMain);
    const resetSection = new HTMLRender ({
        tag: "section",
        class: "authorization"
    }).createElement();
    main.appendChild(resetSection);

    const resetWrapper = new HTMLRender({
        tag: "div",
        class: "authorization-wrapper"
    }).createElement();
    resetSection.appendChild(resetWrapper);

    const resetH1 = new HTMLRender( {
        tag: "h1",
        class: "authorization__text",
        text: "Reset password"
    }).createElement();
    resetWrapper.appendChild(resetH1);

    const resetNotAMember = new HTMLRender ({
        tag: "a",
        href: "login.html",
        class: "authorization-link",
        text: "Sign in"
    }).createElement();
    resetWrapper.appendChild(resetNotAMember);

    //creating form

    const resetForm = new HTMLRender({
        tag: "form",
        action: "https://geekhub-frontend-js-9.herokuapp.com/api/users/reset_password",
        method: "post",
        id: "reset-form",
        class: "authorization-form",
    }).createElement();
    resetWrapper.appendChild(resetForm);

    //email
    const resetEmailGroup = new HTMLRender({
        tag: "div",
        class: "form__group"
    }).createElement();
    resetForm.appendChild(resetEmailGroup);


    const resetEmailInput = new HTMLRender({
        tag: "input",
        type: "email",
        id: "reset-email",
        placeholder: "Enter your email",
        class: "form__field"
    }).createElement();
    resetEmailGroup.appendChild(resetEmailInput);

    const resetEmailLabel = new HTMLRender ({
        tag: "label",
        for: "reset-email",
        class: "form__label",
        text: "Email"
    }).createElement();
    resetEmailGroup.appendChild(resetEmailLabel);


    //password

    const resetPasswordGroup = new HTMLRender({
        tag: "div",
        class: "form__group"
    }).createElement();
    resetForm.appendChild(resetPasswordGroup);

    const resetPasswordInput = new HTMLRender({
        tag: "input",
        type: "password",
        id: "reset-password",
        placeholder: "Enter your password",
        class: "form__field"
    }).createElement();
    resetPasswordGroup.appendChild(resetPasswordInput);

    const resetPasswordLabel = new HTMLRender({
        tag: "label",
        for: "reset-password",
        class: "form__label",
        text: "Password"
    }).createElement();
    resetPasswordGroup.appendChild(resetPasswordLabel);

    //repeat password

    const resetRepeatPasswordGroup = new HTMLRender({
        tag: "div",
        class: "form__group"
    }).createElement();
    resetForm.appendChild(resetRepeatPasswordGroup);

    const resetRepeatPasswordInput = new HTMLRender({
        tag: "input",
        type: "password",
        id: "reset-rep-pass",
        placeholder:"Enter your password",
        class: "form__field"
    }).createElement();
    resetRepeatPasswordGroup.appendChild(resetRepeatPasswordInput);

    const resetRepeatPasswordLabel = new HTMLRender({
        tag: "label",
        for: "reset-rep-pass",
        class: "form__label",
        text: "Repeat password"
    }).createElement();
    resetRepeatPasswordGroup.appendChild(resetRepeatPasswordLabel);

    //submit
    const resetSubmit = new HTMLRender({
        tag: "input",
        type: "submit",
        value: "Reset",
        id: "reset-submit",
        class: "form__submit"
    }).createElement();
    resetForm.appendChild(resetSubmit);
}