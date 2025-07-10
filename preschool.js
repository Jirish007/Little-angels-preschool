
function applyButton(){
    window.location.href=("register.html")
}

/*TOGGLING*/
var nav = document.querySelector("#nav")
let cover  = document.querySelector("#cover")
let button  = document.querySelector("#button")
let check= document.querySelector(".swiper")
let check1  = document.querySelector(".check")

function Toggle(){
     
    nav.classList.add("active")

if(screen.width <= 500){
    cover.style.display = "none"
    button.style.visibility ="hidden"
   
}else{
    cover.style.display = "flex"
}
}
function Close(){
    nav.classList.remove("active")
    cover.style.display = "flex"
    
}
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
  