function register() {
    let username = document.getElementById("regUsername").value;
    let password = document.getElementById("regPassword").value;

    if (username === "" || password === "") {
        document.getElementById("message").innerHTML =
            "Please fill all fields!";
        return;
    }

    localStorage.setItem("username", username);
    localStorage.setItem("password", password);

    document.getElementById("message").innerHTML =
        "Registration Successful!";
}

function login() {
    let username = document.getElementById("loginUsername").value;
    let password = document.getElementById("loginPassword").value;

    let storedUsername = localStorage.getItem("username");
    let storedPassword = localStorage.getItem("password");

    if (username === storedUsername && password === storedPassword) {
        document.getElementById("message").innerHTML =
            "Login Successful!";
    } else {
        document.getElementById("message").innerHTML =
            "Invalid Username or Password!";
    }
}