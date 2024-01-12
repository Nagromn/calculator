// ## Exercice 1

// Créez une page « calculatrice.html ».

// La page calculatrice contient un formulaire avec une sélection déroulante qui nous permet de choisir le signe de l’opération (addition, soustraction, multiplication, division).

// Elements
let showCalc = document.getElementById("show");
let hideCalc = document.getElementById("hide");
let calculator = document.getElementById("calculator");
let numbers = document.getElementById("numbers");
let operators = document.getElementById("operator");
let submit = document.getElementById("submit");
let result = document.getElementById("result");
let clear = document.getElementById("clear");
let isActive = false;

// Current input
let currentInput = "";

// By default calculator is off
calculator.setAttribute("style", "display: none;");
hideCalc.setAttribute("style", "background-color: red;");

// Listeners
showCalc.addEventListener("click", function (e) {
  e.preventDefault();
  calculator.setAttribute("style", "display: block;");
  isActive = true;
  isActiveBtn();
});

hideCalc.addEventListener("click", function (e) {
  e.preventDefault();
  calculator.setAttribute("style", "display: none;");
  isActive = false;
  isActiveBtn();
});

numbers.addEventListener("click", function (e) {
  if (e.target.tagName === "BUTTON") {
    e.preventDefault();
    currentInput += e.target.value;
    updateDisplay();
    // console.log(currentInput);
  }
});

operators.addEventListener("click", function (e) {
  if (e.target.tagName === "BUTTON") {
    e.preventDefault();
    currentInput += e.target.value;
    updateDisplay();
    // console.log(currentInput);
  }
});

submit.addEventListener("click", function (e) {
  e.preventDefault();
  calculate();
});

clear.addEventListener("click", function (e) {
  e.preventDefault();
  clearDisplay();
});

// Display active button color
function isActiveBtn() {
  showCalc.style.backgroundColor = isActive ? "green" : "";
  hideCalc.style.backgroundColor = isActive ? "" : "red";
}

// Update calculator display value
function updateDisplay() {
  result.textContent = currentInput;
}

// Clear dislay from current value
function clearDisplay() {
  currentInput = "";
  result.textContent = "";
}

// Calculation method
function calculate() {
  let resultValue = eval(currentInput);
  result.textContent = resultValue;
  currentInput = "";
}
