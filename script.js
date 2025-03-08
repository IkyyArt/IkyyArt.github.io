let memory = 0;

function appendToDisplay(value) {
  const display = document.getElementById("display");
  display.value += value;
}

function clearDisplay() {
  const display = document.getElementById("display");
  display.value = "";
}

function calculate() {
  const display = document.getElementById("display");
  try {
    let expression = display.value;
    // Ganti fungsi matematika dengan fungsi JavaScript yang sesuai
    expression = expression.replace(/sqrt\(/g, "Math.sqrt(");
    expression = expression.replace(/pow\(/g, "Math.pow(");
    expression = expression.replace(/%/g, "/100");
    expression = expression.replace(/log\(/g, "Math.log10(");
    expression = expression.replace(/ln\(/g, "Math.log(");
    expression = expression.replace(/sin\(/g, "Math.sin(");
    expression = expression.replace(/cos\(/g, "Math.cos(");
    expression = expression.replace(/tan\(/g, "Math.tan(");
    expression = expression.replace(/π/g, "Math.PI");
    expression = expression.replace(/e/g, "Math.E");
    const result = eval(expression);
    display.value = result;
    addToHistory(`${expression} = ${result}`);
  } catch (error) {
    display.value = "Error";
  }
}

function memoryAdd() {
  const display = document.getElementById("display");
  memory += parseFloat(display.value) || 0;
}

function memorySubtract() {
  const display = document.getElementById("display");
  memory -= parseFloat(display.value) || 0;
}

function memoryRecall() {
  const display = document.getElementById("display");
  display.value = memory;
}

function memoryClear() {
  memory = 0;
}

function addToHistory(entry) {
  const historyList = document.getElementById("history-list");
  const li = document.createElement("li");
  li.textContent = entry;
  historyList.appendChild(li);
}

function toggleTheme() {
  const body = document.body;
  const currentTheme = body.getAttribute("data-theme");
  if (currentTheme === "dark") {
    body.removeAttribute("data-theme");
  } else {
    body.setAttribute("data-theme", "dark");
  }
}
