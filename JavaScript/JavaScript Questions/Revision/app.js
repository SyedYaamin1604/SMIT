const fullName = document.querySelector("#full-name");
const age = document.querySelector("#age");
const email = document.querySelector("#email");
const output = document.querySelector("#output");
const form = document.querySelector("#form");

form.addEventListener("submit" , (event)=>{
    event.preventDefault();


    output.innerHTML += `
    <h1>Submitted Input</h1>
    <p>Name: ${fullName.value}</p>
    <p>Age: ${age.value}</p>
    <p>Email: ${email.value}</p>
    `
})

