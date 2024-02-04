export function RejExContact() {

    let regExPhone = /^(002){0,1}01[0/25][0-9]{8}$/;
    let regExPassword = /^[0-9a-zA-z]{8,20}$/;
    let regExEmail = /^[a-zA-Z0-9]{3,10}@[a-zA-Z]{3,10}\.com$/;
    let regExAge = /^[0-9]{2}$/;
    
    let email = document.querySelector("#email");
    let phone = document.querySelector("#phone");
    let age = document.querySelector("#age");
    let Password = document.querySelector("#Password");
    let reEnterPassword = document.querySelector("#reEnterPassword");
    let isHoverEnabled = false;
    
    function validatePhone(phone) {
        return regExPhone.test(phone);
    }
    
    function validatePassword(password) {
        return regExPassword.test(password);
    }
    
    function validateEmail(email) {
        return regExEmail.test(email);
    }
    
    function validateAge(age) {
        return regExAge.test(age);
    }
    
     function classEmailInput() {
        if (validateEmail(email.value)) {
          isHoverEnabled = false;
          $(".submit").css("marginLeft","0px")
          $(".submit").removeClass("bg-danger")
          $(".submit").addClass("bg-black")
          $(email).removeClass("is-invalid");
            $(email).addClass("is-valid");
            $("#emailError").html("");
            
        } else {
          isHoverEnabled = true;
          $(document).on('mouseenter', ".submit", formButtonValidation);
          $(document).on('mouseleave', ".submit", formButtonValidation);
          $(".submit").removeClass("bg-black")
          $(".submit").addClass("bg-danger")
            $(email).removeClass("is-valid");
            $(email).addClass("is-invalid");
            $("#emailError").html('<span>Invalid Email, try example@domain.com</span>');
          
        }
    };
    
    
      function classPhoneInput() {
      if (validatePhone(phone.value)) {
        isHoverEnabled = false;
        $(".submit").css("marginLeft","0px")
        $(".submit").removeClass("bg-danger")
        $(".submit").addClass("bg-black")
        $(phone).removeClass("is-invalid");
          $(phone).addClass("is-valid");
          $("#phoneError").html("");
      } else {
        isHoverEnabled = true;
        $(document).on('mouseenter', ".submit", formButtonValidation);
        $(document).on('mouseleave', ".submit", formButtonValidation);
        $(".submit").removeClass("bg-black")
        $(".submit").addClass("bg-danger")
          $(phone).removeClass("is-valid");
          $(phone).addClass("is-invalid");
          $("#phoneError").html('<span>Invalid Phone Number</span>');
      }
    };
    
     function classAgeInput() {
      if (validateAge(age.value)) {
        isHoverEnabled = false;
        $(".submit").css("marginLeft","0px")
        $(".submit").removeClass("bg-danger")
        $(".submit").addClass("bg-black")
        $(age).removeClass("is-invalid");
          $(age).addClass("is-valid");
          $("#ageError").html("");
      } else {
        isHoverEnabled = true;
        $(document).on('mouseenter', ".submit", formButtonValidation);
        $(document).on('mouseleave', ".submit", formButtonValidation);
        $(".submit").removeClass("bg-black")
        $(".submit").addClass("bg-danger")
          $(age).removeClass("is-valid");
          $(age).addClass("is-invalid");
          $("#ageError").html('<span>Your age must contain 2 numbers</span>');
      }
    };
    
    
    function classPasswordInput() {
      if (validatePassword(Password.value)) {
        isHoverEnabled = false;
        $(".submit").css("marginLeft","0px")
        $(".submit").removeClass("bg-danger")
        $(".submit").addClass("bg-black")
        $(Password).removeClass("is-invalid");
        $(Password).addClass("is-valid");
        $("#passwordError").html(""); // Clear any error message
      } else {
        isHoverEnabled = true;
        $(document).on('mouseenter', ".submit", formButtonValidation);
        $(document).on('mouseleave', ".submit", formButtonValidation);
        $(".submit").removeClass("bg-black")
        $(".submit").addClass("bg-danger")
        $(Password).removeClass("is-valid");
        $(Password).addClass("is-invalid");
        $("#passwordError").html('<span>Password must contain numbers & letters, at least 8 characters</span>');
      }
    
    }
    
    function classREPasswordInput() {
      if (validatePassword(Password.value) === reEnterPassword.value) {
        isHoverEnabled = false
        $(".submit").css("marginLeft","0px")
        $(".submit").removeClass("bg-danger")
        $(".submit").addClass("bg-black")
          $(reEnterPassword).removeClass("is-invalid");
          $(reEnterPassword).addClass("is-valid");
          $("#reEnterPasswordError").html(""); // Clear any error message
      } else {
        isHoverEnabled = true;
        $(document).on('mouseenter', ".submit", formButtonValidation);
        $(document).on('mouseleave', ".submit", formButtonValidation);
        $(".submit").removeClass("bg-black")
        $(".submit").addClass("bg-danger")
          $(reEnterPassword).removeClass("is-valid");
          $(reEnterPassword).addClass("is-invalid");
          $("#reEnterPasswordError").html('<span>Passwords do not match</span>');
      }
    };
    
    
    // Attach event listeners to input fields
    email.addEventListener("keyup", classEmailInput);
    phone.addEventListener("keyup", classPhoneInput);
    age.addEventListener("keyup", classAgeInput);
    Password.addEventListener("keyup", classPasswordInput);
    reEnterPassword.addEventListener("keyup", classREPasswordInput);
    
    
    // button animation
    
    function formButtonValidation(){
      if(isHoverEnabled){
      let buttonLocation =  $(".submit").css("marginLeft")
          if(buttonLocation == "250px")
          {
             $(".submit").animate({"marginLeft":"0px"},500);
          }
          else
          {
             $(".submit").animate({"marginLeft":"250px"},500);
          }
        }else{
            $(".submit").css("marginLeft" , "0px")
        }
        }
    
     
     
        setTimeout(() => {
          isHoverEnabled = true;
        }, 500);
       
       }
    
    
   
