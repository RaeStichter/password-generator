// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// ---------------------------------- FUNCTION CALLED ON CLICK -----------------------------------------
// Write password to the #password input
function writePassword() {
  // THIS FUNCTION CALLS ALL OTHER FUNCTIONS
  getPasswordLength(); // get length of password desired from user
  promptSelect(); // user selected promts and verification that at least on is selected
  availableCharacters(); // based on selected promts, which characters will be available
  generatePassword(); // generate a random password given the length of password and the available characters
  document.getElementById("password").innerHTML = password.value; // display back to the HTML page
}

// --------------------------------- FUNCTIONS TO GET INFO FROM PROMPTS-------------------------------------

// --------------------------------- LENGTH FUNCTION -------------------------------------------------------
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
      window.alert("Please enter a number between 8 and 128.");
      return getPasswordLength();
    }
  }
  // if integer was not entered, return prompt to try again
  else {
    window.alert("Please enter a number.");
    return getPasswordLength();
  }
}

// --------------------------------- SET CRITERIA FOR PASSWORD AND VALIDATE ---------------------------------
var promptSelect = function() {
  // this function will run through all of the prompt char types and validate entries at the end
  if (
    passwordSelections.passwordLowercase === "" ||
    passwordSelections.passwordUppercase === "" ||
    passwordSelections.passwordNumeric === "" ||
    passwordSelections.passwordSpecial === ""
  ) {
      // LOWERCASE FUNCTION
      // confirm if the player would like their password to include lowercase letters
      var confirmLowercase = window.confirm("Would you like lowercase letters in your password?");
      // if yes (true), set to true
      if (confirmLowercase) {
        window.alert("Your password WILL include lowercase letters.");
        passwordSelections.passwordLowercase = true;
      }
      // if cancel (false), set to false
      else {
        window.alert("Your password WILL NOT include lowercase letters.");
        passwordSelections.passwordLowercase = false;
      }

      // UPPERCASE FUNCTION
      // confirm if the player would like their password to include uppercase letters
      var confirmUppercase = window.confirm("Would you like uppercase letters in your password?");
      // if yes (true), set to true
      if (confirmUppercase) {
        window.alert("Your password WILL include uppercase letters.");
        passwordSelections.passwordUppercase = true;
      }
      // if cancel (false), set to false
      else {
        window.alert("Your password WILL NOT include uppercase letters.");
        passwordSelections.passwordUppercase = false;
      }

      // NUMERIC FUNCTION
      // confirm if the player would like their password to include numeric values
      var confirmNumeric = window.confirm("Would you like numbers in your password?");
      // if yes (true), set to true
      if (confirmNumeric) {
        window.alert("Your password WILL include numbers.");
        passwordSelections.passwordNumeric = true;
      }
      // if cancel (false), set to false
      else {
        window.alert("Your password WILL NOT include numbers.");
        passwordSelections.passwordNumeric = false;
      }

      // SPECIAL CHARACTER FUNCTION
      // confirm if the player would like their password to include special characters
      var confirmSpecial = window.confirm("Would you like special characters in your password?");
      // if yes (true), set to true
      if (confirmSpecial) {
        window.alert("Your password WILL include special characters.");
        passwordSelections.passwordSpecial = true;
      }
      // if cancel (false), set to false
      else {
        window.alert("Your password WILL NOT include special characters.");
        passwordSelections.passwordSpecial = false;
      }
  }
  // --------------------------VALIDATE THE RESPOSNSES-----------------------
  if (
    // ensure that at least one character type is selected
    passwordSelections.passwordLowercase === false &&
    passwordSelections.passwordUppercase === false &&
    passwordSelections.passwordNumeric === false &&
    passwordSelections.passwordSpecial === false
  ) {
    // if all responses were declined
    window.alert("You have not chosen any character types! Please return and select at least one character type.");
    // reset saved value so the questions will cycle
    passwordSelections.reset();
    // restart this function
    promptSelect();
  }
  else {
    // if there is at least one character type indicated, return for next instruction
    return
  }
}

// --------------------------------- AVAILABLE CHARACTERS ----------------------------------------------------
// based on the user's selections, this function will determine which characters are applicable.
var availableCharacters = function() {
  // if lowercase values are wanted, add them to availChar.  If not, do nothing.
  if (passwordSelections.passwordLowercase === true) {
    availChar = passwordText.lowercase;
  }
  // if uppercase values are wanted, add them to availChar.  If not, do nothing.
  if (passwordSelections.passwordUppercase === true) {
    availChar = availChar + passwordText.uppercase;
  }
  // if numeric values are wanted, add them to availChar.  If not, do nothing.
  if (passwordSelections.passwordNumeric === true) {
    availChar = availChar + passwordText.number;
  }
  // if special values are wanted, add them to availChar.  If not, do nothing.
  if (passwordSelections.passwordSpecial === true) {
    availChar = availChar + passwordText.special;
  }
  console.log(availChar);
  return availChar;
}

// --------------------------------- PASSWORD GENERATION ----------------------------------------------------
var generatePassword = function () {
    // for loop which will take the availChar string and randomize a password based on the length of password desired
    var pass = "";
  for (i = 0; i < passwordSelections.passwordLength; i++) {
    // based on the length of the available characters, find whole random number.
    var characters = Math.floor(Math.random() * availChar.length + 1);

    // each iteration through the loop add the additional character until the desired password length is reached.
    pass += availChar.charAt(characters);

  }
  // Set the values of the final password object. These will be passed to HTML
  password.value = pass;
  password.length = passwordSelections.passwordLength;
  console.log("password value: " + password.value + ". Password length: " + password.length);
  }

// ---------------------------------- OBJECTS AND VARIABLES -------------------------------------------------
// passwordSelections is an object which will hold all of the answers to the prompts
// each element will be set in the above functions
var passwordSelections = {
  passwordLength: "",
  passwordLowercase: "", // getLowercase:
  passwordUppercase: "", // getUppercase: 
  passwordNumeric: "", // getNumeric:
  passwordSpecial: "", // getSpecial:
  reset: function() {
    this.passwordLowercase = "";
    this.passwordUppercase = "";
    this.confirmNumeric = "";
    this.confirmSpecial = "";
  }
}

// These are the possible characters for the random password generation.
var passwordText = {
  lowercase: "abcdefghijklmnopqrstuvwxyz",
  uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  number: "0123456789",
  special: "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
}

// object to hold the final password information.
var Password = {
  value: "",
  length: ''
}

// ----------------------------------------- EVENT LISTENER --------------------------------
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);