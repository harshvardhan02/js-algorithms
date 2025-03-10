/**
 * Function to compute the nth Fibonacci number using matrix exponentiation.
 *
 * @param {number} n - The position of the Fibonacci number to compute.
 * @returns {number} - The nth Fibonacci number.
 */
function fibonacci(n) {
  if (n <= 1) return n;

  const F = [[1, 1], [1, 0]];
  power(F, n - 1);

  return F[0][0];
}

function multiplyMatrix(a, b) {
  const x = a[0][0] * b[0][0] + a[0][1] * b[1][0];
  const y = a[0][0] * b[0][1] + a[0][1] * b[1][1];
  const z = a[1][0] * b[0][0] + a[1][1] * b[1][0];
  const w = a[1][0] * b[0][1] + a[1][1] * b[1][1];

  a[0][0] = x;
  a[0][1] = y;
  a[1][0] = z;
  a[1][1] = w;
}

function power(F, n) {
  if (n === 0 || n === 1) return;

  const M = [[1, 1], [1, 0]];

  power(F, Math.floor(n / 2));
  multiplyMatrix(F, F);

  if (n % 2 !== 0) {
    multiplyMatrix(F, M);
  }
}

// Example usage:
const n = 10;
const result = fibonacci(n);
console.log(`The ${n}th Fibonacci number is: ${result}`); // Output: 55