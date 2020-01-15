export function createHeader (headerId) {
    if (headerId !== null) {
        const header = document.getElementById(headerId);

        let headerLogoLink = document.createElement("a");
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
        headerNotification.setAttribute("class", "header-menu__notification");



        header.appendChild(headerLogoLink);
        headerLogoLink.appendChild(headerLogo);
        header.appendChild(headerDiv);
        headerDiv.appendChild(headerAddNew);
        headerAddNew.appendChild(headerAddNewPlus);
        headerDiv.appendChild(headerSearch);
        headerDiv.appendChild(headerNotification);


        if(localStorage.token) {

            let headerUser = document.createElement("img");
            headerUser.setAttribute("class", "header-menu__user");
            headerUser.setAttribute("src", "../assets/images/users-avatar/photo-1.png");
            headerDiv.appendChild(headerUser);

            let headerUserArrow = document.createElement("span");
            headerUserArrow.setAttribute("class", "header-menu__arrow");
            headerUserArrow.setAttribute("src", "../assets/images/arrowbottom.png");
            headerDiv.appendChild(headerUserArrow);

        } else {

            let headerLogin = document.createElement("a");
            headerLogin.setAttribute("href", "login.html");
            headerLogin.setAttribute("class", "header-menu__login");
            headerLogin.innerHTML = "Sign In";
            headerDiv.appendChild(headerLogin);
        }


        /*if(ifLogined === 200) {
            let headerUser = document.createElement("img");
            headerUser.setAttribute("class", "header-menu__user");
            headerUser.setAttribute("src", "../assets/images/user-1.png");
            headerDiv.appendChild(headerUser);

            let headerUserArrow = document.createElement("span");
            headerUserArrow.setAttribute("class", "header-menu__arrow");
            headerUserArrow.setAttribute("src", "../assets/images/arrowbottom.png");
            headerDiv.appendChild(headerUserArrow);
        } else {

        }*/




    } else console.log ("write valid headerId")
}

export async function setAuthToken() {
    let response = await fetch('http://localhost:3000/api/users/current', {
        headers: {
            "x-access-token": localStorage.token
        }
    });

    return response.status;
}

/*
async function changeHeaderLogin () {
    const headerDiv = document.getElementById("header-menu");
    const headerLogin = document.querySelector(".header-menu__login");
    headerLogin.remove();

    let headerUser = document.createElement("img");
    headerUser.setAttribute("class", "header-menu__user");
    headerUser.setAttribute("src", "../assets/images/user-1.png");
    headerDiv.appendChild(headerUser);

    let headerUserArrow = document.createElement("span");
    headerUserArrow.setAttribute("class", "header-menu__arrow");
    headerUserArrow.setAttribute("src", "../assets/images/arrowbottom.png");
    headerDiv.appendChild(headerUserArrow);
}*/
