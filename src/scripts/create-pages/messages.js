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
    messagesChatWindow.setAttribute("id", "messages-wrapper");
    messagesContainer.appendChild(messagesChatWindow);

    const messagesUsersContainer = document.createElement("section");
    messagesUsersContainer.setAttribute("class", "messages-users");
    messagesChatWindow.appendChild(messagesUsersContainer);

    const messagesUsersWrapper = document.createElement("div");
    messagesUsersWrapper.setAttribute("class", "messages-users__wrapper custom-scrollbar");

    messagesUsersContainer.appendChild(messagesUsersWrapper);



    const createMessagesUsers = (name, date, message) => {

        //creating wrapper for user
        const messagesUserWrapper = document.createElement("div");
        messagesUserWrapper.setAttribute("class", "messages-user");
        messagesUserWrapper.setAttribute("id", "messages-user");
        messagesUsersWrapper.appendChild(messagesUserWrapper);

        //creating wrapper for user avatar, name, time
        const messagesUserWrapperText = document.createElement("div");
        messagesUserWrapperText.setAttribute("class", "messages-user__wrapper");
        messagesUserWrapper.appendChild(messagesUserWrapperText);


        //creating avatar of user in recent messages
        const messagesUserAvatar = document.createElement("img");
        messagesUserAvatar.setAttribute("class", "messages-user__avatar");
        messagesUserAvatar.setAttribute("src", "../assets/images/users-avatar/photo-3.png");
        messagesUserWrapperText.appendChild(messagesUserAvatar);

        //creating name of user in recent messages
        const messagesUserName = document.createElement("h2");
        messagesUserName.setAttribute("class", "messages-user__name");
        messagesUserName.innerHTML = name;
        messagesUserWrapperText.appendChild(messagesUserName);

        //creating time of last message
        const messagesUserTime = document.createElement("h3");
        messagesUserTime.setAttribute("class", "messages-user__time");
        messagesUserTime.innerHTML = date;
        messagesUserWrapperText.appendChild(messagesUserTime);

        //creating text of recent message
        const messagesUserLastText = document.createElement("p");
        messagesUserLastText.setAttribute("class", "messages-user__text");
        messagesUserLastText.innerHTML = message;
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

        let response = await fetch("http://localhost:3000/api/threads", requestOptions);
        let threads = await response.json();
        console.log(threads);



        for (let i = 0; i < threads.length; i++) {
            let name;
            for (let j = 0; j < threads[i].users.length; j++) {
                if(threads[i].users[j]._id !== threads[i].last_message.user) {
                    name = threads[i].users[j].name;
                }
            }

            let message = threads[i].last_message.body;
            let date = threads[i].last_message.created_at.slice(0,10);
            let newSplitString = new Date(date);
            let newDate = newSplitString.getDate() + " " + months[newSplitString.getMonth()];
            createMessagesUsers(name, newDate, message);


        }

        localStorage.setItem("_id", threads[0]._id);

    }

    getAllThreads();

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
    messagesWindow.setAttribute("id", "messages-chat");
    messagesChatWindow.appendChild(messagesWindow);

    //messages wrapper
    const messagesChat = document.createElement("div");
    messagesChat.setAttribute("class", "messages-chatMessages custom-scrollbar");
    messagesChat.setAttribute("id", "messages-chatMessages");// a little bit bad naming, I know but nothing else I can't imagine :D
    messagesWindow.appendChild(messagesChat);


    //messages from sender


    //change it when api will be ready
    /*const createMessages = () => {
        /!*createSenderMessages(messagesSender.messages[0]);
        createReceiverMessages(messagesReceiver.messages[0]);
        createSenderMessages(messagesSender.messages[1]);
        createReceiverMessages(messagesReceiver.messages[1]);
        createReceiverMessages(messagesReceiver.messages[2]);*!/
    };

    createMessages();*/

    //wrapper for input and button
    //input for messages
    const inputMessageWrapper = document.createElement("div");
    inputMessageWrapper.setAttribute("class", "messages-chat__inputwrap");
    messagesWindow.appendChild(inputMessageWrapper);

    const inputMessage = document.createElement("textarea");
    inputMessage.setAttribute("class", "messages-chat__textarea");
    inputMessage.setAttribute("id", "messages-chat__textarea");

    inputMessage.setAttribute("placeholder", "Write a message");
    inputMessageWrapper.appendChild(inputMessage);

    //send button for input
    const inputMessageButton = document.createElement("button");
    inputMessageButton.setAttribute("class", "messages-chat__send");
    inputMessageButton.setAttribute("id", "messages-chat__send");
    inputMessageWrapper.appendChild(inputMessageButton);

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

    let response = await fetch("http://localhost:3000/api/threads/messages", {
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

export async function getAllThreadMessages () {
    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October',	'November', 'December'];
    let requestOptions = {
        method: 'GET',
        headers: {
            "Authorization": localStorage.token
        },
        redirect: 'follow'
    };

    let id = localStorage._id;
    let response = await fetch(`http://localhost:3000/api/threads/messages/${id}`, requestOptions);
    let threadMessages = await response.json();


    let receiverId, senderId;
    for (let i = 0; i < threadMessages.users.length; i++) {
        if (threadMessages.users[i].me) {
             receiverId = threadMessages.users[i]._id;
        } else {
             senderId = threadMessages.users[i]._id;
        }
    }

    if (localStorage.ifThreadAdded !== id) {


        for (let i = threadMessages.messages.length - 1; i >= 0; i--) {
                if (receiverId === threadMessages.messages[i].user) {

                        let text = threadMessages.messages[i].body;
                        let time = threadMessages.messages[i].created_at;
                        time = new Date(time);
                        let newTime = time.getDate() + " " + months[time.getMonth()] + " " + time.getFullYear() + ", " + time.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });

                        createReceiverMessages(text, newTime);
                } if (senderId === threadMessages.messages[i].user) {
                        let text = threadMessages.messages[i].body;
                        let time = threadMessages.messages[i].created_at;

                        time = new Date(time);
                        let newTime = time.getDate() + " " + months[time.getMonth()] + " " + time.getFullYear() + ", " + time.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });

                        createSenderMessages(text, newTime);
                }
            }
        for (let i = 0; i < threadMessages.users.length; i++) {
            if(!threadMessages.users[i].me) {
                document.querySelector(".messages-chat__inputwrap").style.display = "flex";

                let name = threadMessages.users[i].name;
                let email = threadMessages.users[i].email;
                let position = threadMessages.users[i].position;
                let description = threadMessages.users[i].description;
                let phone = threadMessages.users[i].phone;
                let address = threadMessages.users[i].address;
                let organization = threadMessages.users[i].organization;

                createSenderInfo(name, email, position, description, phone, address, organization);
            }
        }

        localStorage.ifThreadAdded = id;
    }
}

