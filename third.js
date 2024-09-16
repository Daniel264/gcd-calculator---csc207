document.getElementById("btn").addEventListener("click", function () {
  function redirectConsoleLogToPage() {
    const outputElement = document.getElementById("output");

    console.log = function (message) {
      if (outputElement) {
        outputElement.innerHTML += `<p>${message}</p>`;
      }
    };
  }

  document.

  redirectConsoleLogToPage();

  function calculateGCD(a, b) {
    while (b !== 0) {
      console.log(`${a} = ${Math.floor(a / b)} * ${b} + ${a % b}`);
      const temp = a;
      a = b;
      b = temp % b;
    }
    return a;
  }

  function getGCD() {
    const num1 = document.getElementById("first__number").value;
    const num2 = document.getElementById("second__number").value;

    if (isNaN(num1) || isNaN(num2)) {
      console.log("Invalid input. Please enter valid numbers.");
      return;
    }

    console.log(`Calculating the GCD of ${num1} and ${num2}:`);
    const gcd = calculateGCD(num1, num2);
    console.log(`The GCD of ${num1} and ${num2} is ${gcd}`);
  }

  getGCD();
});
