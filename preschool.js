
function applyButton(){
    window.location.href=("register.html")
}


//hjhj
//form validation
function validateForm(event) {
    let name = document.forms["myForm"]["name"].value;
    let age  = document.forms["myForm"]["age"].value;
    let DOB = document.forms["myForm"]["DOB"].value;
    let email = document.forms["myForm"]["email"].value;
    let cert = document.forms["myForm"]["bcert"].value;
    if (name == "") {
      alert("Name is incomplete");
      event.preventDefault()
      
    }else if(DOB == ""){
alert("Date of birth  is incomplete")
event.preventDefault()
    }else if(age == ""){
        alert("Age is incomplete")
        event.preventDefault()
     return false   
    }else if(email == ""){
        alert("Email is incomplete")
        event.preventDefault()
        return false
    }else if(cert == ""){
        alert("Birth certificate is incomplete")
        event.preventDefault()
    }else{
    alert("sent")
  event.preventDefault();}
  }
  