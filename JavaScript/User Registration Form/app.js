
const form = document.querySelector('#form');
const username = document.querySelector('#username');
const age = document.querySelector('#age');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const cnic = document.querySelector('#cnic');
const div2 = document.querySelector("#div-2");

const usernameRegex = /^[a-zA-Z0-9_]{4,15}$/;
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
const cnicRegex = /^\d{5}-\d{7}-\d{1}$/;

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const limitations = [];
    if (!usernameRegex.test(username.value)) {
        limitations.push("Invalid username. Must be 4 to 15 characters long.");
    }
    if (!emailRegex.test(email.value)) {
        limitations.push("Invalid email address.");
    }
    if (!passwordRegex.test(password.value)) {
        limitations.push("Invalid password. Must be at least 8 characters long.");
    }
    if (!cnicRegex.test(cnic.value)) {
        limitations.push("Invalid CNIC. Must be in the format XXXXX-XXXXXXX-X.");
    }
    if (age.value < 18 || age.value > 60) {
        limitations.push("Invalid age. Your Age must be between 18 and 60.");
    }

    if (limitations.length > 0) {
        div2.innerHTML = limitations.join('<br>');
    } else {
        alert("Form Submitted Successfully!!");
        window.location.reload();
    }
});

