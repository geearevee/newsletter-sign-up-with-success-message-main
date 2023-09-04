let emailInput = document.querySelector(".text");
let button = document.querySelector(".button");

// when user clicks on button you want to run a certain function
// addEventListener takes two arguments: event and function ("click", function () {})
button.addEventListener("click", validation);
function validation() {
  if (emailInput.value.contains("@") && emailInput.value.contains(".com")) {
    //    you have 2 options that I can think of now
    //    1. you can create 2 new pages one to show if the email is valid and one to show if the email is invalid
    //    2. you can create a pop up that shows if the email is valid or not
    //    if you follow the second method
    //    you have to first create the html element here and depending up if the user has entered a valid email or not
    //    you have to show either succes modl or error modal
    // const oldDiv = document.querySelector(".class of old div");
    const elemnt = document.createElement("div");
    document.body.appendChild(elemnt);
    oldDiv.classList.add(".hide"); // .hide {display: none}
  } else {
    const elemnt = document.createElement("div");
    document.body.appendChild(elemnt);
  }
}
