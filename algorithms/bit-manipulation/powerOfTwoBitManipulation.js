/**
 * Function to check if a number is a power of 2 using bit manipulation.
 * @param {number} n - The number to check.
 * @returns {boolean} - True if the number is a power of 2, otherwise false.
 */
function isPowerOfTwo(n) {
  if (n <= 0) {
    return false;
  }
  return (n & (n - 1)) === 0;
}

// Example usage:

const numbers = [1, 2, 3, 4, 16, 18, 32, 64, 100];

numbers.forEach(num => {
  console.log(`${num} is power of 2: ${isPowerOfTwo(num)}`);
});

// Output:
// 1 is power of 2: true
// 2 is power of 2: true
// 3 is power of 2: false
// 4 is power of 2: true
// 16 is power of 2: true
// 18 is power of 2: false
// 32 is power of 2: true
// 64 is power of 2: true
// 100 is power of 2: false