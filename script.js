// Registrace uživatele
function register() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (!username || !password) {
        alert("Vyplňte všechny údaje!");
        return;
    }

    let users = JSON.parse(localStorage.getItem("users")) || [];
    users.push({ username, password });
    localStorage.setItem("users", JSON.stringify(users));

    alert("Registrace úspěšná!");
    window.location.href = "login.html";
}

// Přihlášení uživatele
function login() {
    let loginUsername = document.getElementById("loginUsername").value;
    let loginPassword = document.getElementById("loginPassword").value;
    let rememberMe = document.getElementById("rememberMe").checked;

    let users = JSON.parse(localStorage.getItem("users")) || [];
    let user = users.find(u => u.username === loginUsername && u.password === loginPassword);

    if (user) {
        if (rememberMe) {
            localStorage.setItem("currentUser", JSON.stringify(user));
        } else {
            sessionStorage.setItem("currentUser", JSON.stringify(user));
        }
        alert("Přihlášení úspěšné!");
        window.location.href = "chat.html";
    } else {
        alert("Neplatné přihlašovací údaje!");
    }
}

// Odhlášení
function logout() {
    localStorage.removeItem("currentUser");
    sessionStorage.removeItem("currentUser");
    window.location.href = "login.html";
}

// Vyhledávání uživatelů
function searchUsers() {
    let query = document.getElementById("searchUser").value.toLowerCase();
    let users = JSON.parse(localStorage.getItem("users")) || [];
    let userList = document.getElementById("userList");

    userList.innerHTML = "";
    users.forEach(user => {
        if (user.username.toLowerCase().includes(query)) {
            let li = document.createElement("li");
            li.textContent = user.username;
            userList.appendChild(li);
        }
    });
}

// Odeslání zprávy
function sendMessage() {
    let messageInput = document.getElementById("messageInput").value;
    let chatBox = document.getElementById("chatBox");

    if (messageInput.trim() !== "") {
        let messageDiv = document.createElement("div");
        messageDiv.textContent = messageInput;
        chatBox.appendChild(messageDiv);
        document.getElementById("messageInput").value = "";
    }
}
