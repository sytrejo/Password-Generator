document.querySelector("#generate").addEventListener("click", writePassword);

var confirmLength = "";
var confirmNumber;
var confirmSymbols;
var confirmUpperCase;
var confirmLowerCase;


number = [0,1,2,3,4,5,6,7,8,9];
symbols = ["!","@","#","$","%","^","&","*","(",")","-","_","=","+","[","]"];
upperCase = ["A","B","C","D","E","F","G", "H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

function generatePassword(){
  var confirmLength = parseInt(prompt("Input the number of characters in password? min: 8 max: 128"));

    while(!confirmLength || (confirmLength < 8 || confirmLength > 128)){
      alert("Please, enter a valid number of characters between 8 and 128.");
      var confirmLength = parseInt(prompt("Input the number of characters for your password? min: 8 max: 128"));
    } alert ("Your password will have " + confirmLength + " characters.");

    var confirmNumber = confirm ("Would you like your password to include numbers?");
    var confirmSymbols = confirm ("Would you like your password to include symbols?");
    var confirmUpperCase = confirm ("Would you like your password to include Upper Case letters?");
    var confirmLowerCase = confirm ("Would you like your password to include Lower Case letters?");

      while ((confirmUpperCase === false) && (confirmNumber === false)  && (confirmSymbols === false)  && (confirmLowerCase === false)){
        alert ("Please select a valid criteria for your password!");
        var confirmNumber = confirm ("Would you like your password to include numbers?");
        var confirmSymbols = confirm ("Would you like your password to include symbols?");
        var confirmUpperCase = confirm ("Would you like your password to include Upper Case letters?");
        var confirmLowerCase = confirm ("Would you like your password to include Lower Case letters?");
      }

      var passwordText = []

    if(confirmLowerCase){
      passwordText = passwordText.concat(lowerCase)
    }
    if(confirmUpperCase){
      passwordText = passwordText.concat(upperCase)
    }
    if(confirmSymbols){
      passwordText = passwordText.concat(symbols)
    }
    if(confirmNumber){
      passwordText = passwordText.concat(number)
    }

console.log (passwordText)

var randomPassword = ""
      
for (var i = 0; i < confirmLength; i++) {
  randomPassword = randomPassword + passwordText[Math.floor(Math.random() * passwordText.length)];
  console.log(randomPassword)
}
return randomPassword;
}


function writePassword() {
var password = generatePassword();
var passwordText = document.querySelector("#password");

passwordText.value = password;
}