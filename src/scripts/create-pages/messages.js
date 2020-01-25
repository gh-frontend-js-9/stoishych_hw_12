import {createHeader} from "./shared/header";
import {createSidebarNav} from "./shared/sidebarNav";
import {createSelect, closeAllSelect} from "./shared/customSelect";
import {HTMLRender} from "./createPageClass";

export function createPageMessages (headerMessages, mainMessages) {

    /*header*/
    createHeader(headerMessages);
    /*end of header*/

    /*sidebarNav*/
    createSidebarNav(mainMessages);
    /*end of sidebarNav*/

    /*messages menu*/

    const main = document.getElementById("messages-main");

    const messagesContainer = new HTMLRender({
        tag: "section",
        class: "messages-container"
    }).createElement();
    main.appendChild(messagesContainer);

    const messagesMenu = new HTMLRender({
        tag: "section",
        class: "messages-menu"
    }).createElement();
    messagesContainer.appendChild(messagesMenu);

    const messagesLinks = new HTMLRender({
        tag: "div",
        class: "messages-links"
    }).createElement();
    messagesMenu.appendChild(messagesLinks);

    const messagesMenuLinks = (link, image, value) => {

        const messagesMenuLink = new HTMLRender({
            tag: "a",
            class: "messages-menu__link",
            href: link
        }).createElement();

        const messagesMenuImg = new HTMLRender({
            tag: "img",
            class: "messages-menu__img",
            src: image
        }).createElement();

        const messagesMenuText = new HTMLRender({
            tag: "p",
            class: "messages-menu__text",
            text: value
        }).createElement();

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

    const messagesFilter = new HTMLRender({
        tag: "div",
        class: "messages-filter"
    }).createElement();
    messagesMenu.appendChild(messagesFilter);

    const messagesFilterText = new HTMLRender({
        tag: "p",
        class: "messages-filter__text",
        text: "Filter messages:"
    }).createElement();
    messagesFilter.appendChild(messagesFilterText);

    const customSelect = new HTMLRender({
        tag: "div",
        class: "custom-select"
    }).createElement();
    messagesFilter.appendChild(customSelect);

    const filterSelect = new HTMLRender({tag: "select"}).createElement();
    customSelect.appendChild(filterSelect);


    const createFilterOptions = (value) => {
       const filterOption = new HTMLRender({
           tag: "option",
           value: value,
           text: value
       }).createElement();

       filterSelect.appendChild(filterOption);
   };

    const filterOptions = ["Select filter", "Date", "Necessary", "Pointed"];
    for (let i = 0; i < filterOptions.length; i++) {
       createFilterOptions(filterOptions[i]);
    }

    createSelect();
    document.addEventListener("click", closeAllSelect);

    const messagesChatWindow = new HTMLRender({
        tag: "section",
        class: "messages-wrapper",
        id: "messages-wrapper"
    }).createElement();
    messagesContainer.appendChild(messagesChatWindow);

    const messagesUsersContainer = new HTMLRender({
        tag: "section",
        class: "messages-users"
    }).createElement();
    messagesChatWindow.appendChild(messagesUsersContainer);

    const messagesUsersWrapper = new HTMLRender({
        tag: "div",
        class:  "messages-users__wrapper custom-scrollbar"
    }).createElement();

    messagesUsersContainer.appendChild(messagesUsersWrapper);



    const createMessagesUsers = (name, date, message, uniqueId) => {

        //creating wrapper for user
        const messagesUserWrapper = new HTMLRender({
            tag: "div",
            class: "messages-user",
            id: uniqueId
        }).createElement();
        messagesUsersWrapper.appendChild(messagesUserWrapper);

        //creating wrapper for user avatar, name, time
        const messagesUserWrapperText = new HTMLRender({
            tag: "div",
            class: "messages-user__wrapper"
        }).createElement();
        messagesUserWrapper.appendChild(messagesUserWrapperText);


        //creating avatar of user in recent messages
        const messagesUserAvatar = new HTMLRender({
            tag: "img",
            class: "messages-user__avatar",
            src: "../assets/images/users-avatar/photo-3.png"
        }).createElement();
        messagesUserWrapperText.appendChild(messagesUserAvatar);

        //creating name of user in recent messages
        const messagesUserName = new HTMLRender({
            tag: "h2",
            class: "messages-user__name",
            text: name
        }).createElement();
        messagesUserWrapperText.appendChild(messagesUserName);

        //creating time of last message
        const messagesUserTime = new HTMLRender({
            tag: "h3",
            class: "messages-user__time",
            text: date
        }).createElement();
        messagesUserWrapperText.appendChild(messagesUserTime);

        //creating text of recent message
        const messagesUserLastText = new HTMLRender({
            tag: "p",
            class: "messages-user__text",
            text: message
        }).createElement();
        messagesUserWrapper.appendChild(messagesUserLastText);

    };



    async function getAllThreads () {
        let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October',	'November', 'December'];

        let requestOptions = {
            method: 'GET',
            headers: {
                "Authorization": localStorage.token
            },
            redirect: 'follow'
        };

        let response = await fetch("https://geekhub-frontend-js-9.herokuapp.com/api/threads", requestOptions);
        let threads = await response.json();
        console.log(threads);

        //TODO: make class for requests, responsive
        
        let name;
        let message;
        let date, newSplitString, newDate;
        for (let i = threads.length - 1; i >= 0 ; i--) {
            for (let j = threads[i].users.length - 1; j >= 0 ; j--) {

                if (threads[i].users[j]._id !== localStorage.currentUser) {
                    name = threads[i].users[j].name;
                }
                if (threads[i].message !== null) {
                    message = threads[i].message.body;
                } else {
                    message = "";
                }
                date = threads[i].updated_at.slice(0,10);
                newSplitString = new Date(date);
                newDate = newSplitString.getDate() + " " + months[newSplitString.getMonth()];

            }
            let uniqueId = threads[i]._id;
            createMessagesUsers(name, newDate, message, uniqueId);
            localStorage.setItem(`_id${i}`, threads[i]._id);
        }
    }

    setTimeout(getAllThreads, 100);

    // new conversation button
    const messagesNewConversationDiv = new HTMLRender({
        tag: "div",
        class: "messages-conversation"
    }).createElement();
    messagesUsersContainer.appendChild(messagesNewConversationDiv);

    const messagesNewConversation = new HTMLRender({
        tag: "button",
        class: "messages-conversation__button",
        id: "messages-conversation__button",
        text: "New conversation"
    }).createElement();

    messagesNewConversationDiv.appendChild(messagesNewConversation);

    //chat window
    const messagesWindow = new HTMLRender({
        tag: "section",
        class: "messages-chat",
        id: "messages-chat"
    }).createElement();
    messagesChatWindow.appendChild(messagesWindow);

    //messages wrapper
    const messagesChat = new HTMLRender({
        tag: "div",
        class: "messages-chatMessages custom-scrollbar",
        id: "messages-chatMessages"
    }).createElement();
    messagesWindow.appendChild(messagesChat);

    const senderInformation = new HTMLRender({
        tag: "section",
        class: "messages-senderinfo custom-scrollbar",
        id: "messages-senderinfo"
    }).createElement();
    messagesChatWindow.appendChild(senderInformation);



    //wrapper for input and button
    //input for messages
    const inputMessageWrapper = new HTMLRender({
        tag: "div",
        class: "messages-chat__inputwrap"
    }).createElement();
    messagesWindow.appendChild(inputMessageWrapper);

    const inputMessage = new HTMLRender({
        tag: "textarea",
        class: "messages-chat__textarea",
        id: "messages-chat__textarea",
        placeholder: "Write a message"
    }).createElement();
    inputMessageWrapper.appendChild(inputMessage);

    //send button for input
    const inputMessageButton = new HTMLRender({
        tag: "button",
        class: "messages-chat__send",
        id: "messages-chat__send"
    }).createElement();
    inputMessageWrapper.appendChild(inputMessageButton);
}

export async function createThread () {
    let id = prompt("Put user id to start thread");
    let userId = JSON.stringify({"user":{"_id":`${id}`}});

    let requestOptions = {
        method: 'POST',
        headers: {
            'x-access-token': localStorage.token,
            'Content-Type': 'application/json'
        },
        body: userId,
        redirect: 'follow'
    };

    let response = await fetch("https://geekhub-frontend-js-9.herokuapp.com/api/threads", requestOptions);
    let result = await response.json();
    console.log(result);

}

export async function sendMessage () {
    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October',	'November', 'December'];
    let message = document.getElementById("messages-chat__textarea").value;

    let options = {
        "thread": {
            "_id": localStorage._id,
        },
        "message": {
            "body": message
        }
    };

    let time = new Date();
    let newTime = time.getDate() + " " + months[time.getMonth()] + " " + time.getFullYear() + ", " + time.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });

    createReceiverMessages(message, newTime);

    let response = await fetch("https://geekhub-frontend-js-9.herokuapp.com/api/threads/messages", {
        method: 'POST',
        headers: {
            'Authorization': localStorage.token,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(options)
    });
    let result = await response.json();
    console.log(result);

}

