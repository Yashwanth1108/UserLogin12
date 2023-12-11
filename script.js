let signUpBtn = document.getElementById("signUpBtn");
let signInBtn = document.getElementById("signInBtn");
let nameField = document.getElementById("nameField");
let title = document.getElementById("title");
let nameInput = document.getElementById("name"); // Add this line
let emailInput = document.getElementById("email"); // Add this line
let passwordInput = document.getElementById("password"); // Add this line

signInBtn.addEventListener("click", () => {
  nameField.style.display = "none";
  title.innerHTML = "Sign In";
  signInBtn.classList.remove("disable");
  signUpBtn.classList.add("disable");
});

signUpBtn.addEventListener("click", () => {
  nameField.style.maxHeight = "65px"; // Change this line
  title.innerHTML = "Sign Up";
  signUpBtn.classList.remove("disable");
  signInBtn.classList.add("disable");
});

signUpBtn.addEventListener("click", signUp);
// Add the login functionality
signInBtn.addEventListener("click", login);

function signUp() {
  // Get user data
  const name = nameInput.value;
  const email = emailInput.value;
  const password = passwordInput.value;

  // Store user data in localStorage (you might want a more secure solution)
  localStorage.setItem("user", JSON.stringify({ name, email, password }));

  // Redirect to the welcome page

  // Prevent form submission (you can remove this if you want the form to submit)
  return false;
}

function login() {
  let userData = localStorage.getItem("user");

  const { name, email, password } = userData;
  if (userData) {
    console.log("Login sucessfull.");
    window.location.href = "home.html";
  }

  // Implement login functionality here
  // You can check the entered email and password against stored data
  // and redirect to the welcome page if credentials are valid
  // For simplicity, let's just log a message for now
}
