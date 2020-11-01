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
  console.log(passwordSelections);

}

// ---------------FUNCTIONS TO GET INFO FROM PROMPTS--------------------
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

// passwordSelections is an object which will hold all of the answers to the prompts
// each element will call another function to generate this information
var passwordSelections = {
  passwordLength: "",
  // getUpperCase: 
  // getLowerCase:
  // getNumeric:
  // getSpecial:
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);