export async function getAllThreadMessages (threadId) {
    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October',	'November', 'December'];
    let requestOptions = {
        method: 'GET',
        headers: {
            "Authorization": localStorage.token
        },
        redirect: 'follow'
    };

    let id = threadId;
    localStorage._id = threadId;
    let response = await fetch(`https://geekhub-frontend-js-9.herokuapp.com/api/threads/messages/${id}`, requestOptions);
    let threadMessages = await response.json();


    console.log(threadMessages);
    if (threadMessages.length !== 0) {
        let receiverId, senderId;
        for (let i = 0; i < threadMessages.length; i++) {
            if (threadMessages[i].user._id === localStorage.currentUser) {
                receiverId = localStorage.currentUser;
            } else {
                senderId = threadMessages[i].user._id;
            }
        }

        for (let i = 0; i < threadMessages.length; i++) {
            if (receiverId === threadMessages[i].user._id) {

                let text = threadMessages[i].body;
                let time = threadMessages[i].created_at;
                time = new Date(time);
                let newTime = time.getDate() + " " + months[time.getMonth()] + " " + time.getFullYear() + ", " + time.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });

                createReceiverMessages(text, newTime);
            } if (senderId === threadMessages[i].user._id) {
                let text = threadMessages[i].body;
                let time = threadMessages[i].created_at;

                time = new Date(time);
                let newTime = time.getDate() + " " + months[time.getMonth()] + " " + time.getFullYear() + ", " + time.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });

                createSenderMessages(text, newTime);
            }
        }

        let requestOptions = {
            method: 'GET',
            headers: {
                "x-access-token": localStorage.token
            },
            redirect: 'follow'
        };

        let responseUser = await fetch("https://geekhub-frontend-js-9.herokuapp.com/api/users/all", requestOptions);
        let responseSenderInfo = await responseUser.json();

        let senderInfo = responseSenderInfo.find(item => item._id === senderId);

            if(senderInfo) {
                let name = senderInfo.name;
                let email = senderInfo.email;
                let position = senderInfo.position;
                let description = senderInfo.description;
                let phone = senderInfo.phone;
                let address = senderInfo.address;
                let organization = senderInfo.organization;

                document.getElementById("messages-senderinfo").style.width = 100 + "%";
                createSenderInfo(name, email, position, description, phone, address, organization);
            } else if (!senderId) {
                document.getElementById("messages-senderinfo").style.width = 0 + "%";
            }
        document.querySelector(".messages-chat__inputwrap").style.display = "flex";

    } else {
        createNotificationNoMessagesYet();
        document.querySelector(".messages-chat__inputwrap").style.display = "flex";
    }

}

