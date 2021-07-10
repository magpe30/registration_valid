///Validation////
const submitBtn  = document.getElementById("signup-button");

submitBtn.addEventListener("click", (event) => {
    event.preventDefault();
    const name = document.getElementById("signup-username").value;
    const email = document.getElementById("signup-email").value;
    const phoneNumber  = document.getElementById("phonenumber").value;
    const currentPosition = document.getElementById("position").value;
    const password = document.getElementById("signup-password").value;
    const confirmPassword = document.getElementById("password2").value;
    const findOut = document.getElementById("findout").value;
    const termsConditions = document.getElementById("terms-conditions");
    let mistakeParagraph = document.getElementById("wrong-check");
 
    const formInputs = {
        username: name,
        email: email,
        phone: phoneNumber,
        position: currentPosition,
        password: password,
        passwordConfirm: confirmPassword,
        source: findOut,
    }
    
    let messages  = [];
    //check all fields
    if(name == null || name == "", 
       email == null || email == "", 
       phoneNumber == null || phoneNumber == "", 
       currentPosition == null || currentPosition == ""  
    ){
        messages.push("All fields are required")
    }
    //check if password is at least 6 characters long
    if (password.length < 6){
        messages.push("Password should have at least 6 character");
    }
    //email validation 
    if(!isEmail(email)){
        messages.push("Please make sure that your email is valid");
    }
    //check if passwords match
    if(password !== confirmPassword){
        messages.push("Passwords do not match");
    }
    //check if they checked terms and conditions
    if(!termsConditions.checked){
        messages.push("Please agree to our Terms and Conditions");
    }
    //check if they chose where they know about directly apply
    if(findOut === "0"){
        messages.push("Please tell us how do you know about Directly Apply")
    }

    if(messages.length > 0 ){
        mistakeParagraph.innerHTML = ""
        messages.forEach(function(error) {
            //mistakeParagraph.innerHTML = "";
            let template = `<p class="alert">${error}</p>`
            mistakeParagraph.innerHTML += template;
        })
    }else{
        mistakeParagraph.innerHTML = "";
        let template = `<p class="pass">You are registered !</p>`
        mistakeParagraph.innerHTML += template;
        console.log(formInputs);
    }

    //function for validation email
    function isEmail(email) {
        return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
    }
});