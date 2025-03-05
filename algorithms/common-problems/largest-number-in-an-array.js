/**
 * Function to find the largest number in an array.
 *
 * @param {number[]} arr - The input array.
 * @returns {number} - The largest number in the array.
 */
function findLargestNumber(arr) {
  if (arr.length === 0) {
    throw new Error("Array is empty.");
  }

  let largest = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }

  return largest;
}

// Example usage:
const numbers = [3, 5, 1, 8, -2, 7];
console.log("Largest number in the array:", findLargestNumber(numbers)); // Output: 8