export function clearNoMessagesNotification () {
    if (document.getElementById("messages-chat__nothing")) {
        const chatWindow = document.getElementById("messages-chat");
        const nothingMessages = document.getElementById("messages-chat__nothing");
        chatWindow.removeChild(nothingMessages);
    }
}

export function clearThread (id) {
    let threadMessages = document.getElementById(id);
    let child = threadMessages.lastElementChild;
    while (child) {
        threadMessages.removeChild(child);
        child = threadMessages.lastElementChild;
    }
}

function createNotificationNoMessagesYet () {
    const chatWindow = document.getElementById("messages-chat");

    const noMessagesYet = new HTMLRender({
        tag: "h2",
        class: "messages-chat__nothing",
        id: "messages-chat__nothing",
        text: "Write message to start conversation"
    }).createElement();
    chatWindow.appendChild(noMessagesYet);
}

function createSenderInfo (name, email, position, description, phone, adress, organization) {
    const senderInformation = document.getElementById("messages-senderinfo");
    //avatar
    const senderInfoAvatar = new HTMLRender({
        tag: "img",
        class: "messages-senderinfo__avatar",
        src: "../assets/images/users-avatar/lsize-avatar.png"
    }).createElement();
    senderInformation.appendChild(senderInfoAvatar);

    //Name
    const senderInfoName = new HTMLRender ({
        tag: "h2",
        class: "messages-senderinfo__name",
        text: name
    }).createElement();

    senderInformation.appendChild(senderInfoName);

    //position
    const senderInfoPosition = new HTMLRender({
        tag: "h3",
        class: "messages-senderinfo__position",
        text: position
    }).createElement();
    senderInformation.appendChild(senderInfoPosition);

    //describe of user
    const senderInfoDescribe = new HTMLRender({
        tag: "p",
        class: "messages-senderinfo__describe",
        text: description
    }).createElement();
    senderInformation.appendChild(senderInfoDescribe);

    //email
    const senderInfoEmail = new HTMLRender({
        tag: "p",
        class: "messages-senderinfo__contact",
        text: "Email"
    }).createElement();
    senderInformation.appendChild(senderInfoEmail);

    const senderInfoEmailText = new HTMLRender({
        tag: "p",
        class: "messages-senderinfo__contact-text",
        text: email
    }).createElement();
    senderInformation.appendChild(senderInfoEmailText);

    //phone
    const senderInfoPhone = new HTMLRender({
        tag: "p",
        class: "messages-senderinfo__contact",
        text: "Phone"
    }).createElement();
    senderInformation.appendChild(senderInfoPhone);

    const senderInfoPhoneText = new HTMLRender({
        tag: "p",
        class: "messages-senderinfo__contact-text",
        text: phone
    }).createElement();
    senderInformation.appendChild(senderInfoPhoneText);

    //adress
    const senderInfoAdress = new HTMLRender({
        tag: "p",
        class: "messages-senderinfo__contact",
        text: "Adress"
    }).createElement();
    senderInformation.appendChild(senderInfoAdress);

    const senderInfoAdressText = new HTMLRender({
        tag: "p",
        class: "messages-senderinfo__contact-text",
        text: adress
    }).createElement();
    senderInformation.appendChild(senderInfoAdressText);

    //organization
    const senderInfoOrganization = new HTMLRender({
        tag: "p",
        class: "messages-senderinfo__contact",
        text: "Organization"
    }).createElement();
    senderInformation.appendChild(senderInfoOrganization);

    const senderInfoOrganizationText = new HTMLRender({
        tag: "p",
        class: "messages-senderinfo__contact-text",
        text: organization
    }).createElement();
    senderInformation.appendChild(senderInfoOrganizationText);
}

