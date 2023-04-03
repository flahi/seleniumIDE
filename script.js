const registerForm = document.querySelector("#register-form");
const errorMessage = document.querySelector("#error-message");
const successMessage = document.querySelector("#success-message");

registerForm.addEventListener("submit", function(event) {
  event.preventDefault();

  const username = document.querySelector("#username").value.trim();
  const email = document.querySelector("#email").value.trim();
  const password = document.querySelector("#password").value.trim();
  const confirmPassword = document.querySelector("#confirm-password").value.trim();

  // Email validation regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Check if email is valid
  if (!emailRegex.test(email)) {
    errorMessage.textContent = "Invalid email format";
    successMessage.textContent = "";
    return;
  }

  // Check if passwords match and meet the criteria
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
  if (!passwordRegex.test(password)) {
    errorMessage.textContent = "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one number.";
    successMessage.textContent = "";
    return;
  }
  if (password !== confirmPassword) {
    errorMessage.textContent = "Passwords do not match";
    successMessage.textContent = "";
    return;
  }

  // Placeholder code to create new user account
  successMessage.textContent = `User account created`;
  errorMessage.textContent = "";
  registerForm.reset();
});
