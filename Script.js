
document.addEventListener("DOMContentLoaded", function () {

    const button = document.querySelector("button");

    if (button) {
        button.addEventListener("click", function () {

            const name = prompt("Bienvenue sur PubCash ! Quel est ton prénom ?");

            if (name && name.trim() !== "") {
                alert("Bonjour " + name + " ! Bienvenue dans la communauté PubCash.");
            } else {
                alert("Bienvenue sur PubCash !");
            }

        });
    }

});
