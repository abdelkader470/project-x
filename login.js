function signup() {
  var email = document.getElementById("email1").value;
  var password = document.getElementById("password1").value;
  var confirmPassword = document.getElementById("confirm-password").value;
  var btnlogin = document.getElementById("btnLogin");

  if (!validateEmail(email)) {
    return false;
  }

  if (!validatePassword(password)) {
    return false;
  }

  if (!validateConfirmPassword(password, confirmPassword)) {
    return false;
  }
  // Save the email value to the local storage
  localStorage.setItem("email", email);
  localStorage.setItem("password", password);
  localStorage.setItem("confirmPassword", confirmPassword);

  window.open("index.html");
}
function validateEmail(email) {
  var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}

function validatePassword(password) {
  return password.length >= 8;
}

function validateConfirmPassword(password, confirmPassword) {
  return password === confirmPassword;
}

function loginFunc() {
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  if (!validateEmail(email)) {
    return false;
  }

  if (!validatePassword(password)) {
    return false;
  }
  if (
    email === localStorage.getItem("email") &&
    password === localStorage.getItem("password")
  ) {
    window.open("index.html");
  }
}

const loginForm = document.querySelector(".login");
const registerForm = document.querySelector(".register");
const btnregis = document.getElementById("btnregistar");
btnlogin = document.getElementById("btnLogin");
btnregis.addEventListener("click", () => {
  console.log("clicked btn");
  loginForm.classList.remove("active");
  registerForm.classList.add("active");
});
btnlogin.addEventListener("click", () => {
  console.log("clicked btn");
  loginForm.classList.add("active");
  registerForm.classList.remove("active");
});
