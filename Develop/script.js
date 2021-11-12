document.querySelector("#generate").addEventListener("click", generatePassword);

var confirmLength = "";
var confirmNumber;
var confirmSymbols;
var confirmUpperCase;
var confirmLowerCase;


number = [0,1,2,3,4,5,6,7,8,9];
symbols = ["!","@","#","$","%","^","&","*","(",")","-","_","=","+","[","]"];
upperCase = ["A","B","C","D","E","F","G", "H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
space = [];

function generatePassword(){
  var confirmLength = parseInt(prompt("Input the number of characters for your password? min: 8 max: 128"));
  while (!confirmLength || (confirmLength < 8 || confirmLength > 128)){
    alert("Please, enter a valid number of characters between 8 and 128.");
    var confirmLength = parseInt(prompt("Input the number of characters for your password? min: 8 max: 128"));
  } if (confirmLength && confirmLength >= 8 && confirmLength <= 128)
    alert ("Your password will have " + confirmLength + " characters.");
    var confirmNumber = confirm ("Would you like your password to include numbers?");
    var confirmSymbols = confirm ("Would you like your password to include symbols?");
    var confirmUpperCase = confirm ("Would you like your password to include Upper Case letters?");
    var confirmLowerCase = confirm ("Would you like your password to include Lower Case letters?");
      if ((confirmUpperCase === false) && (confirmNumber === false)  && (confirmSymbols === false)  && (confirmLowerCase === false))
        alert ("Please select a valid criteria for your password!");
        // var confirmNumber = confirm ("Would you like your password to include numbers?");
        // var confirmSymbols = confirm ("Would you like your password to include symbols?");
        // var confirmUpperCase = confirm ("Would you like your password to include Upper Case letters?");
        // var confirmLowerCase = confirm ("Would you like your password to include Lower Case letters?");}
  
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

//   } else if (confirmSymbols && confirmUpperCase && confirmLowerCase && confirmNumber){
//       selections = symbols.concat(number, lowerCase, upperCase);
//   } else if (confirmSymbols && confirmUpperCase && confirmLowerCase){
//     selections = symbols.concat(lowerCase, upperCase);
//   } else if (confirmSymbols && confirmUpperCase){
//     selections = symbols.concat(upperCase);
//   }
// }

// var password = [];
// for (var i = 0; i < length; i++){
//   var pickedSelections = selections[Math.floor(Math.random())];
//   password.push(pickedSelections);
// }



// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");
//  passwordText.value = password;
// }

// generateBtn.addEventListener("click", writePassword);

// var selections;


// var generateBtn = document.querySelector("#generate");

// generateBtn.addEventListener("click",function (){
//   ps = generatePassword();
//   document.getElementById("password").placeholder = "Your password goes here!";
// })

