const usernameEl = document.querySelector("#username");
const emailEl = document.querySelector("#email");
const passwordEl = document.querySelector("#password");
const confirmPasswordEl = document.querySelector("#confirm-password");

const form = document.querySelector("#signup");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let isUsernameValid = checkUsername(),
    isEmailValid = checkEmail(),
    isPasswordValid = checkPassword(),
    isConfirmPasswordValid = checkConfirmPassword();

  let isFormValid =
    isUsernameValid &&
    isEmailValid &&
    isPasswordValid &&
    isConfirmPasswordValid;

  if (isFormValid) {
    console.log("Submitted successfully...");
  } else {
    checkUsername();
  }
});

const isRequired = (value) => {
  return value === "" ? false : true;
};

const isEmailValid = (email) => {
  return email.includes("@") ? true : false;
};

const isPasswordValid = (password) => {
  return password.length > 7 ? true : false;
};

const showError = (input, message) => {
  const formField = input.parentElement;

  formField.classList.remove("success");
  formField.classList.add("error");

  const error = formField.querySelector("p");
  error.textContent = message;
};

const showSuccess = (input) => {
  const formField = input.parentElement;

  formField.classList.remove("error");
  formField.classList.add("success");

  const error = formField.querySelector("p");
  error.textContent = "";
};

const checkUsername = () => {
  let valid = false;
  const username = usernameEl.value.trim();

  if (!isRequired(username)) {
    showError(usernameEl, "Username cannot be blank.");
  } else {
    showSuccess(usernameEl);
    valid = true;
  }
  return valid;
};

const checkEmail = () => {
  let valid = false;
  const email = emailEl.value.trim();
  if (!isRequired(email)) {
    showError(emailEl, "Email cannot be blank.");
  } else if (!isEmailValid(email)) {
    showError(emailEl, "Email is not valid.");
  } else {
    showSuccess(emailEl);
    valid = true;
  }
  return valid;
};

const checkPassword = () => {
  let valid = false;

  const password = passwordEl.value.trim();

  if (!isRequired(password)) {
    showError(passwordEl, "Password cannot be blank.");
  } else if (!isPasswordValid(password)) {
    showError(passwordEl, "Password must has at least 6 characters");
  } else {
    showSuccess(passwordEl);
    valid = true;
  }

  return valid;
};

const checkConfirmPassword = () => {
  let valid = false;

  const confirmPassword = confirmPasswordEl.value.trim();
  const password = passwordEl.value.trim();

  if (!isRequired(confirmPassword)) {
    showError(confirmPasswordEl, "Please enter the password again");
  } else if (password !== confirmPassword) {
    showError(confirmPasswordEl, "Confirm password does not match");
  } else {
    showSuccess(confirmPasswordEl);
    valid = true;
  }

  return valid;
};
