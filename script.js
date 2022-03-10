// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;
  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Creating a global scope for the character types

var numbers = [0,1,2,3,4,5,6,7,8,9];
var lowercaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var specialCharacters = ['!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ",", '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '['];


// Declaring the generatePassword function

function generatePassword() {

    // setting out the password length variables for user input.
    var passwordLength = prompt('How many characters would you like the password to contain?');
    if (passwordLength == null){
        return null;
    }
    
    // setting out the password length between 8 and 128.

    if (passwordLength < 8 || passwordLength > 128){
        alert("password needs to be between 8 and 128");
        return;
    }

    // Getting the user to confirm characters they want included in their password.

    var hasLowercaseLetters = confirm('Click Ok to include lowercase character');

    var hasNumbers = confirm('Click Ok to include numbers character');
   
    var hasUppercaseLetters = confirm('Click Ok to include uppercase character');
    
    var hasSpecialCharacters = confirm('Click Ok to include special character');

    // Creating an array with a variable name possibleCharacters which the user's choices.
    var possibleCharacters = [];

    // Concatenating the user's choice in a possibeCharacters array.
    if (hasLowercaseLetters){
        possibleCharacters = possibleCharacters.concat(lowercaseLetters);
    }

    if (hasNumbers){
        possibleCharacters = possibleCharacters.concat(numbers);
    }

    if (hasUppercaseLetters){
        possibleCharacters = possibleCharacters.concat(uppercaseLetters);
    }

    if (hasSpecialCharacters){
        possibleCharacters = possibleCharacters.concat(specialCharacters);
    }

    // Creating password array to put user's final choice to return.
    var password = [];

    // Using for-loop to withdraw randomly from the possibleCharacters to put in password variable.
    for (var i = 0; i < passwordLength; i++) {
        var randomIndex = Math.floor(Math.random() * possibleCharacters.length);
        
        password = password.concat(possibleCharacters[randomIndex]);
    }

    // creating a guranteedPassword array to make sure user's choice are always included in the final password.
    var guranteedPassword = [];

    // Concatenating the user's guranteed choice to be in cluded in the password array.
    if (hasLowercaseLetters){
        guranteedPassword = guranteedPassword.concat(lowercaseLetters[Math.floor(Math.random() * lowercaseLetters.length)]);
    }
    if (hasUppercaseLetters){
        guranteedPassword = guranteedPassword.concat(uppercaseLetters[Math.floor(Math.random() * uppercaseLetters.length)]);
    }
    if (hasNumbers){
        guranteedPassword = guranteedPassword.concat(numbers[Math.floor(Math.random() * numbers.length)]);
    }
    if (hasSpecialCharacters){
        guranteedPassword = guranteedPassword.concat(specialCharacters[Math.floor(Math.random() * specialCharacters.length)]);
    }

    //using for loop to loop over to make sure user selection are included in the password
    for (var i = 0; i < guranteedPassword.length; i++) {
        password [i]= guranteedPassword[i];
    }
    
    return password.join('');
};
