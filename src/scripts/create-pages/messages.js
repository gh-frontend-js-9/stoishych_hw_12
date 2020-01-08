import {createHeader} from "./shared/header";
import {createSidebarNav} from "./shared/sidebarNav";
import {createSelect, closeAllSelect} from "./shared/customSelect";

export function createPageMessages (headerMessages, mainMessages) {

    /*header*/
    createHeader(headerMessages);
    /*end of header*/

    /*sidebarNav*/
    createSidebarNav(mainMessages);
    /*end of sidebarNav*/

    /*messages menu*/

    const main = document.getElementById("messages-main");
    const messagesContainer = document.createElement("section");
    messagesContainer.setAttribute("class", "messages-container");
    const messagesMenu = document.createElement("section");
    messagesMenu.setAttribute("class", "messages-menu");
    const messagesLinks = document.createElement("div");
    messagesLinks.setAttribute("class", "messages-links");


    main.appendChild(messagesContainer);
    messagesContainer.appendChild(messagesMenu);
    messagesMenu.appendChild(messagesLinks);

    const messagesMenuLinks = (link, image, value) => {
        const messagesMenuLink = document.createElement("a");
        const messagesMenuImg = document.createElement("img");
        const messagesMenuText = document.createElement("p");

        messagesMenuLink.setAttribute("class", "messages-menu__link");
        messagesMenuLink.setAttribute("href", link);

        messagesMenuImg.setAttribute("class", "messages-menu__img");
        messagesMenuImg.setAttribute("src", image);

        messagesMenuText.setAttribute("class", "messages-menu__text");
        messagesMenuText.innerHTML = value;

        messagesLinks.appendChild(messagesMenuLink);
        messagesMenuLink.appendChild(messagesMenuImg);
        messagesMenuLink.appendChild(messagesMenuText)

    };

    const messagesMenuArrLinks = ["#", "#", "#"];
    const messagesMenuArrImg = ["../assets/images/inbox.png", "../assets/images/telegram.png", "../assets/images/delete.png"];
    const messagesMenuArrValue = ["Inbox", "Sent", "Trash"];

    for (let i = 0; i < messagesMenuArrImg.length; i++) {
       messagesMenuLinks(messagesMenuArrLinks[i], messagesMenuArrImg[i], messagesMenuArrValue[i]);
    }

    const messagesFilter = document.createElement("div");
    messagesFilter.setAttribute("class", "messages-filter");
    messagesMenu.appendChild(messagesFilter);

    const messagesFilterText = document.createElement("p");
    messagesFilterText.setAttribute("class", "messages-filter__text");
    messagesFilterText.innerHTML = "Filter messages:";
    messagesFilter.appendChild(messagesFilterText);

    const customSelect = document.createElement("div");
    customSelect.setAttribute("class", "custom-select");
    messagesFilter.appendChild(customSelect);

    const FilterSelect = document.createElement("select");
    customSelect.appendChild(FilterSelect);


    const createFilterOptions = (value) => {
       const FilterOption = document.createElement("option");
       FilterOption.setAttribute("value", value);
       FilterOption.innerHTML = value;

       FilterSelect.appendChild(FilterOption);
   };

    const filterOptions = ["Select filter", "Date", "Necessary", "Pointed"];
    for (let i = 0; i < filterOptions.length; i++) {
       createFilterOptions(filterOptions[i]);
    }

    createSelect();
    document.addEventListener("click", closeAllSelect);



    const messagesChatWindow = document.createElement("section");
    messagesChatWindow.setAttribute("class", "messages-wrapper");
    messagesContainer.appendChild(messagesChatWindow);

    const messagesUsersContainer = document.createElement("section");
    messagesUsersContainer.setAttribute("class", "messages-users");
    messagesChatWindow.appendChild(messagesUsersContainer);

    const messagesUsersWrapper = document.createElement("div");
    messagesUsersWrapper.setAttribute("class", "messages-users__wrapper custom-scrollbar");

    messagesUsersContainer.appendChild(messagesUsersWrapper);


    const createMessagesUsers = (userObj) => {
        //creating wrapper for user
        const messagesUserWrapper = document.createElement("div");
        messagesUserWrapper.setAttribute("class", "messages-user");
        messagesUsersWrapper.appendChild(messagesUserWrapper);

        //creating wrapper for user avatar, name, time
        const messagesUserWrapperText = document.createElement("div");
        messagesUserWrapperText.setAttribute("class", "messages-user__wrapper");
        messagesUserWrapper.appendChild(messagesUserWrapperText);


        //creating avatar of user in recent messages
        const messagesUserAvatar = document.createElement("img");
        messagesUserAvatar.setAttribute("class", "messages-user__avatar");
        messagesUserAvatar.setAttribute("src", userObj.img);
        messagesUserWrapperText.appendChild(messagesUserAvatar);

        //creating name of user in recent messages
        const messagesUserName = document.createElement("h2");
        messagesUserName.setAttribute("class", "messages-user__name");
        messagesUserName.innerHTML = userObj.name;
        messagesUserWrapperText.appendChild(messagesUserName);

        //creating time of last message
        const messagesUserTime = document.createElement("h3");
        messagesUserTime.setAttribute("class", "messages-user__time");
        messagesUserTime.innerHTML = userObj.time;
        messagesUserWrapperText.appendChild(messagesUserTime);

        //creating text of recent message
        const messagesUserLastText = document.createElement("p");
        messagesUserLastText.setAttribute("class", "messages-user__text");
        messagesUserLastText.innerHTML = userObj.lastText;
        messagesUserWrapper.appendChild(messagesUserLastText);

    };

    let messagesUser = {
        users: [
            {
                img: "../assets/images/users-avatar/photo-1.png",
                name: "Michelle Stewart",
                time: "Today, 5:32 PM",
                lastText: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusm."
            },
            {
                img: "../assets/images/users-avatar/photo-2.png",
                name: "Jolene Slater",
                time: "10 April",
                lastText: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo."
            },
            {
                img: "../assets/images/users-avatar/photo-3.png",
                name: "Lyall Roach",
                time: "8 April",
                lastText: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
            },
            {
                img: "../assets/images/users-avatar/photo-4.png",
                name: "Dominic Lynton",
                time: "2 April",
                lastText: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia."
            },
        ]
    };

    for (let i = 0; i < messagesUser.users.length; i++) {
        createMessagesUsers(messagesUser.users[i]);
    }
    // new conversation button
    const messagesNewConversationDiv = document.createElement("div");
    messagesNewConversationDiv.setAttribute("class", "messages-conversation");
    messagesUsersContainer.appendChild(messagesNewConversationDiv);

    const messagesNewConversation = document.createElement("button");
    messagesNewConversation.setAttribute("class", "messages-conversation__button");
    messagesNewConversation.innerHTML = "New conversation";

    messagesNewConversationDiv.appendChild(messagesNewConversation);

    //chat window
    const messagesWindow = document.createElement("section");
    messagesWindow.setAttribute("class", "messages-chat");
    messagesChatWindow.appendChild(messagesWindow);

    //messages wrapper
    const messagesChat = document.createElement("div");
    messagesChat.setAttribute("class", "messages-chatMessages custom-scrollbar"); // a little bit bad naming, I know but nothing else I can't imagine :D
    messagesWindow.appendChild(messagesChat);

    let messagesSender = {
        messages: [
            {
                avatar: "../assets/images/users-avatar/photo-3.png",
                text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ulla pariatur.",
                time: "4 April 2016, 5:32 PM"
            },
            {
                avatar: "../assets/images/users-avatar/photo-3.png",
                text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ulla pariatur.",
                time: "4 April 2016, 5:32 PM"
            }
        ]
    };

    //messages from sender
    const createSenderMessages = (user) => {
        const senderMessages = document.createElement("div");
        senderMessages.setAttribute("class", "messages-sender");
        messagesChat.appendChild(senderMessages);

        //sender's avatar
        const senderAvatar = document.createElement("img");
        senderAvatar.setAttribute("class", "messages-sender__avatar");
        senderAvatar.setAttribute("src",user.avatar);
        senderMessages.appendChild(senderAvatar);

        //wrapper for text from sender
        const senderTextWrapper = document.createElement("div");
        senderTextWrapper.setAttribute("class", "messages-sender__wrapper");
        senderMessages.appendChild(senderTextWrapper);

        //sender's text
        const senderText = document.createElement("div");
        senderText.setAttribute("class","messages-sender__text");
        senderText.innerHTML = user.text;
        senderTextWrapper.appendChild(senderText);

        //text date
        const senderTime = document.createElement("p");
        senderTime.setAttribute("class", "messages-sender__date");
        senderTime.innerHTML = user.time;
        senderTextWrapper.appendChild(senderTime);

    };



    let messagesReceiver = {
        messages: [
            {
                avatar: "../assets/images/user-1.png",
                text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ulla pariatur.",
                time: "4 April 2016, 5:32 PM"
            },
            {
                avatar: "../assets/images/user-1.png",
                text: "Ut enim ad minim veniam,ex ea commo!",
                time: "4 April 2016, 5:32 PM"
            },
            {
                avatar: "../assets/images/user-1.png",
                text: "Ut enim ad minim",
                time: "4 April 2016, 5:32 PM"
            }
        ]
    };

    const createReceiverMessages = (user) => {
        const receiverMessages = document.createElement("div");
        receiverMessages.setAttribute("class", "messages-receiver");
        messagesChat.appendChild(receiverMessages);


        //wrapper for text from sender
        const receiverTextWrapper = document.createElement("div");
        receiverTextWrapper.setAttribute("class", "messages-receiver__wrapper");
        receiverMessages.appendChild(receiverTextWrapper);

        //sender's text
        const receiverText = document.createElement("div");
        receiverText.setAttribute("class","messages-receiver__text");
        receiverText.innerHTML = user.text;
        receiverTextWrapper.appendChild(receiverText);

        //text date
        const receiverTime = document.createElement("p");
        receiverTime.setAttribute("class", "messages-receiver__date");
        receiverTime.innerHTML = user.time;
        receiverTextWrapper.appendChild(receiverTime);

        //sender's avatar
        const receiverAvatar = document.createElement("img");
        receiverAvatar.setAttribute("class", "messages-receiver__avatar");
        receiverAvatar.setAttribute("src", user.avatar);
        receiverMessages.appendChild(receiverAvatar);

    };

    //change it when api will be ready
    const createMessages = () => {
        createSenderMessages(messagesSender.messages[0]);
        createReceiverMessages(messagesReceiver.messages[0]);
        createSenderMessages(messagesSender.messages[1]);
        createReceiverMessages(messagesReceiver.messages[1]);
        createReceiverMessages(messagesReceiver.messages[2]);
    };

    createMessages();

    //wrapper for input and button
    //input for messages
    const inputMessageWrapper = document.createElement("div");
    inputMessageWrapper.setAttribute("class", "messages-chat__inputwrap");
    messagesWindow.appendChild(inputMessageWrapper);

    const inputMessage = document.createElement("textarea");
    inputMessage.setAttribute("class", "messages-chat__textarea");
    inputMessage.setAttribute("placeholder", "Write a message");
    inputMessageWrapper.appendChild(inputMessage);

    //send button for input
    const inputMessageButton = document.createElement("button");
    inputMessageButton.setAttribute("class", "messages-chat__send");
    inputMessageWrapper.appendChild(inputMessageButton);

    //sender's information

    let senderInformationObj = {
        avatar: "../assets/images/users-avatar/lsize-avatar.png",
        name: "Lyall Roach",
        position: "UX/UI Designer",
        describe: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad",
        email: "lyallroach@gmail.com",
        phone: "+48 500 400 300",
        adress: "65 Lorem St, Warsaw, PL",
        organization: "Symu.co"
    };



    const senderInformation = document.createElement("section");
    senderInformation.setAttribute("class", "messages-senderinfo custom-scrollbar");
    messagesChatWindow.appendChild(senderInformation);

    //avatar
    const senderInfoAvatar = document.createElement("img");
    senderInfoAvatar.setAttribute("class", "messages-senderinfo__avatar");
    senderInfoAvatar.setAttribute("src", senderInformationObj.avatar);
    senderInformation.appendChild(senderInfoAvatar);

    //Name
    const senderInfoName = document.createElement("h2");
    senderInfoName.setAttribute("class", "messages-senderinfo__name");
    senderInfoName.innerHTML = senderInformationObj.name;
    senderInformation.appendChild(senderInfoName);

    //position
    const senderInfoPosition = document.createElement("h3");
    senderInfoPosition.setAttribute("class", "messages-senderinfo__position");
    senderInfoPosition.innerHTML = senderInformationObj.position;
    senderInformation.appendChild(senderInfoPosition);

    //describe of user
    const senderInfoDescribe = document.createElement("p");
    senderInfoDescribe.setAttribute("class", "messages-senderinfo__describe");
    senderInfoDescribe.innerHTML = senderInformationObj.describe;
    senderInformation.appendChild(senderInfoDescribe);

    //email
    const senderInfoEmail = document.createElement("p");
    senderInfoEmail.setAttribute("class", "messages-senderinfo__contact");
    senderInfoEmail.innerHTML = "Email";
    senderInformation.appendChild(senderInfoEmail);

    const senderInfoEmailText = document.createElement("p");
    senderInfoEmailText.setAttribute("class", "messages-senderinfo__contact-text");
    senderInfoEmailText.innerHTML = senderInformationObj.email;
    senderInformation.appendChild(senderInfoEmailText);

    //phone
    const senderInfoPhone = document.createElement("p");
    senderInfoPhone.setAttribute("class", "messages-senderinfo__contact");
    senderInfoPhone.innerHTML = "Phone";
    senderInformation.appendChild(senderInfoPhone);

    const senderInfoPhoneText = document.createElement("p");
    senderInfoPhoneText.setAttribute("class", "messages-senderinfo__contact-text");
    senderInfoPhoneText.innerHTML = senderInformationObj.phone;
    senderInformation.appendChild(senderInfoPhoneText);

    //adress
    const senderInfoAdress = document.createElement("p");
    senderInfoAdress.setAttribute("class", "messages-senderinfo__contact");
    senderInfoAdress.innerHTML = "Adress";
    senderInformation.appendChild(senderInfoAdress);

    const senderInfoAdressText = document.createElement("p");
    senderInfoAdressText.setAttribute("class", "messages-senderinfo__contact-text");
    senderInfoAdressText.innerHTML = senderInformationObj.adress;
    senderInformation.appendChild(senderInfoAdressText);

    //organization
    const senderInfoOrganization = document.createElement("p");
    senderInfoOrganization.setAttribute("class", "messages-senderinfo__contact");
    senderInfoOrganization.innerHTML = "Organization";
    senderInformation.appendChild(senderInfoOrganization);

    const senderInfoOrganizationText = document.createElement("p");
    senderInfoOrganizationText.setAttribute("class", "messages-senderinfo__contact-text");
    senderInfoOrganizationText.innerHTML = senderInformationObj.organization;
    senderInformation.appendChild(senderInfoOrganizationText);




}


