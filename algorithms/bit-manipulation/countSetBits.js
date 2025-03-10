/**
 * Function to count the number of set bits (1s) in the binary representation of a number.
 * @param {number} n - The number to count set bits in.
 * @returns {number} - The number of set bits in the binary representation of the number.
 */
function countSetBits(n) {
  let count = 0;
  while (n > 0) {
    count += n & 1;
    n >>= 1;
  }
  return count;
}

// Example usage:

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

numbers.forEach(num => {
  console.log(`Number of set bits in ${num} is: ${countSetBits(num)}`);
});

// Output:
// Number of set bits in 0 is: 0
// Number of set bits in 1 is: 1
// Number of set bits in 2 is: 1
// Number of set bits in 3 is: 2
// Number of set bits in 4 is: 1
// Number of set bits in 5 is: 2
// Number of set bits in 6 is: 2
// Number of set bits in 7 is: 3
// Number of set bits in 8 is: 1
// Number of set bits in 9 is: 2
// Number of set bits in 10 is: 2