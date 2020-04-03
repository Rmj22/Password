var generate = document.querySelector("#generate");
var copyPassword = document.querySelector("#password_done");

//Arrays
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = lowercase.toUpperCase();
var numbers = "0123456789";
// use "\" to define the (") as a string 
var specialChar = " !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";


// check for character length
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

// check to see if user wants special characters
function getSpecialChar(){
    while (useSpecialChar === "null"){
        useSpecialChar = confirm("Did you add special characters?");
        console.log(useSpecialChar);
    }
}
// function that selects a random string from passwordBowl and then adds it to passwordFinal.
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