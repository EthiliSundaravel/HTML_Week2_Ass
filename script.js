const newLocal = male.checked ? "male" : "female";
function getGender() {
    return document.querySelector('input[name="gender"]:checked')
}
function validateForm() {
    let x = document.forms["frmContact"]["lastname"].value;
    if (x == "") {
      alert("Name must be filled out");
      return false;
    }
  }
function fieldValidation(field, validationFunction) {
    if (field == null) return false;
   
    let isFieldValid = validationFunction(field.value)
    if (!isFieldValid) {
    field.className = 'placeholderRed';
    } else {
    field.className = '';
    }
   
    return isFieldValid;
   }
   document.addEventListener("DOMContentLoaded", function() {
    fields.firstName = document.getElementById('firstName');
    fields.lastName = document.getElementById('lastName');
    fields.email = document.getElementById('email');
    fields.address = document.getElementById('address');
    fields.houseNumber = document.getElementById('houseNumber');
    fields.country = document.getElementById('country');
    fields.password = document.getElementById('password');
    fields.passwordCheck = document.getElementById('passwordCheck');
    fields.newsletter = document.getElementById('newsletter');
    fields.question = document.getElementById('question');
})
    function isNotEmpty(value) {
    if (value == null || typeof value == 'undefined' ) return false;
    return (value.length > 0);

}
   function isNumber(num) {
    return (num.length > 0) && !isNaN(num);
}
    function isEmail(email) {
    let regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    return regex.test(String(email).toLowerCase());
   }
   function isPasswordValid(password) {
    if (password.length > 8) {
    return true;
    }
    return false
    alert("password should be greater than 8 digits");
   }

  function isValid() {
    var valid = true;
    
    valid &= fieldValidation(fields.firstName, isNotEmpty);
    valid &= fieldValidation(fields.lastName, isNotEmpty);
    valid &= fieldValidation(fields.gender, isNotEmpty);
    valid &= fieldValidation(fields.address, isNotEmpty);
    valid &= fieldValidation(fields.country, isNotEmpty);
    valid &= fieldValidation(fields.email, isEmail);
    valid &= fieldValidation(fields.houseNumber, isNumber);
    valid &= fieldValidation(fields.password, isPasswordValid);
    valid &= fieldValidation(fields.passwordCheck, isPasswordValid);
    valid &= fieldValidation(fields.question, isNotEmpty);
    valid &= arePasswordsEqual();
   
    return valid;
   }
  