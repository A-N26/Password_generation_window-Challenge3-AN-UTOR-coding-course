// Assignment code here

// List(or)array of keys to generate
var keys = {
  upperCase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  lowercase: "abcdefghijklmnopqrstuvwxyz",
  Numbers: "0123456789",
  Symbols: "!@#$%&'()*+,-./:;<=>?_~|{}[]^`",
};

// selection from the keys array
function lowercase() {
  return keys.lowercase[Math.floor(Math.random() * keys.lowercase.length)];
}

function upperCase() {
  return keys.upperCase[Math.floor(Math.random() * keys.upperCase.length)];
}

function Numbers() {
  return keys.Numbers[Math.floor(Math.random() * keys.Numbers.length)];
}

function Symbols() {
  return keys.Symbols[Math.floor(Math.random() * keys.Symbols.length)];
}
// for random key combinations in console
console.log(lowercase() + upperCase() + Numbers() + Symbols());

// functions to get response when prompted
var DesiredLength = "";
function generatePassword() {
  // to check for password length
  var DesiredLength = prompt(
    "Please input your desired length for the password"
  );

  if (DesiredLength < 8 || DesiredLength > 128) {
    var DesiredLength = alert(
      "Sorry!, selection can not be less than 8 characters nor exceed 128 characters. Please Try again."
    );
    var DesiredLength = prompt(
      "Please enter desired length between 8 and 128 characters."
    );
  }

  alert(
    "Thank-you!, Please confirm one or more from the following character selection dialogues"
  );

  // Array parameters for password generation
  var confirmSymbols = confirm(
    "Please confirm inclusion of symbols in your password."
  );
  var confirmNumbers = confirm(
    "Please confirm inclusion of numbers ranging, from 0 to 9, in your password."
  );
  var confirmlowercase = confirm(
    "Please confirm inclusion of lowercase characters in your password."
  );
  var confirmupperCase = confirm(
    "Please confirm inclusion of uppercase characters in your password."
  );

  // If/When one or more prompts are not selected.

  if (
    confirmSymbols === false &&
    confirmNumbers === false &&
    confirmlowercase === false &&
    confirmupperCase === false
  ) {
    alert("Please select atleast one character type and try again.");
    var confirmSymbols = confirm(
      "Please click yes to include symbols in your password."
    );
    var confirmNumbers = confirm(
      "Please click yes to include numbers ranging, from 0 to 9, in your password."
    );
    var confirmlowercase = confirm(
      "Please click yes to include lowercase characters in your password."
    );
    var confirmupperCase = confirm(
      "Please click yes to include uppercase characters in your password."
    );
  }
  // Function for password generation
  var password = [];
  if (confirmlowercase) {
    password += keys.lowercase;
  }
  if (confirmupperCase) {
    password += keys.upperCase;
  }
  if (confirmNumbers) {
    password += keys.Numbers;
  }
  if (confirmSymbols) {
    password += keys.Symbols;
  }
  return password;

  // function to randomize the password
  var randomizedP = "";
  for (i = 0; i < DesiredLength; i++) {
    randomizedP =
      randomizedP + password[Math.floor(Math.random() * password.length)];
  }
  return randomizedP;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
