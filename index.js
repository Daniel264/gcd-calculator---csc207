function calculateGCD(a, b) {
  while (b !== 0) {
    const remainder = a % b;
    a = b;
    b = remainder;
  }
  return a;
}

const firstNumber = parseInt(prompt("Enter the first number:"));
const secondNumber = parseInt(prompt("Enter the second number:"));

if (!isNaN(firstNumber) && !isNaN(secondNumber)) {
  const gcd = calculateGCD(firstNumber, secondNumber);
  alert(`The GCD of ${firstNumber} and ${secondNumber} is ${gcd}`);
} else alert("Please enter valid numbers.");
rrr;
