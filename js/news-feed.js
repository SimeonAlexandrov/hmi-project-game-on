var indexPage = function newsFeed() {

    function getNotifications() {
        var notifications = readData(generateSessionNotifications);
        var divElement = document.getElementById("news_notifications");
        notifications.map(presentSession).forEach(div => { divElement.appendChild(div); });
    }

    function getEvents() {
      var notifications = readData(generateEventNotifications);
      var divElement = document.getElementById("events_notifications");
      notifications.map(presentEvent).forEach(div => { divElement.appendChild(div); });
    }

    function getTournaments() {

    }

    function presentSession(notification) {
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

    function presentEvent(notification) {
        var notificationElement = document.createElement("div");
        notificationElement.setAttribute("class", "buble");

        var location = createField("Place: " + notification.location);
        var date = createField("On: " + notification.date + "From: " + notification.from + " to: " + notification.to);
        var description = createField(notification.description);

        notificationElement.appendChild(location);
        notificationElement.appendChild(date);
        notificationElement.appendChild(description);

        return notificationElement;
    }

    function presentTournament(notification) {

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


    function readData(generationFunction) {
        // This would normally call a REST API, but for the prototipe we are using a provider function;
        var notifications = JSON.parse(generationFunction.apply());
        return notifications;
    }

    // Stub for backend
    function generateSessionNotifications() {
        var notifications = [
            {
                "description": "Catan party",
                "creator": "Petko",
                "participants": ["Marin", "Alex", "Pesho"],
                "location": "Trite trola",
                "time": "2018/04/12 18:30:00",
                "game": "Catan"
            }, {
                "description": "Playing Catan, tournament preparation",
                "creator": "Ivan",
                "participants": ["Stoqn", "Petko", "Iva", "Jana"],
                "location": "Trite trola",
                "time": "2018/04/20 19:00:00",
                "game": "Catan"
            }, {
                "description": "Smalltalk with smallworld",
                "creator": "Tervel",
                "participants": ["Antoniq"],
                "location": "Abordage",
                "time": "2018/04/19 12:30:00",
                "game": "Small world"
            }
        ];
        return JSON.stringify(notifications);
    }

    function generateEventNotifications() {
        var events = [
            {
                "location": "Trite trola",
                "date": "2018/04/21",
                "from": "14:30",
                "to": "17:00",
                "description": "Presentation of the game Battle Bunnies!. Everybody is welcomed!"
            }, {
                "location": "FMI 100",
                "date": "2018/04/22",
                "from": "13:00",
                "to": "20:00",
                "description": "Come and play games with your geeky colegues!"
            }, {
                "location": "Abordage",
                "date": "2018/04/19",
                "from": "19:00",
                "to": "21:30",
                "description": "Introduction to Magic the Gathering."
            }, {
                "location": "Trite trola",
                "date": "2018/04/20",
                "from": "18:00",
                "to": "22:30",
                "description": "Catan, stategies and tactics"
            }
        ];
        return JSON.stringify(events);
    }

    return {
        getNotifications: getNotifications,
        getEvents: getEvents,
        getTournaments: getTournaments
    };

}();