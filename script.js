// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", popup);


// Add event listener to submit button
var submitBtn = document.querySelector("#submit");
submitBtn.addEventListener("click", submit);



// Generate password function
function generatePassword(len, up, low, num, spec) {
//   console.log(len);
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

// replace a string with string.index(4) = newVal

function ensureValidity (pass, up, low, num, spec) {
    var lockedUp = 129, lockedLow = 129, lockedNum = 129, lockedSpec = 129;
    var pass2 = pass.split("");
    console.log("pass2" , pass2)
    // console.log("ensurevalidity:", pass, up, low, num, spec)
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
var charactersList = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ", "abcdefghijklmnopqrstuvwxyz",
"0123456789", "!@#$%^&*"];

// -----------------------------

function popup () {
    var popwindow = document.getElementById("popup");
    popwindow.style.display = "block";

}

function closePopup () {
    var popwindow = document.getElementById("popup");
    popwindow.style.display = "none";
}


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

function submit() {
    var len = document.getElementById("length").value;
    var upper = document.getElementById("upper").checked;
    var lower = document.getElementById("lower").checked;
    var number = document.getElementById("numbers").checked;
    var special = document.getElementById("special").checked;

    generatePassword(len, upper, lower, number, special);
    closePopup();
}


var slider = document.getElementById("length");
var output = document.getElementById("demo");
output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  output.innerHTML = this.value;
}