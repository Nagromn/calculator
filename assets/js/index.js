// ## Exercice 1

// Créez une page « calculatrice.html ».

// La page calculatrice contient un formulaire avec une sélection déroulante qui nous permet de choisir le signe de l’opération (addition, soustraction, multiplication, division).

let numbers = document.getElementById("numbers");
let operators = document.getElementById("operator");
let submit = document.getElementById("submit");
let result = document.getElementById("result");
let clear = document.getElementById("clear");

console.log(numbers);
console.log(operators);
console.log(submit);
console.log(result);

let currentInput = "";

numbers.addEventListener("click", function (e) {
  e.preventDefault();
  currentInput += e.target.value;
  // console.log(currentInput);
  updateDisplay();
});

operators.addEventListener("click", function (e) {
  e.preventDefault();
  currentInput += e.target.value;
  updateDisplay();
  // console.log(currentInput);
});

submit.addEventListener("click", function (e) {
  e.preventDefault();
  calculate();
});

clear.addEventListener("click", function (e) {
  e.preventDefault();
  clearDisplay();
});

function updateDisplay() {
  result.textContent = currentInput;
}

function clearDisplay() {
  currentInput = "";
  result.textContent = "";
}

function calculate() {
  let resultValue = eval(currentInput);
  result.textContent = resultValue;
  currentInput = "";
}
