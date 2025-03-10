/**
 * Function to perform modular exponentiation.
 * It calculates (base^exponent) % modulus efficiently using the method of exponentiation by squaring.
 *
 * @param {number} base - The base number.
 * @param {number} exponent - The exponent.
 * @param {number} modulus - The modulus.
 * @returns {number} - The result of (base^exponent) % modulus.
 */
function modularExponentiation(base, exponent, modulus) {
  if (modulus === 1) return 0;

  let result = 1;
  base = base % modulus;

  while (exponent > 0) {
    if (exponent % 2 === 1) { // If exponent is odd, multiply base with result
      result = (result * base) % modulus;
    }
    exponent = Math.floor(exponent / 2); // Divide exponent by 2
    base = (base * base) % modulus; // Square the base
  }

  return result;
}

// Example usage:
const base = 2;
const exponent = 10;
const modulus = 1000;
const result = modularExponentiation(base, exponent, modulus);
console.log(`The result of (${base}^${exponent}) % ${modulus} is: ${result}`); // Output: 24