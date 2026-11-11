
document.addEventListener("DOMContentLoaded", function () {

    // Éléments principaux
    const login = document.querySelector(".login");
    const signup = document.querySelector(".signup");
    const dashboard = document.getElementById("dashboard");

    const showLogin = document.getElementById("showLogin");
    const showSignup = document.getElementById("showSignup");

    const signupForm = document.getElementById("signupForm");
    const loginForm = document.getElementById("loginForm");

    const message = document.getElementById("signupMessage");
    const loginMessage = document.getElementById("loginMessage");

    // Navigation
    function displayLogin() {
        login.hidden = false;
        signup.hidden = true;
        dashboard.hidden = true;
    }

    function displaySignup() {
        login.hidden = true;
        signup.hidden = false;
        dashboard.hidden = true;
    }

    showLogin.addEventListener("click", displayLogin);
    showSignup.addEventListener("click", displaySignup);

    displaySignup();

    // Compte de démonstration uniquement
    let demoUser = null;

    // Inscription
    signupForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const fullname = document.getElementById("fullname").value.trim();
        const email = document.getElementById("email").value.trim().toLowerCase();
        const password = document.getElementById("password").value;
        const confirmPassword = document.getElementById("confirmPassword").value;

        if (!fullname || !email) {
            message.textContent = "Veuillez remplir tous les champs.";
            return;
        }

        if (password.length < 8) {
            message.textContent =
                "Le mot de passe doit contenir 8 caractères minimum.";
            return;
        }

        if (password !== confirmPassword) {
            message.textContent = "Les mots de passe ne correspondent pas.";
            return;
        }

        demoUser = {
            fullname: fullname,
            email: email,
            password: password
        };

        signupForm.reset();
        message.textContent = "";

        loginMessage.textContent =
            "Compte de démonstration créé. Connectez-vous.";

        displayLogin();

        document.getElementById("loginEmail").value = email;
    });

    // Connexion
    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const email = document.getElementById("loginEmail").value
            .trim().toLowerCase();

        const password = document.getElementById("loginPassword").value;

        if (!demoUser ||
            email !== demoUser.email ||
            password !== demoUser.password) {

            loginMessage.textContent =
                "Identifiants incorrects ou aucun compte créé dans cette session.";

            return;
        }

        loginForm.reset();
        loginMessage.textContent = "";

        login.hidden = true;
        signup.hidden = true;
        dashboard.hidden = false;

        dashboard.querySelector("h2").textContent =
            "Bienvenue sur PubCash, " + demoUser.fullname + " !";

        dashboard.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    });

    // Comprendre les points
    const rulesButton = document.getElementById("rulesButton");
    const rulesMessage = document.getElementById("rulesMessage");

    if (rulesButton && rulesMessage) {
        rulesButton.addEventListener("click", function () {

            rulesMessage.hidden = !rulesMessage.hidden;

            rulesButton.textContent = rulesMessage.hidden
                ? "📖 Comprendre les points"
                : "📕 Fermer les règles";
        });
    }

    // Missions
    const missions = [
        {
            id: "adMission",
            name: "Regarder une publicité"
        },
        {
            id: "surveyMission",
            name: "Répondre à un sondage"
        },
        {
            id: "inviteMission",
            name: "Inviter un ami"
        }
    ];

    missions.forEach(function (mission) {

        const button = document.getElementById(mission.id);

        if (button) {
            button.addEventListener("click", function () {
                alert(
                    "La mission « " + mission.name +
                    " » sera bientôt disponible sur PubCash."
                );
            });
        }
    });

    // Retrait
    const withdrawButton = document.getElementById("withdrawButton");

    if (withdrawButton) {
        withdrawButton.addEventListener("click", function () {
            alert(
                "Le système de retrait sera disponible après " +
                "la mise en place du portefeuille sécurisé."
            );
        });
    }

});

