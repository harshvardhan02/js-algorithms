/**
 * Generate Fibonacci sequence in JavaScript.
 *
 * The Fibonacci sequence is a series of numbers where a number is the sum of the two preceding ones,
 * usually starting with 0 and 1. The sequence starts: 0, 1, 1, 2, 3, 5, 8, 13, 21, and so on.
 *
 * This function generates the first n numbers of the Fibonacci sequence.
 *
 * @param {number} n - The number of terms in the Fibonacci sequence to generate.
 * @returns {number[]} - An array containing the first n numbers of the Fibonacci sequence.
 */
function generateFibonacci(n) {
  if (n <= 0) {
    return [];
  }
  if (n === 1) {
    return [0];
  }

  const fibonacciSequence = [0, 1];
  for (let i = 2; i < n; i++) {
    const nextTerm = fibonacciSequence[i - 1] + fibonacciSequence[i - 2];
    fibonacciSequence.push(nextTerm);
  }
  return fibonacciSequence;
}

// Example usage:
const numberOfTerms = 10;
const fibonacciSequence = generateFibonacci(numberOfTerms);
console.log(fibonacciSequence);  // Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]