
document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("signupForm");
    const dashboard = document.getElementById("dashboard");
    const message = document.getElementById("signupMessage");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const fullname = document.getElementById("fullname").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value;
        const confirmPassword = document.getElementById("confirmPassword").value;

        if (password.length < 8) {
            message.textContent = "Le mot de passe doit contenir au moins 8 caractères.";
            return;
        }

        if (password !== confirmPassword) {
            message.textContent = "Les mots de passe ne correspondent pas.";
            return;
        }

        message.textContent = "Inscription de démonstration réussie !";

        document.querySelector(".signup").hidden = true;
        dashboard.hidden = false;

        dashboard.querySelector("h2").textContent =
            "Bienvenue sur PubCash, " + fullname + " !";
    });

    document.querySelectorAll(".mission button").forEach(function (button) {
        button.addEventListener("click", function () {
            alert("Cette mission sera bientôt disponible !");
        });
    });

    document.querySelector(".withdraw button").addEventListener("click", function () {
        alert("Les retraits seront bientôt disponibles !");
    });

});
