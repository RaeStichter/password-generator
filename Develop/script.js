// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  //var password = generatePassword();
  //var passwordText = document.querySelector("#password");

  //passwordText.value = password;
  console.log("Function reached");
  getPasswordLength();
  getLowercase();
  getUppercase();
  getNumeric();
  getSpecial();
  console.log(passwordSelections);
  
}

// ---------------------------------FUNCTIONS TO GET INFO FROM PROMPTS-------------------------------------

// LENGTH FUNCTION
var getPasswordLength = function() {
  var pwLength = "";

  while (pwLength === "" || pwLength === null) {
    pwLength = prompt("What is the length of your password?");
  }
  pwLength = parseInt(pwLength);
  // Check to make sure the user entered a number and not a letter or special character
  // if an integer was entered
  if (Number.isInteger(pwLength)) {
    // if the integer is between 8 and 128 in length
    if (pwLength >=8 && pwLength <= 128) {
      console.log("You have entered " + pwLength + " as your password length.");
      passwordSelections.passwordLength = pwLength; 
      return pwLength;
    }
    // if the integer is not between 8 and 128, return prompt to try again
    else {
      window.alert("please enter a number between 8 and 128");
      return getPasswordLength();
    }
  }
  // if integer was not entered, return prompt to try again
  else {
    window.alert("please enter a number");
    return getPasswordLength();
  }
}

// LOWERCASE FUNCTION
var getLowercase = function() {
  // confirm if the player would like their password to include lowercase letters
  var confirmLowercase = window.confirm("Would you like lowercase letters in your password?");

  // if yes (true), set getLowercase to true
  if (confirmLowercase) {
    window.alert("your password will include lowercase letters.");
    passwordSelections.passwordLowercase = true;
    return true;
  }
  else {
    window.alert("your password will not include lowercase letters.");
    passwordSelections.passwordLowercase = false;
    return false;
  }
}

// UPPERCASE FUNCTION
var getUppercase = function() {
  // confirm if the player would like their password to include lowercase letters
  var confirmUppercase = window.confirm("Would you like uppercase letters in your password?");

  // if yes (true), set getUppercase to true
  if (confirmUppercase) {
    window.alert("your password will include uppercase letters.");
    passwordSelections.passwordUppercase = true;
    return true;
  }
  else {
    window.alert("your password will not include uppercase letters.");
    passwordSelections.passwordUppercase = false;
    return false;
  }
}

// NUMERIC FUNCTION
var getNumeric = function() {
  // confirm if the player would like their password to include lowercase letters
  var confirmNumeric = window.confirm("Would you like numbers in your password?");

  // if yes (true), set getNumeric to true
  if (confirmNumeric) {
    window.alert("your password will include numbers.");
    passwordSelections.passwordNumeric = true;
    return true;
  }
  else {
    window.alert("your password will not include numbers.");
    passwordSelections.passwordNumeric = false;
    return false;
  }
}

// SPECIAL CHARACTER FUNCTION
var getSpecial = function() {
  // confirm if the player would like their password to include lowercase letters
  var confirmSpecial = window.confirm("Would you like special characters in your password?");

  // if yes (true), set getNumeric to true
  if (confirmSpecial) {
    window.alert("your password will include special characters.");
    passwordSelections.passwordSpecial = true;
    return true;
  }
  else {
    window.alert("your password will not include special characters.");
    passwordSelections.passwordSpecial = false;
    return false;
  }
}

// passwordSelections is an object which will hold all of the answers to the prompts
// each element will call another function to generate this information
var passwordSelections = {
  passwordLength: "",
  passwordLowercase: "", // getLowercase:
  passwordUppercase: "", // getUppercase: 
  passwordNumeric: "", // getNumeric:
  passwordSpecial: "" // getSpecial:
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);