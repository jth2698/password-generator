// Assignment Code
var generateBtn = document.querySelector("#generate");

// Create arrays to hold all letters, numbers, and special characters. Create variable for the password length selected by user, an empty array to hold characters associated with user prompts, and a variable with an empty string to hold the password. 
var allLowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var allUpperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var allNumbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var allSpecialChars = ["\!", "\"", "\#", "\$", "\%", "\&", "\'", "\(", "\)", "\*", "\+", "\,", "\-", "\,", "\.", "\/", "\:", "\;", "\<", "\=", "\>", "\?", "\@", "\[", "\\", "\]", "\^", "\_", "\`", "\{", "\|", "\}", "\~"];
var userLength;
var userChoices = [];
var password = "";

// Creat function to prompt user for password length and character types and to store answers
function prompts() {

    // userLength prompt
    userLength = parseInt(prompt("How long should your password be? Choose between 8 and 128 characters."));

    // Validate userLength
    if (userLength < 8 || userLength > 128) {
        alert("Invalid input.");
    } else {
        // userChoices prompts
        var userLowerCase = confirm("Include lower case?");
        if (userLowerCase === true) {
            userChoices = userChoices.concat(allLowerCase);
        }
        var userUpperCase = confirm("Include upper case?");
        if (userUpperCase === true) {
            userChoices = userChoices.concat(allUpperCase);
        }
        var userNumbers = confirm("Include numbers?");
        if (userNumbers === true) {
            userChoices = userChoices.concat(allNumbers);
        }
        var userSpecialChars = confirm("Include special characters?");
        if (userSpecialChars === true) {
            userChoices = userChoices.concat(allSpecialChars);
        }
    }
}

// Create function to trigger user prompts and to generate password by looping over resulting userChoices array
function generatePassword() {
    prompts();
    for (var i = 0; i < userLength; i++) {
        var randomArrayNumber = Math.floor((Math.random() * userChoices.length) + 1);
        password = password + userChoices[randomArrayNumber];
    }
}

// Create function to clear password box and to write generatePassword() password to the #password input
function writePassword() {
    password = "";
    document.getElementById("password").innerHTML = password;
    generatePassword();
    document.getElementById("password").innerHTML = password;
}

// Add event listener to generate button, trigger writePassword() on click
generateBtn.addEventListener("click", writePassword);