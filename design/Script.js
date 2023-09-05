let emailInput = document.querySelector(".text");
let button = document.querySelector(".button");

// when user clicks on button you want to run a certain function
// addEventListener takes two arguments: event and function ("click", function () {})
button.addEventListener("click", validation);
function validation() {
  if (emailInput.value.includes("@") && emailInput.value.includes(".com")) {
    let ctr = document.querySelector(".container");
    ctr.style.display = "none";
    let suc = document.querySelector(".success");
    suc.style.display = "block";
  } else {
    let err = document.querySelector(".redemail");
    err.style.display = "block";
  }
}

let btn = document.querySelector(".button2");
btn.addEventListener("click", dismiss);
function dismiss() {
  let suc = document.querySelector(".success");
  suc.style.display = "none";
  let ctr = document.querySelector(".container");
  ctr.style.display = "flex";
}
