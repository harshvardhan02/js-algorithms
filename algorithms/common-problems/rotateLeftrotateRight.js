/**
 * Function to rotate the elements of an array to the left by a given number of positions.
 *
 * @param {number[]} arr - The input array.
 * @param {number} positions - The number of positions to rotate the array.
 * @returns {number[]} - The array rotated to the left.
 */
function rotateLeft(arr, positions) {
  positions = positions % arr.length; // Handle positions greater than array length
  return arr.slice(positions).concat(arr.slice(0, positions));
}

/**
 * Function to rotate the elements of an array to the right by a given number of positions.
 *
 * @param {number[]} arr - The input array.
 * @param {number} positions - The number of positions to rotate the array.
 * @returns {number[]} - The array rotated to the right.
 */
function rotateRight(arr, positions) {
  positions = positions % arr.length; // Handle positions greater than array length
  return arr.slice(-positions).concat(arr.slice(0, -positions));
}

// Example usage:
const numbers = [1, 2, 3, 4, 5];

const leftRotatedArray = rotateLeft(numbers, 2);
console.log("Array rotated to the left by 2 positions:", leftRotatedArray); // Output: [3, 4, 5, 1, 2]

const rightRotatedArray = rotateRight(numbers, 2);
console.log("Array rotated to the right by 2 positions:", rightRotatedArray); // Output: [4, 5, 1, 2, 3]