function createSenderInfo (name, email, position, description, phone, adress, organization) {
    const messagesChatWindow = document.getElementById("messages-wrapper");
    const senderInformation = document.createElement("section");
    senderInformation.setAttribute("class", "messages-senderinfo custom-scrollbar");
    messagesChatWindow.appendChild(senderInformation);

    //avatar
    const senderInfoAvatar = document.createElement("img");
    senderInfoAvatar.setAttribute("class", "messages-senderinfo__avatar");
    senderInfoAvatar.setAttribute("src", "../assets/images/users-avatar/photo-3.png");
    senderInformation.appendChild(senderInfoAvatar);

    //Name
    const senderInfoName = document.createElement("h2");
    senderInfoName.setAttribute("class", "messages-senderinfo__name");
    senderInfoName.innerHTML = name;
    senderInformation.appendChild(senderInfoName);

    //position
    const senderInfoPosition = document.createElement("h3");
    senderInfoPosition.setAttribute("class", "messages-senderinfo__position");
    senderInfoPosition.innerHTML = position;
    senderInformation.appendChild(senderInfoPosition);

    //describe of user
    const senderInfoDescribe = document.createElement("p");
    senderInfoDescribe.setAttribute("class", "messages-senderinfo__describe");
    senderInfoDescribe.innerHTML = description;
    senderInformation.appendChild(senderInfoDescribe);

    //email
    const senderInfoEmail = document.createElement("p");
    senderInfoEmail.setAttribute("class", "messages-senderinfo__contact");
    senderInfoEmail.innerHTML = "Email";
    senderInformation.appendChild(senderInfoEmail);

    const senderInfoEmailText = document.createElement("p");
    senderInfoEmailText.setAttribute("class", "messages-senderinfo__contact-text");
    senderInfoEmailText.innerHTML = email;
    senderInformation.appendChild(senderInfoEmailText);

    //phone
    const senderInfoPhone = document.createElement("p");
    senderInfoPhone.setAttribute("class", "messages-senderinfo__contact");
    senderInfoPhone.innerHTML = "Phone";
    senderInformation.appendChild(senderInfoPhone);

    const senderInfoPhoneText = document.createElement("p");
    senderInfoPhoneText.setAttribute("class", "messages-senderinfo__contact-text");
    senderInfoPhoneText.innerHTML = phone;
    senderInformation.appendChild(senderInfoPhoneText);

    //adress
    const senderInfoAdress = document.createElement("p");
    senderInfoAdress.setAttribute("class", "messages-senderinfo__contact");
    senderInfoAdress.innerHTML = "Adress";
    senderInformation.appendChild(senderInfoAdress);

    const senderInfoAdressText = document.createElement("p");
    senderInfoAdressText.setAttribute("class", "messages-senderinfo__contact-text");
    senderInfoAdressText.innerHTML = adress;
    senderInformation.appendChild(senderInfoAdressText);

    //organization
    const senderInfoOrganization = document.createElement("p");
    senderInfoOrganization.setAttribute("class", "messages-senderinfo__contact");
    senderInfoOrganization.innerHTML = "Organization";
    senderInformation.appendChild(senderInfoOrganization);

    const senderInfoOrganizationText = document.createElement("p");
    senderInfoOrganizationText.setAttribute("class", "messages-senderinfo__contact-text");
    senderInfoOrganizationText.innerHTML = organization;
    senderInformation.appendChild(senderInfoOrganizationText);
}

