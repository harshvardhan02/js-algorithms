/**
 * Function to compute the Greatest Common Divisor (GCD) of two numbers using the Euclidean algorithm.
 *
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @returns {number} - The GCD of the two numbers.
 */
function gcd(a, b) {
  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

// Example usage:
const num1 = 56;
const num2 = 98;
const result = gcd(num1, num2);
console.log(`The GCD of ${num1} and ${num2} is: ${result}`); // Output: 14