/**
 * Function to find the smallest number in an array.
 *
 * @param {number[]} arr - The input array.
 * @returns {number} - The smallest number in the array.
 */
function findSmallestNumber(arr) {
  if (arr.length === 0) {
    throw new Error("Array is empty.");
  }

  let smallest = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < smallest) {
      smallest = arr[i];
    }
  }

  return smallest;
}

// Example usage:
const numbers = [3, 5, 1, 8, -2, 7];
console.log("Smallest number in the array:", findSmallestNumber(numbers)); // Output: -2