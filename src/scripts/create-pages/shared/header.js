import {HTMLRender} from "../createPageClass";

export function createHeader (headerId) {
    if (headerId !== null) {
        const header = document.getElementById(headerId);

        /*let headerLogoLink = document.createElement("a");
        headerLogoLink.setAttribute("href", "messages.html");

        let headerLogo = document.createElement("img");
        headerLogo.setAttribute("src", "../assets/images/logo.png");
        headerLogo.setAttribute("class", "header-logo");

        let headerDiv = document.createElement("div");
        headerDiv.setAttribute("class", "header-menu");
        headerDiv.setAttribute("id", "header-menu");

        let headerAddNew = document.createElement("button");
        headerAddNew.setAttribute("class", "header-menu__add");
        headerAddNew.innerHTML = "Add";

        let headerAddNewPlus = document.createElement("span");
        headerAddNewPlus.setAttribute("class", "header-menu__add-plus");
        headerAddNewPlus.innerHTML = "+";

        let headerSearch = document.createElement("button");
        headerSearch.setAttribute("class", "header-menu__search");

        let headerNotification = document.createElement("button");
        headerNotification.setAttribute("class", "header-menu__notification");*/

        let headerLogoLink = new HTMLRender({
            tag: "a",
            href: "messages.html"
        }).createElement();

        let headerLogo = new HTMLRender({
            tag: "img",
            src: "../assets/images/logo.png",
            class: "header-logo"
        }).createElement();

        let headerDiv = new HTMLRender({
            tag: "div",
            id: "header-menu",
            class: "header-menu"
        }).createElement();

        let headerAddNew = new HTMLRender({
            tag: "button",
            class: "header-menu__add",
            text: "Add"
        }).createElement();

        let headerAddNewPlus = new HTMLRender({
            tag: "span",
            class: "header-menu__add-plus",
            text: "+"
        }).createElement();

        let headerSearch = new HTMLRender({
            tag: "button",
            class: "header-menu__search"
        }).createElement();

        let headerNotification = new HTMLRender({
            tag: "button",
            class: "header-menu__notification"
        }).createElement();





        header.appendChild(headerLogoLink);
        headerLogoLink.appendChild(headerLogo);
        header.appendChild(headerDiv);
        headerDiv.appendChild(headerAddNew);
        headerAddNew.appendChild(headerAddNewPlus);
        headerDiv.appendChild(headerSearch);
        headerDiv.appendChild(headerNotification);


        if(localStorage.token) {

            /*let headerUser = document.createElement("img");
            headerUser.setAttribute("class", "header-menu__user");
            headerUser.setAttribute("src", "../assets/images/users-avatar/photo-1.png");*/

            let headerUser = new HTMLRender({
                tag: "img",
                class: "header-menu__user",
                src: "../assets/images/users-avatar/photo-1.png"
            }).createElement();
            headerDiv.appendChild(headerUser);

            /*let headerUserArrow = document.createElement("span");
            headerUserArrow.setAttribute("class", "header-menu__arrow");
            headerUserArrow.setAttribute("src", "../assets/images/arrowbottom.png");*/

            let headerUserArrow = new HTMLRender({
                tag: "span",
                class: "header-menu__arrow",
                src: "../assets/images/arrowbottom.png"
            }).createElement();
            headerDiv.appendChild(headerUserArrow);

            /*let headerUserLogOut = document.createElement("a");
            headerUserLogOut.setAttribute("id", "header-menu__logout");
            headerUserLogOut.setAttribute("class", "header-menu__login");
            headerUserLogOut.innerHTML = "Log Out";*/
            let headerUserLogOut = new HTMLRender({
                tag: "a",
                id: "header-menu__logout",
                class: "header-menu__login",
                text: "Log Out"
            }).createElement();
            headerDiv.appendChild(headerUserLogOut);


        } else {

            /*let headerLogin = document.createElement("a");
            headerLogin.setAttribute("href", "login.html");
            headerLogin.setAttribute("class", "header-menu__login");
            headerLogin.innerHTML = "Sign In";*/
            let headerLogin = new HTMLRender({
                tag: "a",
                href: "login.html",
                class: "header-menu__login",
                text: "Sign In"
            }).createElement();
            headerDiv.appendChild(headerLogin);
        }

    } else console.log ("write valid headerId")
}

export async function setAuthToken() {
    let response = await fetch('https://geekhub-frontend-js-9.herokuapp.com/api/users/', {
        headers: {
            "x-access-token": localStorage.token
        }
    });

    console.log(response);

    return response.status;
}
