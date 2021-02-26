//function to display slide
const handleSlide = () => {
  let contentElement = document.getElementById("slideDisplay");
  let buttonElement = document.getElementById("toggleSlide");
  contentElement.classList.toggle("showSlide");
  buttonElement.classList.toggle("dispalyButtonRotate");

  let screenSize = window.document.body.clientWidth;

  if (screenSize < 1024 && contentElement.classList.contains("showSlide")) {
    contentElement.scrollIntoView();
  }
};

// validate email
const validateEmailEntered = (email) => {
  let reg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return reg.test(email);
};

//validate mobile
const validateMobileEntered = (mobile) => {
  let reg = /^\+[0-9 ]+/;
  return reg.test(mobile);
};

//validate date
const validateDateEntered = (date) => {
  let reg = /^\d{2}\/\d{2}\/\d{4}$/;
  return reg.test(date);
};

//validate customer id
const validateCustomerIdEntered = (customer) => {
  let reg = /^\d{6}/; // only checked if starts with 6 numbers
  return reg.test(customer);
};

// function to check validity of fields
const handleValidation = () => {
  let emailElement = document.getElementById("emailInput");
  let emailLabelElement = document.getElementById("emailLabel");
  let dateElement = document.getElementById("dateInput");
  let mobileElement = document.getElementById("mobileInput");
  let customerElement = document.getElementById("customerInput");
  let RequiredTextElement = document.getElementById("requiredText");

  let mobile = mobileElement.value;
  let customer = customerElement.value;
  let email = emailElement.value;
  let date = dateElement.value;

  //check validity of the email entered
  if (email === "" || validateEmailEntered(email)) {
    RequiredTextElement.classList.remove("required");
    emailElement.classList.remove("error", "required");
    emailLabelElement.classList.remove("required", "ErrorRequired");
  } else {
    RequiredTextElement.classList.add("required");
    emailElement.classList.add("error", "required");
    emailLabelElement.classList.add("required", "ErrorRequired");
  }

  //check validity of mobile number entered
  if (mobile === "" || validateMobileEntered(mobile)) {
    mobileElement.classList.remove("error");
  } else {
    mobileElement.classList.add("error");
  }

  //check validity of the date entered
  if (date === "" || validateDateEntered(date)) {
    dateElement.classList.remove("error");
  } else {
    dateElement.classList.add("error");
  }
  
  //check validity of customer Id entered
  if (customer === "" || validateCustomerIdEntered(customer)) {
    customerElement.classList.remove("error");
  } else {
    customerElement.classList.add("error");
  }
};

//event listeners for input fields and toggle button
document
  .getElementById("mobileInput")
  .addEventListener("blur", handleValidation);
document
  .getElementById("customerInput")
  .addEventListener("blur", handleValidation);
document.getElementById("toggleSlide").addEventListener("click", handleSlide);
document
  .getElementById("cancelButton")
  .addEventListener("mouseup", handleValidation);
document
  .getElementById("emailInput")
  .addEventListener("blur", handleValidation);
document.getElementById("dateInput").addEventListener("blur", handleValidation);
