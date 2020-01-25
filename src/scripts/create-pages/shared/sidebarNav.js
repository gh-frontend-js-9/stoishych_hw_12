import {HTMLRender} from "../createPageClass";

export function createSidebarNav (mainId) {
    const main = document.getElementById(mainId);
    /*let sidebar = document.createElement("section");
    sidebar.setAttribute("class", "sidebar");*/
    const sidebar = new HTMLRender({
        tag: "section",
        class: "sidebar"
    }).createElement();
    main.appendChild(sidebar);

    /*const sidebarNav = document.createElement("nav");
    sidebarNav.setAttribute("class", "sidebar-nav");*/
    const sidebarNav = new HTMLRender({
        tag: "nav",
        class: "sidebar-nav"
    }).createElement();
    sidebar.appendChild(sidebarNav);

    const createLinks = (link, image) => {
        const sidebarLink = new HTMLRender({
            tag: "a",
            href: link,
            class: "sidebar-nav__link"
        }).createElement();

        const sidebarLinkImage = new HTMLRender({
            tag: "img",
            src: image,
            class: "sidebar-nav__link-img"
        }).createElement();
        /*const sidebarLink = document.createElement("a");
        const sidebarLinkImage = document.createElement("img");

        sidebarLink.setAttribute("href", link);
        sidebarLink.setAttribute("class", "sidebar-nav__link");

        sidebarLinkImage.setAttribute("src", image);
        sidebarLinkImage.setAttribute("class", "sidebar-nav__link-img");*/

        sidebarNav.appendChild(sidebarLink);
        sidebarLink.appendChild(sidebarLinkImage);

    };

    const sidebarLinks = ["#", "#", "#", "#", "#"];
    const sidebarImages = ["../assets/images/home.png", "../assets/images/menu.png", "../assets/images/trending-up.png", "../assets/images/messages.png", "../assets/images/account-multiple.png"];


    for (let i = 0; i < sidebarImages.length; i++ ) {
        createLinks(sidebarLinks[i], sidebarImages[i]);
    }


}