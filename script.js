// =============================
// Part 1: Event Handling
// =============================

// Counter feature
let count = 0;

// Increase count
document.getElementById("countBtn").addEventListener("click", () => {
  count++;
  document.getElementById("countDisplay").textContent = `Clicked ${count} times`;
});

// Reset count
document.getElementById("resetBtn").addEventListener("click", () => {
  count = 0;
  document.getElementById("countDisplay").textContent = "Clicked 0 times";
});


// Keyboard event (type your name)
document.getElementById("nameInput").addEventListener("keyup", (e) => {
  document.getElementById("typedName").textContent = `Hello, ${e.target.value}`;
});

// =============================
// Part 2: Interactive Features
// =============================

// Show/Hide Paragraph
document.getElementById("toggleBtn").addEventListener("click", () => {
  let text = document.getElementById("hiddenText");
  text.style.display = (text.style.display === "none" || text.style.display === "") 
    ? "block" 
    : "none";
});

// FAQ collapse
document.querySelector(".faq-question").addEventListener("click", (e) => {
  let answer = e.target.nextElementSibling;
  answer.style.display = (answer.style.display === "none") ? "block" : "none";
});

// =============================
// Part 3: Form Validation
// =============================
document.getElementById("signupForm").addEventListener("submit", (e) => {
  e.preventDefault(); // stop form submission

  // Grab inputs
  let name = document.getElementById("nameField").value.trim();
  let email = document.getElementById("emailField").value.trim();
  let password = document.getElementById("passwordField").value.trim();

  // Error fields
  let nameError = document.getElementById("nameError");
  let emailError = document.getElementById("emailError");
  let passwordError = document.getElementById("passwordError");
  let formSuccess = document.getElementById("formSuccess");

  // Reset errors
  nameError.textContent = "";
  emailError.textContent = "";
  passwordError.textContent = "";
  formSuccess.textContent = "";

  let isValid = true;

  // Name validation
  if (name === "") {
    nameError.textContent = "Name cannot be empty!";
    isValid = false;
  }

  // Email validation (simple regex)
  let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.match(emailPattern)) {
    emailError.textContent = "Enter a valid email!";
    isValid = false;
  }

  // Password validation (min 6 chars)
  if (password.length < 6) {
    passwordError.textContent = "Password must be at least 6 characters!";
    isValid = false;
  }

  // If all valid
  if (isValid) {
    formSuccess.textContent = "The Form has been submitted successfully!✅";
  }
});

