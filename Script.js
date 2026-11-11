
document.addEventListener("DOMContentLoaded", function () {

    const login = document.querySelector(".login");
    const signup = document.querySelector(".signup");
    const dashboard = document.getElementById("dashboard");

    const showLogin = document.getElementById("showLogin");
    const showSignup = document.getElementById("showSignup");

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

    const signupForm = document.getElementById("signupForm");
    const loginForm = document.getElementById("loginForm");
    const message = document.getElementById("signupMessage");
    const loginMessage = document.getElementById("loginMessage");

    let demoUser = null;

    signupForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const fullname = document.getElementById("fullname").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value;
        const confirmPassword = document.getElementById("confirmPassword").value;

        if (password.length < 8) {
            message.textContent = "Le mot de passe doit contenir 8 caractères minimum.";
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

        loginMessage.textContent = "Compte de démonstration créé. Connectez-vous.";
        displayLogin();
        document.getElementById("loginEmail").value = email;
    });

    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const email = document.getElementById("loginEmail").value.trim();
        const password = document.getElementById("loginPassword").value;

        if (!demoUser || email !== demoUser.email || password !== demoUser.password) {
            loginMessage.textContent = "Identifiants incorrects ou aucun compte créé dans cette session.";
            return;
        }

        loginForm.reset();
        loginMessage.textContent = "";

        login.hidden = true;
        signup.hidden = true;
        dashboard.hidden = false;

        dashboard.querySelector("h2").textContent =
            "Bienvenue sur PubCash, " + demoUser.fullname + " !";
    });

    document.querySelectorAll(".mission button").forEach(function (button) {
        button.addEventListener("click", function () {
            alert("Cette mission sera bientôt disponible !");
        });
    });

    document.querySelector(".withdraw button").addEventListener("click", function () {
        alert("Les retraits seront bientôt disponibles !");
    });
const rulesButton = document.getElementById("rulesButton");
const rulesMessage = document.getElementById("rulesMessage");

rulesButton.addEventListener("click", function () {
    rulesMessage.hidden = !rulesMessage.hidden;

    rulesButton.textContent = rulesMessage.hidden
        ? "📖 Comprendre les points"
        : "📕 Fermer les règles";
});
});
