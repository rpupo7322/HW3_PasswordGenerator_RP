//starting variables
var slider = document.getElementById("length");
var output = document.getElementById("demo");
var charactersList = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ", "abcdefghijklmnopqrstuvwxyz",
"0123456789", "!@#$%^&*"];
var generateBtn = document.querySelector("#generate");
var submitBtn = document.querySelector("#submit");

//initialize slider
output.innerHTML = slider.value; 


// Add event listener to generate & submit buttons
submitBtn.addEventListener("click", submit);
generateBtn.addEventListener("click", popup);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Generate password function
function generatePassword(len, up, low, num, spec) {
  var length = len;
  var characters = getCharacters(up, low, num, spec);
  var pass = "";
  for (var i = 0, n = characters.length; i < length; ++i) {
      pass += characters.charAt(Math.floor(Math.random() * n));
    }
    var passw = ensureValidity(pass, up, low, num, spec);
    var passwordText = document.querySelector("#password");
    
    passwordText.value = passw;
    
}

//take user input from the popup
function submit() {
    var len = document.getElementById("length").value;
    var upper = document.getElementById("upper").checked;
    var lower = document.getElementById("lower").checked;
    var number = document.getElementById("numbers").checked;
    var special = document.getElementById("special").checked;

    generatePassword(len, upper, lower, number, special);
    closePopup();
}

// build character list from user selection
function getCharacters(a, b, c, d) {
    inputs = [a, b, c, d]
    chars = ''
    for(i = 0; i < charactersList.length; i++) {
        if (inputs[i]) {
            chars += charactersList[i];
        }
    }
    return chars;
}

//make sure password contains at least one character from 
// each character set selected by user
function ensureValidity (pass, up, low, num, spec) {
    var lockedUp = 129, lockedLow = 129, lockedNum = 129, lockedSpec = 129;
    var pass2 = pass.split("");
    console.log("pass2" , pass2)
    if (up) {
        lockedUp = Math.floor(Math.random() * pass.length);
        pass2[lockedUp] = charactersList[0].charAt(Math.floor(Math.random() * charactersList[0].length));
    }
    if (low) {
        do {
            lockedLow = Math.floor(Math.random() * pass.length)
        } while (lockedLow === lockedUp)
        pass2[lockedLow] = charactersList[1].charAt(Math.floor(Math.random() * charactersList[1].length))
    }
    if (num) {
        do {
            lockedNum = Math.floor(Math.random() * pass.length)
        } while (lockedNum === lockedUp || lockedNum === lockedLow)
        pass2[lockedNum] = charactersList[2].charAt(Math.floor(Math.random() * charactersList[2].length))
    }
    if (spec) {
        do {
            lockedSpec = Math.floor(Math.random() * pass.length)
        } while (lockedSpec === lockedUp || lockedSpec === lockedLow || lockedSpec === lockedNum)
        pass2[lockedSpec] = charactersList[3].charAt(Math.floor(Math.random() * charactersList[3].length))
    }
    console.log(pass2);
    var pass3 = pass2.join("");
    console.log("Upper:", lockedUp, "Lower:", lockedLow, "Numeric:", lockedNum, "Special:", lockedSpec)
    return pass3;
}


// open popup 
function popup () {
    var popwindow = document.getElementById("popup");
    popwindow.style.display = "block";

}

// close popup
function closePopup () {
    var popwindow = document.getElementById("popup");
    popwindow.style.display = "none";
}


// Update slider
slider.oninput = function() {
  output.innerHTML = this.value;
}