function createSenderMessages (text, time) {
    const messagesChat = document.getElementById("messages-chatMessages");

    const senderMessages = document.createElement("div");
    senderMessages.setAttribute("class", "messages-sender");
    messagesChat.appendChild(senderMessages);

    //sender's avatar
    const senderAvatar = document.createElement("img");
    senderAvatar.setAttribute("class", "messages-sender__avatar");
    senderAvatar.setAttribute("src", "../assets/images/users-avatar/photo-3.png");
    senderMessages.appendChild(senderAvatar);

    //wrapper for text from sender
    const senderTextWrapper = document.createElement("div");
    senderTextWrapper.setAttribute("class", "messages-sender__wrapper");
    senderMessages.appendChild(senderTextWrapper);

    //sender's text
    const senderText = document.createElement("div");
    senderText.setAttribute("class","messages-sender__text");
    senderText.innerHTML = text;
    senderTextWrapper.appendChild(senderText);

    //text date
    const senderTime = document.createElement("p");
    senderTime.setAttribute("class", "messages-sender__date");
    senderTime.innerHTML = time;
    senderTextWrapper.appendChild(senderTime);

}

function createReceiverMessages (text, time) {
    const messagesChat = document.getElementById("messages-chatMessages");

    const receiverMessages = document.createElement("div");
    receiverMessages.setAttribute("class", "messages-receiver");
    messagesChat.appendChild(receiverMessages);


    //wrapper for text from sender
    const receiverTextWrapper = document.createElement("div");
    receiverTextWrapper.setAttribute("class", "messages-receiver__wrapper");
    receiverMessages.appendChild(receiverTextWrapper);

    //receiver's text
    const receiverText = document.createElement("div");
    receiverText.setAttribute("class","messages-receiver__text");
    receiverText.innerHTML = text;
    receiverTextWrapper.appendChild(receiverText);

    //text date
    const receiverTime = document.createElement("p");
    receiverTime.setAttribute("class", "messages-receiver__date");
    receiverTime.innerHTML = time;
    receiverTextWrapper.appendChild(receiverTime);

    //receiver's avatar
    const receiverAvatar = document.createElement("img");
    receiverAvatar.setAttribute("class", "messages-receiver__avatar");
    receiverAvatar.setAttribute("src", "../assets/images/users-avatar/photo-1.png");
    receiverMessages.appendChild(receiverAvatar);

}




