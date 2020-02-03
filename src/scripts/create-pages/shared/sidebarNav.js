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
        class: "sidebar-nav",
        id: "sidebar-nav"
    }).createElement();
    sidebar.appendChild(sidebarNav);

    const createLinks = (link, image, id) => {
        const sidebarLink = new HTMLRender({
            tag: "a",
            href: link,
            class: "sidebar-nav__link"
        }).createElement();

        const sidebarLinkImage = new HTMLRender({
            tag: "img",
            src: image,
            class: "sidebar-nav__link-img",
            id: id
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

    const sidebarLinks = ["#", "#", "report.html", "messages.html", "#"];
    const sidebarImages = ["../assets/images/sidebar/home.png", "../assets/images/sidebar/menu.png", "../assets/images/sidebar/trending-up.png", "../assets/images/sidebar/messages.png", "../assets/images/sidebar/account-multiple.png"];
    const sidebarId = ["sidebar-home", "sidebar-menu", "sidebar-report", "sidebar-messages", "sidebar-multiple"];

    for (let i = 0; i < sidebarImages.length; i++ ) {
        createLinks(sidebarLinks[i], sidebarImages[i], sidebarId[i]);
    }

}

