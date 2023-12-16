const users = [
  { name: "User1", email: "user1@example.com", password: "password1" },
  { name: "User2", email: "user2@example.com", password: "password2" },
  // Add more users as needed
];

let signUpBtn = document.getElementById("signUpBtn");
let signInBtn = document.getElementById("signInBtn");
let nameField = document.getElementById("nameField");
let title = document.getElementById("title");

signInBtn.onclick = function () {
  nameField.style.maxHeight = "0";
  title.innerHTML = "Sign In";
  signUpBtn.classList.add("disable");
  signInBtn.classList.remove("disable");
};

signUpBtn.onclick = function () {
  nameField.style.maxHeight = "65px";
  title.innerHTML = "Sign Up";
  signUpBtn.classList.remove("disable");
  signInBtn.classList.add("disable");
};

// Function to handle user login
function loginUser(email, password) {
  const user = users.find((u) => u.email === email && u.password === password);
  return user;
}

// Function to display welcome message after successful login
function displayWelcomeMessage(user) {
  const container = document.querySelector(".container");
  container.innerHTML = `
<div class="form-box">
  <h1>Welcome, ${user.name}!</h1>
  <p>You are successfully logged in.</p>
</div>
`;
}

// Event listener for the Sign Up button
signUpBtn.addEventListener("click", function () {
  // Get user input
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // Add new user to the users array (replace this with your user registration logic)
  users.push({ name, email, password });

  // Display welcome message for the new user
  displayWelcomeMessage({ name, email });
});

// Event listener for the Sign In button
signInBtn.addEventListener("click", function () {
  // Get user input
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // Attempt to login
  const loggedInUser = loginUser(email, password);

  // Display welcome message if login is successful
  if (loggedInUser) {
    displayWelcomeMessage(loggedInUser);
  } else {
    alert("Invalid email or password. Please try again.");
  }
});
