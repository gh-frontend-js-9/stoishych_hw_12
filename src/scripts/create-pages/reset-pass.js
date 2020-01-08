import {createHeader} from "./shared/header";
import {createSidebarNav} from "./shared/sidebarNav";

export function createResetPage (resetHeader, resetMain) {

    /*header*/
    createHeader(resetHeader);
    /*end of header*/

    /*sidebarNav*/
    createSidebarNav(resetMain);
    /*end of sidebarNav*/

    const main = document.getElementById(resetMain);
    const resetSection = document.createElement("section");
    resetSection.setAttribute("class", "authorization");
    main.appendChild(resetSection);

    const resetWrapper = document.createElement("div");
    resetWrapper.setAttribute("class", "authorization-wrapper");
    resetSection.appendChild(resetWrapper);

    const resetH1 = document.createElement("h1");
    resetH1.setAttribute("class", "authorization__text");
    resetH1.innerHTML = "Reset password";
    resetWrapper.appendChild(resetH1);

    const resetNotAMember = document.createElement("a");
    resetNotAMember.setAttribute("href", "login.html");
    resetNotAMember.setAttribute("class", "authorization-link");
    resetNotAMember.innerHTML = "Sign in";
    resetWrapper.appendChild(resetNotAMember);

    //creating form

    const resetForm = document.createElement("form");
    resetForm.setAttribute("action", "http://localhost:3000/api/users/reset_password");
    resetForm.setAttribute("method", "post");
    resetForm.setAttribute("id", "reset-form");
    resetForm.setAttribute("class", "authorization-form");
    resetWrapper.appendChild(resetForm);

    //email
    const resetEmailGroup = document.createElement("div");
    resetEmailGroup.setAttribute("class", "form__group");
    resetForm.appendChild(resetEmailGroup);

    const resetEmailInput = document.createElement("input");
    resetEmailInput.setAttribute("type", "email");
    resetEmailInput.setAttribute("id", "reset-email");
    resetEmailInput.setAttribute("placeholder", "Enter your email");
    resetEmailInput.setAttribute("class", "form__field");
    resetEmailGroup.appendChild(resetEmailInput);

    const resetEmailLabel = document.createElement("label");
    resetEmailLabel.setAttribute("for", "reset-email");
    resetEmailLabel.setAttribute("class", "form__label");
    resetEmailLabel.innerHTML = "Email";
    resetEmailGroup.appendChild(resetEmailLabel);


    //password

    const resetPasswordGroup = document.createElement("div");
    resetPasswordGroup.setAttribute("class", "form__group");
    resetForm.appendChild(resetPasswordGroup);

    const resetPasswordInput = document.createElement("input");
    resetPasswordInput.setAttribute("type", "password");
    resetPasswordInput.setAttribute("id", "reset-password");
    resetPasswordInput.setAttribute("placeholder", "Enter your password");
    resetPasswordInput.setAttribute("class", "form__field");
    resetPasswordGroup.appendChild(resetPasswordInput);

    const resetPasswordLabel = document.createElement("label");
    resetPasswordLabel.setAttribute("for", "reset-password");
    resetPasswordLabel.setAttribute("class", "form__label" );
    resetPasswordLabel.innerHTML = "Password";
    resetPasswordGroup.appendChild(resetPasswordLabel);

    //repeat password

    const resetRepeatPasswordGroup = document.createElement("div");
    resetRepeatPasswordGroup.setAttribute("class", "form__group");
    resetForm.appendChild(resetRepeatPasswordGroup);

    const resetRepeatPasswordInput = document.createElement("input");
    resetRepeatPasswordInput.setAttribute("type", "password");
    resetRepeatPasswordInput.setAttribute("id", "reset-rep-pass");
    resetRepeatPasswordInput.setAttribute("placeholder", "Enter your password");
    resetRepeatPasswordInput.setAttribute("class", "form__field");
    resetRepeatPasswordGroup.appendChild(resetRepeatPasswordInput);

    const resetRepeatPasswordLabel = document.createElement("label");
    resetRepeatPasswordLabel.setAttribute("for", "reset-rep-pass");
    resetRepeatPasswordLabel.setAttribute("class", "form__label" );
    resetRepeatPasswordLabel.innerHTML = "Repeat password";
    resetRepeatPasswordGroup.appendChild(resetRepeatPasswordLabel);

    //submit
    const resetSubmit = document.createElement("input");
    resetSubmit.setAttribute("type", "submit");
    resetSubmit.setAttribute("value", "Reset");
    resetSubmit.setAttribute("id", "reset-submit");
    resetSubmit.setAttribute("class", "form__submit");
    resetForm.appendChild(resetSubmit);
}