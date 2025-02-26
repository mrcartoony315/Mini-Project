function login() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (username === "admin" && password === "1234") {
        localStorage.setItem("loggedInUser", username);
        window.location.href = "index.html"; 
    } else {
        document.getElementById("loginMessage").textContent = "Invalid credentials!";
    }
}

function checkLogin() {
    let user = localStorage.getItem("loggedInUser");
    if (user) {
        document.getElementById("userGreeting").textContent = `Welcome, ${user}!`;
    }
}

document.addEventListener("DOMContentLoaded", checkLogin);
