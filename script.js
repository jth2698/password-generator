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

// Create function to prompt user for password length and character types and to store answers
function prompts() {

    // userLength prompt
    userLength = parseInt(prompt("How long should your password be? Choose between 8 and 128 characters."));

    // Validate userLength
    while (userLength < 8 || userLength > 128) {
        alert("Invalid input.");
        userLength = parseInt(prompt("How long should your password be? Choose between 8 and 128 characters."));
    }

    // Create user character prompts and return boolean values into array
    var userLowerCase = confirm("Include lower case?");
    var userUpperCase = confirm("Include upper case?");
    var userNumbers = confirm("Include numbers?");
    var userSpecialChars = confirm("Include special characters?");
    var userCharPrompts = [userLowerCase, userUpperCase, userNumbers, userSpecialChars];

    // Validate that user has confirmed at least one character set and restart function if not
    for (var i = 0; i < 1; i++) {
        if (userCharPrompts[0] === true) {
            userChoices = userChoices.concat(allLowerCase);
        }
        if (userCharPrompts[1] === true) {
            userChoices = userChoices.concat(allUpperCase);
        }
        if (userCharPrompts[2] === true) {
            userChoices = userChoices.concat(allNumbers);
        }
        if (userCharPrompts[3] === true) {
            userChoices = userChoices.concat(allSpecialChars);
        }
        if (userCharPrompts[0] === false && userCharPrompts[1] === false && userCharPrompts[2] === false && userCharPrompts[3] === false) {
            alert("You must allow at least one character type.");
            prompts();
        }
    }
}

// Create function to trigger user prompts and to generate password by looping over resulting userChoices array
function generatePassword() {
    prompts();
    for (var i = 0; i < userLength; i++) {
        var randomArrayNumber = Math.floor((Math.random() * userChoices.length));
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