
document.addEventListener("DOMContentLoaded", function () {

    const missions = document.querySelectorAll(".mission button");
    const retrait = document.querySelector(".withdraw button");

    missions.forEach(function (button, index) {

        button.onclick = function () {

            const messages = [
                "La mission publicitaire sera bientôt disponible !",
                "Les sondages seront bientôt disponibles !",
                "Le système d'invitation sera bientôt disponible !"
            ];

            alert(messages[index]);
        };

    });

    if (retrait) {
        retrait.onclick = function () {
            alert("Le système de retrait PubCash sera bientôt disponible !");
        };
    }

});
