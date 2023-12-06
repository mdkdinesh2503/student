// Javascript validation form submit button starts here
var attempt = 3;

function validateuser() {

    var UserName = document.getElementById("UserName").value;
    var Password = document.getElementById("Password").value;

    if (UserName == "mdk" && Password == "mdk") {

        var Destroy = document.getElementById("LoginHide");
        Destroy.classList.toggle('active');
        var UserLoginPopup = document.getElementById("UserLoginPopup");
        UserLoginPopup.classList.toggle('active');

        return false;

    }
    else if (UserName == "admin" && Password == "admin") {

        var Destroy1 = document.getElementById("LoginHide");
        Destroy1.classList.toggle('active');
        var AdminLoginPopup = document.getElementById("AdminLoginPopup");
        AdminLoginPopup.classList.toggle('active');

        return false;

    }
    else if (UserName == " " && Password == " ") {

        alert("Fields cannot be Empty!!");
        return false;

    }
    else {

        attempt--;
        alert("Invalid Crendentials\r\n" + "\tYou have only " + attempt + " attempt left!!!;");

        if (attempt == 0) {

            document.getElementById("UserName").disabled = true;
            document.getElementById("Password").disabled = true;
            document.getElementById("submit").disabled = true;

            const myTimeout = setTimeout(myGreeting, 5000);

            function myGreeting() {
                window.alert("Redirecting try Some other times to login in!!");
                window.location = "index.html";
                return false;
            }

        }
    }
}

// Javascript validation form submit button ends here

// Login Password visible part starts here

function myFunction() {
    var visible = document.getElementById("Password");
    if (visible.type === "password") {
        visible.type = "text";
    } else {
        visible.type = "password";
    }
}

// Login Password visible part ends here

// login page Enter key button submit starts here

var EnterKeyUser = document.getElementById("UserName");
EnterKeyUser.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("submit").click();
    return false;
  }
});

var EnterKeyPass = document.getElementById("Password");
EnterKeyPass.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("submit").click();
    return false;
  }
});

// login page Enter key button submit ends here

// Javascript validation form register starts here

function usernamevalidate() {

    var UsernameRegister = document.getElementById("username").value;
    var UserError = document.getElementById("username");
    var SuccessMsg = document.getElementById("usersuccessMsg");
    var ErrorMsg = document.getElementById("userErrorMsg");
    var uservalidate = "^[a-zA-Z]+$";

    if (!UsernameRegister.match(uservalidate)) {
        UserError.style.border = ".1rem solid red";
        UserError.style.boxShadow = ".3rem .3rem 0 #FFCCCB";
        ErrorMsg.style.visibility = "visible";
        SuccessMsg.style.display = "none";
        SuccessMsg.style.visibility = "hidden";
        ErrorMsg.style.display = "block";
        return false;
    }

    ErrorMsg.style.visibility = "hidden";
    SuccessMsg.style.display = "block";
    SuccessMsg.style.visibility = "visible";
    ErrorMsg.style.display = "none";
    UserError.style.border = ".1rem solid green";
    UserError.style.boxShadow = ".3rem .3rem 0 #90EE90";

}

function emailvalidate() {

    var emailRegister = document.getElementById("email").value;
    var emailError = document.getElementById("email");
    var SuccessMsg = document.getElementById("emailsuccessMsg");
    var ErrorMsg = document.getElementById("emailErrorMsg");
    var emvalidate = "^[0-9a-zA-Z]+[._]{0,1}[0-9a-zA-Z]+[@][a-zA-Z]+[.][a-zA-Z]{2,3}([.][a-zA-Z]{2,3}){0,1}$";

    if (!emailRegister.match(emvalidate)) {
        emailError.style.border = ".1rem solid red";
        emailError.style.boxShadow = ".3rem .3rem 0 #FFCCCB";
        ErrorMsg.style.visibility = "visible";
        SuccessMsg.style.display = "none";
        SuccessMsg.style.visibility = "hidden";
        ErrorMsg.style.display = "block";
        return false;
    }

    ErrorMsg.style.visibility = "hidden";
    SuccessMsg.style.display = "block";
    SuccessMsg.style.visibility = "visible";
    ErrorMsg.style.display = "none";
    emailError.style.border = ".1rem solid green";
    emailError.style.boxShadow = ".3rem .3rem 0 #90EE90";

}

function passwordvalidate() {

    var passwordRegister = document.getElementById("password").value;
    var passwordError = document.getElementById("password");
    var SuccessMsg = document.getElementById("passsuccessMsg");
    var ErrorMsg = document.getElementById("passErrorMsg");
    var passvalidate = "^(.{0,6}|[^0-9]*|[^A-Z]*|[^a-z]*|[a-zA-Z0-9]*)$";

    if (passwordRegister.match(passvalidate)) {
        passwordError.style.border = ".1rem solid red";
        passwordError.style.boxShadow = ".3rem .3rem 0 #FFCCCB";
        ErrorMsg.style.visibility = "visible";
        SuccessMsg.style.display = "none";
        SuccessMsg.style.visibility = "hidden";
        ErrorMsg.style.display = "block";
        return false;
    }

    ErrorMsg.style.visibility = "hidden";
    SuccessMsg.style.display = "block";
    SuccessMsg.style.visibility = "visible";
    ErrorMsg.style.display = "none";
    passwordError.style.border = ".1rem solid green";
    passwordError.style.boxShadow = ".3rem .3rem 0 #90EE90";

}

