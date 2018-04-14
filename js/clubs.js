var clubs = function clubs() {

    function showAllClubs(club) {
        var clubsObjects = readData(generateClubs);
        var parent = document.getElementById("clubs");
        clubsObjects.map(presentClub).forEach(club => { parent.appendChild(club); });
    }

    function presentClub(club) {
        var clubDiv = document.createElement("div");
        clubDiv.setAttribute("class", "buble");

        var title = createTitle(club.name);
        var location = createField("Address: " + club.location);
        var time = createField("Open hours: From" + club.openHoursFrom + " To " + club.openHoursTo);
        var image = createImage(club.image);

        var textDiv = document.createElement("div");
        textDiv.setAttribute("class", "text-div");
        textDiv.appendChild(title);
        textDiv.appendChild(location);
        textDiv.appendChild(time);

        clubDiv.appendChild(image);
        clubDiv.appendChild(textDiv);

        return clubDiv;
    }

    function createImage(imageSrc) {
        var fieldDiv = document.createElement("div");
        fieldDiv.setAttribute("class", "club-img");

        var img = document.createElement("img");
        img.setAttribute("src", imageSrc);
        img.setAttribute("alt", "No image available");
        img.setAttribute("width", "100px");
        img.setAttribute("heigh", "100px");

        fieldDiv.appendChild(img);
        return fieldDiv;
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
    function generateClubs() {
        var clubs = [
            {
                "name": "Trite trola",
                "image": "http://the3trolls.com/wp-content/uploads/2015/11/logo.png",
                "location": "st.Oborishte 80",
                "openHoursFrom": "16:00",
                "openHoursTo": "00:00"
            }, {
                "name": "Abordage",
                "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvvCk-S_urXkXQ_WoKL6TGNSAiyCnAmtw5kKE72krriScpSHCJRg",
                "location": "st.Veselec 22",
                "openHoursFrom": "14:00",
                "openHoursTo": "22:00"
            }, {
                "name": "FMI 100",
                "image": "",
                "location": "st. James Boucher 5",
                "openHoursFrom": "08:00",
                "openHoursTo": "23:00"
            }
        ];
        return JSON.stringify(clubs);
    }

    return {
        showAllClubs: showAllClubs
    };
}();