function createSenderMessages (text, time) {
    const messagesChat = document.getElementById("messages-chatMessages");

    const senderMessages = new HTMLRender({
        tag: "div",
        class: "messages-sender"
    }).createElement();
    messagesChat.appendChild(senderMessages);

    //sender's avatar
    const senderAvatar = new HTMLRender({
        tag: "img",
        class: "messages-sender__avatar",
        src: "../assets/images/users-avatar/photo-3.png"
    }).createElement();
    senderMessages.appendChild(senderAvatar);

    //wrapper for text from sender
    const senderTextWrapper = new HTMLRender({
        tag: "div",
        class: "messages-sender__wrapper"
    }).createElement();
    senderMessages.appendChild(senderTextWrapper);

    //sender's text
    const senderText = new HTMLRender({
        tag: "div",
        class: "messages-sender__text",
        text: text
    }).createElement();
    senderTextWrapper.appendChild(senderText);

    //text date

    const senderTime = new HTMLRender({
        tag: "p",
        class: "messages-sender__date",
        text: time
    }).createElement();
    senderTextWrapper.appendChild(senderTime);

}

function createReceiverMessages (text, time) {
    const messagesChat = document.getElementById("messages-chatMessages");

    const receiverMessages = new HTMLRender({
        tag: "div",
        class: "messages-receiver"
    }).createElement();
    messagesChat.appendChild(receiverMessages);


    //wrapper for text from sender
    const receiverTextWrapper = new HTMLRender({
        tag: "div",
        class: "messages-receiver__wrapper"
    }).createElement();
    receiverMessages.appendChild(receiverTextWrapper);

    //receiver's text
    const receiverText = new HTMLRender({
        tag: "div",
        class: "messages-receiver__text",
        text: text
    }).createElement();
    receiverTextWrapper.appendChild(receiverText);

    //text date
    const receiverTime = new HTMLRender({
        tag: "p",
        class: "messages-receiver__date",
        text: time
    }).createElement();
    receiverTextWrapper.appendChild(receiverTime);

    //receiver's avatar

    const receiverAvatar = new HTMLRender({
        tag: "img",
        class: "messages-receiver__avatar",
        src: "../assets/images/users-avatar/photo-1.png",
    }).createElement();
    receiverMessages.appendChild(receiverAvatar);

    messagesChat.scrollTop = messagesChat.scrollHeight;

}




