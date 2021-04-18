# HW3_PasswordGenerator_RP
This is the third homework, showing a password generator. It contains the following features:

    WHEN I click the button to generate a password
    THEN I am presented with a series of prompts for password criteria
    WHEN prompted for password criteria
    THEN I select which criteria to include in the password
    WHEN prompted for the length of the password
    THEN I choose a length of at least 8 characters and no more than 128 characters
    WHEN prompted for character types to include in the password
    THEN I choose lowercase, uppercase, numeric, and/or special characters
    WHEN I answer each prompt
    THEN my input should be validated and at least one character type should be selected
    WHEN all prompts are answered
    THEN a password is generated that matches the selected criteria
    WHEN the password is generated
    THEN the password is either displayed in an alert or written to the page

I decided to implement this using a popup for the user selections rather than a series of prompts, since a popup allowed me to get all of the user input in a single screen while forcing the user to input correct values (slider can only return a number for the length, checkboxes can only return booleans, whereas a prompt would open the possibility of invalid user input)

States of the site can be seen at with the following pictures:
1. Default state of the site before "Generate Password" button is clicked
https://github.com/rpupo7322/HW3_PasswordGenerator_RP/blob/main/websitePics/DefaultPage.PNG

2. The popup where user inputs his selections
https://github.com/rpupo7322/HW3_PasswordGenerator_RP/blob/main/websitePics/PopupPasswordPreferences.PNG

3. The generated password after user submits selections
https://github.com/rpupo7322/HW3_PasswordGenerator_RP/blob/main/websitePics/GeneratedPassword.PNG