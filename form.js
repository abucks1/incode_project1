document.addEventListener("DOMContentLoaded", () => {
    // DOM elements
    const formButton = document.querySelector("form button")
    const form = document.querySelector("form")
    const nom = document.querySelector("#nom")
    const prenom = document.querySelector("#prenom")
    const phone = document.querySelector("#phone")
    const email = document.querySelector("#email")
    const message = document.querySelector("#message")

    form.setAttribute('novalidate',true)

    form.onsubmit = (e) => { // recommended for form submission
      e.preventDefault()

//* validation for First name */
const nomValidation = /^[A-Za-zÀ-ÖØ-öø-ÿ \-']+$/i.test(nom.value)
console.log(nomValidation)
if (nomValidation) {
  console.log("You wrote an first name")
    } else {
      console.log("That's not a first name")
    
 }
//*validation for last name 
const prenomValidation = /^[A-Za-zÀ-ÖØ-öø-ÿ \-']+$/i.test(prenom.value)
console.log(prenomValidation)
if (prenomValidation) {
  console.log("You wrote an Last name")
    } else {
      console.log("That's not a Last name")}

//*validaton for phone number */
const phoneValidation = /^(?:\+?(61))? ?(?:\((?=.*\)))?(0?[2-57-8])\)? ?(\d\d(?:[- ](?=\d{3})|(?!\d\d[- ]?\d[- ]))\d\d[- ]?\d[- ]?\d{3})$/gm.test(phone.value)
console.log(phoneValidation)
if (phoneValidation) {
  console.log("Phone number valid")
    } else {
      console.log("Phone number not valid")
    }

//*Validtion for Email */
const emailValidation = /^[a-zA-Z0-9\-_]+[a-zA-Z0-9\-_\.]*@[a-zA-Z0-9\-_]+\.[a-zA-Z0-9\-_\.]+$/.test(email.value)
console.log(emailValidation)
if (emailValidation) {
  console.log("Email valid")
    } else {
      console.log("Email not valid")
}
//*Validtion for Message */
const messageValidation = /^[A-Za-zÀ-ÖØ-öø-ÿ \-']+$/i.test(message.value)
console.log(messageValidation)

if (messageValidation) { 
console.log("Valid message")
} else {
  console.log("Message not valid")
}

if (nomValidation && prenomValidation && phoneValidation && emailValidation && messageValidation) {
console.log ({
First: nom.value,
Last: prenom.value,
Phone: phone.value,
email: email.value,
Message: message.value,
})

// Get the popup
var modal = document.getElementById("myPopup");
    

// Get the <span> element that closes the popup
var span = document.getElementsByClassName("close")[0];
span.onclick = function() {
  modal.style.display = "none";
}
// open the popup 

  modal.style.display = "block";

// When the user clicks anywhere outside of the popup, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


} else {
  console.log("Something is not valid")
}

}


})
 