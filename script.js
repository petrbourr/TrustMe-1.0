// Kontrola přihlášení
function checkLogin() {
    if (!localStorage.getItem("loggedInUser")) {
        window.location.href = "login.html";
    }
}

// Registrace uživatele
function register() {
    let email = document.getElementById("reg-email").value.trim();
    let password = document.getElementById("reg-password").value.trim();

    if (!email || !password) {
        alert("Vyplňte všechny údaje!");
        return;
    }

    if (localStorage.getItem(email)) {
        alert("Tento e-mail je již registrován!");
        return;
    }

    let userData = { email, password };
    localStorage.setItem(email, JSON.stringify(userData));
    alert("Registrace úspěšná! Nyní se přihlaste.");
    window.location.href = "login.html";
}

// Přihlášení uživatele
function login() {
    let email = document.getElementById("login-email").value.trim();
    let password = document.getElementById("login-password").value.trim();

    let userData = localStorage.getItem(email);
    if (!userData) {
        alert("Uživatel neexistuje!");
        return;
    }

    let user = JSON.parse(userData);
    if (user.password !== password) {
        alert("Špatné heslo!");
        return;
    }

    localStorage.setItem("loggedInUser", email);
    window.location.href = "index.html";
}

// Odhlášení
function logout() {
    localStorage.removeItem("loggedInUser");
    window.location.href = "login.html";
}
