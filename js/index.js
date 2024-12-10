// Get references to elements
var EmailInput = document.getElementById("loginforemail");
var PasswordInput = document.getElementById("loginforpassword");
var NameInput = document.getElementById("signupName");
var ConfirmPasswordInput = document.getElementById("confirmPassword");
var LoginButton = document.getElementById("loginButton");
var SignUpButton = document.getElementById("signupButton");
var SignUpLink = document.getElementById("signupLink");

// Alert elements
var AlertEmail = document.getElementById("alertEmail");
var AlertPassword = document.getElementById("alertPassword");
var AlertName = document.getElementById("alertName");
var AlertConfirmPassword = document.getElementById("alertConfirmPassword");

// Validate Email
function validateEmail() {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (emailRegex.test(EmailInput.value.trim())) {
        AlertEmail.classList.add("d-none");
    } else {
        AlertEmail.classList.remove("d-none");
    }
}

// Validate Password
function validatePassword() {
    if (PasswordInput.value.trim().length >= 8) {
        AlertPassword.classList.add("d-none");
    } else {
        AlertPassword.classList.remove("d-none");
    }
}

// Validate Name
function validateName() {
    const nameRegex = /^[a-zA-Z\s]{3,}$/;
    if (nameRegex.test(NameInput.value.trim())) {
        AlertName.classList.add("d-none");
    } else {
        AlertName.classList.remove("d-none");
    }
}

// Validate Confirm Password
function validateConfirmPassword() {
    if (PasswordInput.value.trim() === ConfirmPasswordInput.value.trim()) {
        AlertConfirmPassword.classList.add("d-none");
    } else {
        AlertConfirmPassword.classList.remove("d-none");
    }
}

// Show Sign Up Form
function showSignUpForm() {
    LoginButton.classList.add("d-none");
    SignUpButton.classList.remove("d-none");
    NameInput.classList.remove("d-none");
    ConfirmPasswordInput.classList.remove("d-none");
}

// Handle Sign Up
SignUpButton.addEventListener("click", function () {
    const userData = {
        name: NameInput.value.trim(),
        email: EmailInput.value.trim(),
        password: PasswordInput.value.trim(),
    };

    // Save user data in localStorage
    localStorage.setItem("username", userData.name);
    localStorage.setItem("email", userData.email);
    localStorage.setItem("password", userData.password);

    alert("Sign Up Successful!");
    window.location.href = "home.html"; // Redirect to home
});

// Handle Login
LoginButton.addEventListener("click", function () {
    const email = EmailInput.value.trim();
    const password = PasswordInput.value.trim();

    const storedEmail = localStorage.getItem("email");
    const storedPassword = localStorage.getItem("password");

    if (email === storedEmail && password === storedPassword) {
        alert("Login Successful!");
        window.location.href = "home.html"; // Redirect to home
    } else {
        alert("Invalid email or password!");
    }
});

// Show Sign Up form
SignUpLink.addEventListener("click", function () {
    showSignUpForm();
});

// Event listeners for validation
EmailInput.addEventListener("blur", validateEmail);
PasswordInput.addEventListener("blur", validatePassword);
NameInput.addEventListener("blur", validateName);
ConfirmPasswordInput.addEventListener("blur", validateConfirmPassword);

