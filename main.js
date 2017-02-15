function checkValid(){
    var fname = document.getElementById("fname");
    var lname = document.getElementById("lname");
    var nickname = document.getElementById("nickname");
    var sex = document.getElementById("sex");
    var date = document.getElementById("date");
    var age = document.getElementById("age");
    var tel = document.getElementById("tel");
    var mail = document.getElementById("mail");
    var address = document.getElementById("address");

    if(fname.value==""){
      alert("Please Enter your FirstName");
      return false;
    }

    if(lname.value==""){
      alert("Please Enter your LastName");
      return false;
    }

    if(nickname.value==""){
      alert("Please Enter your nickname");
      return false;
    }

    if(sex.checked==false)   {  //payment method button is not checked
            alert("Please choose your sex");
            return false;
    }

    if(date.value==""){
      alert("Please select your Birthday");
      return false;
    }

    if(age.value==""){
      alert("Please Enter your age");
      return false;
    }
    if (isNaN(age.value))
    {
        alert("Your age must input numbers");
        return false;
    }

    if(tel.value==""){
      alert("Please Enter your telephone");
      return false;
    }
    if(mail.value==""){
      alert("Please Enter your E-mail");
      return false;
    }
    if(address.value==""){
      alert("Please Enter your Address");
      // address.style.display ="none";
      return false;
    }

}
