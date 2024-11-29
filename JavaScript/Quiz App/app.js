const form = document.querySelector("#form");
const username = document.querySelector("#username");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const errorDiv = document.querySelector("#form-error-div");

const usernameRegex = /^[a-zA-Z0-9_]{4,15}$/;
const passwordRegex = /^.{8,}$/;
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const error = [];
    if (!usernameRegex.test(username.value)) {
        error.push("Invalid username. Must be 4 to 15 characters long.");
    }
    if (!emailRegex.test(email.value)) {
        error.push("Invalid email address.");
    }
    if (!passwordRegex.test(password.value)) {
        error.push("Invalid password. Must be at least 8 characters long.");
    }

    if (error.length > 0) {
        errorDiv.innerHTML = error.join('<br>');
    } else {
        let users = JSON.parse(localStorage.getItem('users')) || [];
        const existingUsers = users.filter(user => user.email === email.value);
        if (existingUsers.length > 0) {
            errorDiv.innerHTML = "This Email is Already Registered. Please register with another Email."
        } else {
            const user = {
                username: username.value,
                email: email.value,
                password: password.value
            };
            users.push(user);
            localStorage.setItem('users', JSON.stringify(users));
            alert("User Registered Successfully!!!");
            window.location = 'login.html'
        }
    }
});
