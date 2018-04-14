var mainScript = function () {

    function generateHeaderMenu() {
        var mainMenuContents =
            '<a href="index.html">Game On</a>' +
            '<a href="clubs.html">Clubs</a>' +
            '<a href="create-tournament.html">Create Tournament</a>' +
            '<a href="create-session.html">Create Session</a>' +
            '<a href="create-promo.html">Create Promo</a>' +
            '<a href="my-profile.html">See Profile</a>';
        var menuDiv = document.getElementById("main_menu");
        menuDiv.innerHTML += mainMenuContents;
    }

    return {
        generateHeaderMenu: generateHeaderMenu
    };
}();