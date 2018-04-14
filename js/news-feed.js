var mainPage = function newsFeed() {

    function getNotifications() {
        var notifications = readData();
        var divElement = document.getElementById("news_notifications");
        notifications.map(presentNotification).forEach(div => { divElement.appendChild(div); });
    }

    function getEvents(){
        var notificationElement = document.createElement("div");
        notificationElement.setAttribute("class", "buble");

        var title = createTitle(notification.name);
        var creator = createField("Created by: " + notification.creator);
        var location = createField("Place: " + notification.location);
        var time = createField("At:" + notification.time);
        var hasOrHave = notification.participants.length > 1 ? " have " : " has ";
        var participants = createField(stringifyParticipants(notification.participants) + hasOrHave + "decided to join");
        var game = createField("We will be playing: " + notification.game);

        notificationElement.appendChild(title);
        notificationElement.appendChild(creator);
        notificationElement.appendChild(location);
        notificationElement.appendChild(time);
        notificationElement.appendChild(participants);
        notificationElement.appendChild(game);

        return notificationElement;
    }

    function getTournaments(){

    }

    function presentNotification(notification) {
        var notificationElement = document.createElement("div");
        notificationElement.setAttribute("class", "buble");

        var title = createTitle(notification.game);
        var creator = createField("Created by: " + notification.creator);
        var location = createField("Place: " + notification.location);
        var time = createField("At:" + notification.time);
        var hasOrHave = notification.participants.length > 1 ? " have " : " has ";
        var participants = createField(stringifyParticipants(notification.participants) + hasOrHave + "decided to join");
        var game = createField(notification.description);

        notificationElement.appendChild(title);
        notificationElement.appendChild(creator);
        notificationElement.appendChild(location);
        notificationElement.appendChild(time);
        notificationElement.appendChild(participants);
        notificationElement.appendChild(game);

        return notificationElement;
    }

    function presentEvent(){

    }

    function presentTournament(){

    }

    function stringifyParticipants(participants) {
        var result = "";
        if (participants.length < 2) {
            return participants.toString();
        }
        for (let index = 0; index < participants.length; index++) {
            const element = participants[index];
            result += element.toString();
            if (index < participants.length - 2) {
                result += ", ";
            } else if (index < participants.length - 1) {
                result += " and ";
            }
        }
        return result;
    }

    function createTitle(name) {
        var fieldDiv = document.createElement("div");
        fieldDiv.setAttribute("class", "title_field");
        fieldDiv.innerHTML = "<h1>" + name + "</h1>";
        return fieldDiv;
    }

    function createField(fieldText) {
        var fieldDiv = document.createElement("div");
        fieldDiv.setAttribute("class", "field");
        fieldDiv.innerText = fieldText;
        return fieldDiv;
    }


    function readData() {
        // This would normally call a REST API, but for the prototipe we are using a provider function;
        var notifications = JSON.parse(generateNotifications());
        return notifications;
    }

    // Stub for backend
    function generateNotifications() {
        var notifications = [
            {
                "description": "Catan party",
                "creator": "Petko",
                "participants": ["Marin", "Alex", "Pesho"],
                "location": "Trite trola",
                "time": "2018-04-12 18:30:00",
                "game": "Catan"
            }, {
                "description": "Playing Catan, tournament preparation",
                "creator": "Ivan",
                "participants": ["Stoqn", "Petko", "Iva", "Jana"],
                "location": "Trite trola",
                "time": "2018-04-20 19:00:00",
                "game": "Catan"
            }, {
                "description": "Smalltalk with smallworld",
                "creator": "Tervel",
                "participants": ["Antoniq"],
                "location": "Abordage",
                "time": "2018-04-19 12:30:00",
                "game": "Small world"
            }
        ];
        return JSON.stringify(notifications);
    }

    return {
        getNotifications: getNotifications,
        getEvents : getEvents,
        getTournaments : getTournaments
    };

}();