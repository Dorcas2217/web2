alert("Pop-up thanks to an external JS file.");
let btn2 = document.querySelector("#myBtn2"); // HTML id attribute
let msg = document.querySelector(".message"); // CSS class name /* la variable document sert à quoi ? 
let duplicateMsg = document.querySelector("div"); // HTML tag name
btn2.innerText = "I have been clicked"; // je comprend pas le changement 

let btn1 = document.getElementById("myBtn1");

const buttons = document.querySelectorAll("button");
buttons.forEach((btn) => {
  btn.innerText = "Hackedbbbb!";
}); /// rien ne change chez moi pourquoi ?

