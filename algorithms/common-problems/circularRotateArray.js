/**
 * Function to circularly rotate the elements of an array by K positions.
 * A positive K rotates the array to the right, and a negative K rotates the array to the left.
 *
 * @param {number[]} arr - The input array.
 * @param {number} positions - The number of positions to rotate the array.
 * @returns {number[]} - The array rotated by K positions.
 */
function circularRotateArray(arr, positions) {
  const length = arr.length;
  if (length === 0) return arr;

  // Normalize the positions to be within the array length
  positions = ((positions % length) + length) % length;

  return arr.slice(-positions).concat(arr.slice(0, -positions));
}

// Example usage:
const numbers = [1, 2, 3, 4, 5];

const rotatedArrayRight = circularRotateArray(numbers, 2);
console.log("Array circularly rotated to the right by 2 positions:", rotatedArrayRight); // Output: [4, 5, 1, 2, 3]

const rotatedArrayLeft = circularRotateArray(numbers, -2);
console.log("Array circularly rotated to the left by 2 positions:", rotatedArrayLeft); // Output: [3, 4, 5, 1, 2]