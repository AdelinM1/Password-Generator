
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;
}

let generateBtn = document.querySelector("#generate");

let specialCharacters = ['@','%','+','/',"'",'!','#','$','?',':',',',')','(','}','{',']','[','~','-','_','.'];

let numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

let lowerCasedCharacters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','x','y','z'];

let upperCasedCharacters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','V','X','Y','Z'];

let allChars = specialCharacters.concat(numericCharacters, lowerCasedCharacters, upperCasedCharacters);

function generatePassword() {
  let passwordLength = prompt("Enter a password between 8 and 128 characters:");
  passwordLength = parseInt(passwordLength);

  if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    alert("Enter a valid password between 8 and 128 characters.");
    return "";
  }

  let generatedPassword = "";

  for (let i = 0; i < passwordLength; i++) {
    let randomIndex = Math.floor(Math.random() * allChars.length);
    generatedPassword += allChars[randomIndex];
  }

  return generatedPassword;
}

generateBtn.addEventListener("click", writePassword);

