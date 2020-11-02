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
  //getLowercase();
  //getUppercase();
  //getNumeric();
  //getSpecial();
  promptSelect();
  console.log(passwordSelections);
  //validateCharType();
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

// ---------------------------- SET CRITERIA FOR PASSWORD AND VALIDATE -------------------------------
var promptSelect = function() {
  // this function will run through all of the prompt char types and validate entries at the end
  if (
    passwordSelections.passwordLowercase === "" ||
    passwordSelections.passwordUppercase === "" ||
    passwordSelections.passwordNumeric === "" ||
    passwordSelections.passwordSpecial === ""
  ) {

  }
  // once if statement is complete, validate results











  // LOWERCASE FUNCTION
  // confirm if the player would like their password to include lowercase letters
  var confirmLowercase = window.confirm("Would you like lowercase letters in your password?");
  // if yes (true), set to true
  if (confirmLowercase) {
    window.alert("your password will include lowercase letters.");
    passwordSelections.passwordLowercase = true;
  }
  // if cancel (false), set to false
  else {
    window.alert("your password will not include lowercase letters.");
    passwordSelections.passwordLowercase = false;
  }

  // UPPERCASE FUNCTION
  // confirm if the player would like their password to include uppercase letters
  var confirmUppercase = window.confirm("Would you like uppercase letters in your password?");
  // if yes (true), set to true
  if (confirmUppercase) {
    window.alert("your password will include uppercase letters.");
    passwordSelections.passwordUppercase = true;
  }
  // if cancel (false), set to false
  else {
    window.alert("your password will not include uppercase letters.");
    passwordSelections.passwordUppercase = false;
  }

  // NUMERIC FUNCTION
  // confirm if the player would like their password to include numeric values
  var confirmNumeric = window.confirm("Would you like numbers in your password?");
  // if yes (true), set to true
  if (confirmNumeric) {
    window.alert("your password will include numbers.");
    passwordSelections.passwordNumeric = true;
  }
  // if cancel (false), set to false
  else {
    window.alert("your password will not include numbers.");
    passwordSelections.passwordNumeric = false;
  }

  // SPECIAL CHARACTER FUNCTION
  // confirm if the player would like their password to include special characters
  var confirmSpecial = window.confirm("Would you like special characters in your password?");
  // if yes (true), set to true
  if (confirmSpecial) {
    window.alert("your password will include special characters.");
    passwordSelections.passwordSpecial = true;
  }
  // if cancel (false), set to false
  else {
    window.alert("your password will not include special characters.");
    passwordSelections.passwordSpecial = false;
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
    window.alert("you have not chosen any character types! Please return and  select at least one character type.");
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

// passwordSelections is an object which will hold all of the answers to the prompts
// each element will call another function to generate this information
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


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);