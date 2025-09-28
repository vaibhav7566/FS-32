let form = document.querySelector("form");
let email = document.querySelector("#email");
let password = document.querySelector("#password");

form.addEventListener("submit", function (dets) {
    dets.preventDefault();

document.querySelector("#emailError").style.display = "none";
document.querySelector("#passwordError").style.display = "none";

    // Simple Email Regex
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Strong Password Regex (min 8 chars, 1 uppercase, 1 lowercase, 1 number, 1 special char)
    let passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    let check_email = emailRegex.test(email.value);
    let check_password = passwordRegex.test(password.value);


    if (!check_email) {
        document.querySelector("#emailError").textContent = "Invalid Email !";
        document.querySelector("#emailError").style.display = "initial";
        document.querySelector("#emailError").style.color = "red";
    }

    if (!check_password){
        document.querySelector("#passwordError").textContent = "Invalid Password !"
        document.querySelector("#passwordError").style.display = "initial"
        document.querySelector("#passwordError").style.color = "red"
    }
})