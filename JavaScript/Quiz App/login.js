const loginForm = document.querySelector("#login-form");
const loginEmail = document.querySelector("#login-email");
const loginPassword = document.querySelector("#login-password");
const loginErrorDiv = document.querySelector("#form-error-div");

loginForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const email = loginEmail.value;
    const password = loginPassword.value;

    let data = JSON.parse(localStorage.getItem('users')) || [];
    const filteredUsers = data.filter(user => user.email === email && user.password === password);

    if (filteredUsers.length > 0) {
        alert("Login Successful!!!");
        location.reload();
        window.location = 'quiz.html'; 
    } else {
        loginErrorDiv.innerHTML = "Invalid email or password.";
    }
});
