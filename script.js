document.addEventListener("DOMContentLoaded", function() {
  const fields = {
      firstName: document.getElementById('firstName'),
      lastName: document.getElementById('lastName'),
      email: document.getElementById('email'),
      address: document.getElementById('address'),
      houseNumber: document.getElementById('houseNumber'),
      country: document.getElementById('country'),
      password: document.getElementById('password'),
      passwordCheck: document.getElementById('passwordCheck'),
      question: document.getElementById('question'),
  };

  function highlightInput(elm) {
      elm.style.background = "yellow";
  }

  function highlightOutput(elm) {
      elm.style.background = "white";
  }

  function chgupercase() {
      fields.lastName.value = fields.lastName.value.toUpperCase();
      fields.firstName.value = fields.firstName.value.toUpperCase();
  }

  function isNotEmpty(value) {
      return value && value.trim().length > 0;
  }

  function isNumber(num) {
      return num.length > 0 && !isNaN(num);
  }

  function isEmail(email) {
      const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
      return regex.test(String(email).toLowerCase());
  }

  function isPasswordValid(password) {
      return password.length >= 16;
  }

  function arePasswordsEqual() {
      return fields.password.value === fields.passwordCheck.value;
  }

  function fieldValidation(field, validationFunction, errorMessage) {
      if (!validationFunction(field.value)) {
          alert(errorMessage);
          field.className = 'placeholderRed'; // Highlight invalid field
          return false;
      } else {
          field.className = ''; // Clear highlight
          return true;
      }
  }

  function isValid() {
      let valid = true;

      valid = fieldValidation(fields.firstName, isNotEmpty, "First name is required.") && valid;
      valid = fieldValidation(fields.lastName, isNotEmpty, "Last name is required.") && valid;

      const gender = document.querySelector('input[name="gender"]:checked');
      if (!gender) {
          alert("Gender must be selected.");
          valid = false;
      }

      valid = fieldValidation(fields.address, isNotEmpty, "Address is required.") && valid;
      valid = fieldValidation(fields.country, value => value !== "", "Country must be selected.") && valid;
      valid = fieldValidation(fields.email, isEmail, "Email is not valid.") && valid;
      valid = fieldValidation(fields.houseNumber, isNumber, "House number must be a valid number.") && valid;
      valid = fieldValidation(fields.password, isPasswordValid, "Password must be at least 16 characters.") && valid;
      valid = fieldValidation(fields.passwordCheck, isPasswordValid, "Password confirmation must be at least 16 characters.") && valid;

      if (!arePasswordsEqual()) {
          alert("Passwords do not match.");
          valid = false;
      }

      return valid; // This should return false if any validation fails
  }

  const form = document.forms["frmContact"];
  form.onsubmit = function() {
      return isValid();
  };
});
