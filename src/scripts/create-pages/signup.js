import {createHeader} from "./shared/header";
import {createSidebarNav} from "./shared/sidebarNav";

export function createSignUpPage (headerSignUp, mainSignUp) {
    /*header*/
    createHeader(headerSignUp);
    /*end of header*/

    /*sidebarNav*/
    createSidebarNav(mainSignUp);
    /*end of sidebarNav*/

    const main = document.getElementById(mainSignUp);
    const signUpSection = document.createElement("section");
    signUpSection.setAttribute("class", "authorization");
    main.appendChild(signUpSection);

    const signUpWrapper = document.createElement("div");
    signUpWrapper.setAttribute("class", "authorization-wrapper");
    signUpSection.appendChild(signUpWrapper);

    const signUpH1 = document.createElement("h1");
    signUpH1.setAttribute("class", "authorization__text");
    signUpH1.innerHTML = "Sign up";
    signUpWrapper.appendChild(signUpH1);

    const signUpNotAMember = document.createElement("a");
    signUpNotAMember.setAttribute("href", "login.html");
    signUpNotAMember.setAttribute("class", "authorization-link");
    signUpNotAMember.innerHTML = "Existing member?";
    signUpWrapper.appendChild(signUpNotAMember);

    //creating form

    const signUpForm = document.createElement("form");
    signUpForm.setAttribute("action", "https://geekhub-frontend-js-9.herokuapp.com/api/users/");
    signUpForm.setAttribute("method", "post");
    signUpForm.setAttribute("id", "signup-form");
    signUpForm.setAttribute("class", "authorization-form");
    signUpWrapper.appendChild(signUpForm);

    //name

    const signUpNameGroup = document.createElement("div");
    signUpNameGroup.setAttribute("class", "form__group");
    signUpForm.appendChild(signUpNameGroup);

    const signUpNameInput = document.createElement("input");
    signUpNameInput.setAttribute("type", "text");
    signUpNameInput.setAttribute("id", "signup-name");
    signUpNameInput.setAttribute("placeholder", "Enter your name");
    signUpNameInput.setAttribute("class", "form__field");
    signUpNameGroup.appendChild(signUpNameInput);

    const signUpNameLabel = document.createElement("label");
    signUpNameLabel.setAttribute("for", "signup-name");
    signUpNameLabel.setAttribute("class", "form__label");
    signUpNameLabel.innerHTML = "Name";
    signUpNameGroup.appendChild(signUpNameLabel);

    //email
    const signUpEmailGroup = document.createElement("div");
    signUpEmailGroup.setAttribute("class", "form__group");
    signUpForm.appendChild(signUpEmailGroup);

    const signUpEmailInput = document.createElement("input");
    signUpEmailInput.setAttribute("type", "email");
    signUpEmailInput.setAttribute("id", "signup-email");
    signUpEmailInput.setAttribute("placeholder", "Enter your email");
    signUpEmailInput.setAttribute("class", "form__field");
    signUpEmailGroup.appendChild(signUpEmailInput);

    const signUpEmailLabel = document.createElement("label");
    signUpEmailLabel.setAttribute("for", "signup-email");
    signUpEmailLabel.setAttribute("class", "form__label");
    signUpEmailLabel.innerHTML = "Email";
    signUpEmailGroup.appendChild(signUpEmailLabel);


    //password

    const signUpPasswordGroup = document.createElement("div");
    signUpPasswordGroup.setAttribute("class", "form__group");
    signUpForm.appendChild(signUpPasswordGroup);

    const signUpPasswordInput = document.createElement("input");
    signUpPasswordInput.setAttribute("type", "password");
    signUpPasswordInput.setAttribute("id", "signup-password");
    signUpPasswordInput.setAttribute("placeholder", "Enter your password");
    signUpPasswordInput.setAttribute("class", "form__field");
    signUpPasswordGroup.appendChild(signUpPasswordInput);

    const signUpPasswordLabel = document.createElement("label");
    signUpPasswordLabel.setAttribute("for", "signup-password");
    signUpPasswordLabel.setAttribute("class", "form__label" );
    signUpPasswordLabel.innerHTML = "Password";
    signUpPasswordGroup.appendChild(signUpPasswordLabel);

    //repeat password

    const signUpRepPasswordGroup = document.createElement("div");
    signUpRepPasswordGroup.setAttribute("class", "form__group");
    signUpForm.appendChild(signUpRepPasswordGroup);

    const signUpRepPasswordInput = document.createElement("input");
    signUpRepPasswordInput.setAttribute("type", "password");
    signUpRepPasswordInput.setAttribute("id", "signup-rep-pass");
    signUpRepPasswordInput.setAttribute("placeholder", "Rewrite your password");
    signUpRepPasswordInput.setAttribute("class", "form__field");
    signUpRepPasswordGroup.appendChild(signUpRepPasswordInput);

    const signUpRepPasswordLabel = document.createElement("label");
    signUpRepPasswordLabel.setAttribute("for", "signup-rep-pass");
    signUpRepPasswordLabel.setAttribute("class", "form__label" );
    signUpRepPasswordLabel.innerHTML = "Rewrite your password";
    signUpRepPasswordGroup.appendChild(signUpRepPasswordLabel);

    //submit form

    const signUpSubmit = document.createElement("input");
    signUpSubmit.setAttribute("type", "submit");
    signUpSubmit.setAttribute("value", "Sign up");
    signUpSubmit.setAttribute("id", "signup-submit");
    signUpSubmit.setAttribute("class", "form__submit");
    signUpForm.appendChild(signUpSubmit);

    //end of form

}