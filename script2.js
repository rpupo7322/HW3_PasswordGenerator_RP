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
  console.log(len);
    var length = len;
  var characters = getCharacters(up, low, num, spec);
    var retVal = "";
  for (var i = 0, n = characters.length; i < length; ++i) {
      retVal += characters.charAt(Math.floor(Math.random() * n));
  }
  console.log(retVal);
  var passwordText = document.querySelector("#password");

  passwordText.value = retVal;

  return retVal;

}



// click button > popup
// hit submit button > input parameters into generate password


// -----------------------------


function popup () {
    var popwindow = document.getElementById("popup");
    popwindow.style.display = "block";

    // document.getElementById("popup").style.display = 'auto';
    console.log(popwindow);
}

function closePopup () {
    var popwindow = document.getElementById("popup");
    popwindow.style.display = "none";
    console.log(popwindow);
}

function getCharacters(a, b, c, d) {
    var charactersList = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ", "abcdefghijklmnopqrstuvwxyz",
         "0123456789", "!@#$%^&*"];
    
    inputs = [a, b, c, d]
    chars = ''

    for(i = 0; i < charactersList.length; i++) {
        if (inputs[i]) {
            chars += charactersList[i];
        }
    }
    console.log(chars);
    return chars;
}

function submit() {
    var len = document.getElementById("length").value;
    // console.log(len);
    var upper = document.getElementById("upper").checked;
    // console.log(len);
    var lower = document.getElementById("lower").checked;
    // console.log(len);
    var number = document.getElementById("numbers").checked;
    var special = document.getElementById("special").checked;

    console.log(len, upper, lower, special, number);
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