function confirmpasswordvalidate() {

    var confirmPassRegister = document.getElementById("confirmpassword").value;
    var passwordRegister = document.getElementById("password").value;
    var confirmpassError = document.getElementById("confirmpassword");
    var SuccessMsg = document.getElementById("copasssuccessMsg");
    var ErrorMsg = document.getElementById("copassErrorMsg");

    if (passwordRegister != confirmPassRegister) {
        confirmpassError.style.border = ".1rem solid red";
        confirmpassError.style.boxShadow = ".3rem .3rem 0 #FFCCCB";
        ErrorMsg.style.visibility = "visible";
        SuccessMsg.style.display = "none";
        SuccessMsg.style.visibility = "hidden";
        ErrorMsg.style.display = "block";
        return false;
    }

    ErrorMsg.style.visibility = "hidden";
    SuccessMsg.style.display = "block";
    SuccessMsg.style.visibility = "visible";
    ErrorMsg.style.display = "none";
    confirmpassError.style.border = ".1rem solid green";
    confirmpassError.style.boxShadow = ".3rem .3rem 0 #90EE90";

}

function check() {

    var uservalidate = "^[a-zA-Z]+$";
    var emvalidate = "^[0-9a-zA-Z]+[._]{0,1}[0-9a-zA-Z]+[@][a-zA-Z]+[.][a-zA-Z]{2,3}([.][a-zA-Z]{2,3}){0,1}$";
    var passvalidate = "^(.{0,6}|[^0-9]*|[^A-Z]*|[^a-z]*|[a-zA-Z0-9]*)$";
    var UsernameRegister = document.getElementById("username").value;
    var emailRegister = document.getElementById("email").value;
    var passwordRegister = document.getElementById("password").value;
    var confirmPassRegister = document.getElementById("confirmpassword").value;

    if (UsernameRegister == "" || emailRegister == "" || passwordRegister == "" || confirmPassRegister == "") {
        alert("Please fill all the fields!!");
        return false;
    }
    else if (!UsernameRegister.match(uservalidate)) {
        alert("User name should be alphabets!");
        usernamevalidate();
        return false;
    }
    else if (!emailRegister.match(emvalidate)) {
        alert("Enter proper email id!");
        return false;
    }
    else if (passwordRegister.match(passvalidate)) {
        alert("password Should contains min 7 digits, uppercase, lowercase, number and special character");
        return false;
    }
    else if (passwordRegister != confirmPassRegister) {
        confirmpasswordvalidate();
        alert("confirm password not matches password!");
        return false;
    }
    else {

        var blur = document.getElementById("RegisterHide");
        blur.classList.toggle('active');
        var RegisterPopup = document.getElementById("RegisterPopup");
        RegisterPopup.classList.toggle('active');

        return false;
    }
}

// Javascript validation form register ends here

// Javascript forgot password section starts here

function toggle() {

    var blur = document.getElementById("blur");
    blur.classList.toggle('active');
    var closeContent = document.getElementById("forgot-password");
    closeContent.classList.toggle('active');

}

function forgotemailvalidate() {

    var forgotemail = document.getElementById("email").value;
    var forgotemailError = document.getElementById("email");
    var forgotSuccessMsg = document.getElementById("forgotemailsuccessMsg");
    var forgotErrorMsg = document.getElementById("forgotemailErrorMsg");
    var forgotemvalidate = "^[0-9a-zA-Z]+[._]{0,1}[0-9a-zA-Z]+[@][a-zA-Z]+[.][a-zA-Z]{2,3}([.][a-zA-Z]{2,3}){0,1}$";

    if (!forgotemail.match(forgotemvalidate)) {
        forgotemailError.style.border = ".1rem solid red";
        forgotemailError.style.boxShadow = ".3rem .3rem 0 #FFCCCB";
        forgotErrorMsg.style.visibility = "visible";
        forgotSuccessMsg.style.display = "none";
        forgotSuccessMsg.style.visibility = "hidden";
        forgotErrorMsg.style.display = "block";
        return false;
    }

    forgotErrorMsg.style.visibility = "hidden";
    forgotSuccessMsg.style.display = "block";
    forgotSuccessMsg.style.visibility = "visible";
    forgotErrorMsg.style.display = "none";
    forgotemailError.style.border = ".1rem solid green";
    forgotemailError.style.boxShadow = ".3rem .3rem 0 #90EE90";
    return false;

}

function forgotSend() {

    var forgotemail = document.getElementById("email").value;
    var forgotemvalidate = "^[0-9a-zA-Z]+[._]{0,1}[0-9a-zA-Z]+[@][a-zA-Z]+[.][a-zA-Z]{2,3}([.][a-zA-Z]{2,3}){0,1}$";

    if (forgotemail == "") {
        alert("please fill the email to continue");
        return false;
    }
    else if (!forgotemail.match(forgotemvalidate)) {
        alert("Email format is wrong..");
        return false;
    }
    else if (forgotemail.match(forgotemvalidate)) {
        alert("Change password mail send successsfully!!");
        window.location = "loginpage.html";
        return false;
    }
    else {
        alert("Email not exist in database..");
        return false;
    }

}

// Javascript forgot password section ends here
