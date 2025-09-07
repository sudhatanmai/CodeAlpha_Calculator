let display = document.getElementById("display");

// Append character to display
function appendChar(char) {
  display.value += char;
}

// Clear display
function clearDisplay() {
  display.value = "";
}

// Delete last character
function deleteChar() {
  display.value = display.value.slice(0, -1);
}

// Calculate result
function calculateResult() {
  try {
    display.value = eval(display.value);
  } catch {
    display.value = "Error";
  }
}

// Add keyboard support
document.addEventListener("keydown", function(event) {
  if (!isNaN(event.key) || ['+', '-', '*', '/', '.'].includes(event.key)) {
    appendChar(event.key);
  } else if (event.key === "Enter") {
    calculateResult();
  } else if (event.key === "Backspace") {
    deleteChar();
  } else if (event.key.toLowerCase() === "c") {
    clearDisplay();
  }
});
