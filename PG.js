var generate = document.querySelector("#generate");
var copyPassword = document.querySelector("#password_done");
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = lowercase.toUpperCase();
var numbers = "0123456789";
var specialChar = " !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";



function getCharacterLength(){
    while (characterLength === "null"){
        console.log(characterLength);
        characterLength = prompt("How long would you like your password to be?");
        if (characterLength < 8 || characterLength > 128){
            alert ("Character length MUST be 8-128.")
            characterLength = "null";
        }
        else{
        console.log("Password length = " + characterLength);
        }
    } 
}

function getSpecialChar(){
    while (useSpecialChar === "null"){
        useSpecialChar = confirm("Did you add special characters?");
        console.log(useSpecialChar);
    }
}

function createPassword(){
    if (useSpecialChar){
        passwordBowl = lowercase + uppercase + numbers + specialChar;
        console.log("passwordBowl = " + passwordBowl);
        for (let i = 0; i < characterLength; i++){
            passwordFinal = passwordFinal + passwordBowl.charAt(Math.floor(Math.random() * passwordBowl.length));
        } 
        document.getElementById("password").textContent = passwordFinal;
        console.log("passwordFinal = " + passwordFinal);
    }

    else{
        passwordBowl = lowercase + uppercase + numbers;
        console.log("passwordBowl = " + passwordBowl);
        for (let i = 0; i < characterLength; i++){
            passwordFinal = passwordFinal + passwordBowl.charAt(Math.floor(Math.random() * passwordBowl.length));
        } 
        document.getElementById("password").textContent = passwordFinal;
        console.log("passwordFinal = " + passwordFinal);
    }
}


function resetPassword(){
    passwordBowl = "null";
    characterLength = "null";
    useSpecialChar = "null";
    passwordFinal = "";
}

generate.addEventListener("click", function(){
    resetPassword();
    getCharacterLength();
    getSpecialChar();
    createPassword();
    })

    copy.addEventListener("click", function () {
        copyPassword.select();
        document.execCommand("copy");
      })