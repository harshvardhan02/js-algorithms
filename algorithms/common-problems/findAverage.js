/**
 * Function to find the average of all elements in an array.
 *
 * @param {number[]} arr - The input array.
 * @returns {number} - The average of the elements in the array.
 */
function findAverage(arr) {
  if (arr.length === 0) {
    throw new Error("Array is empty.");
  }

  const sum = arr.reduce((acc, num) => acc + num, 0);
  return sum / arr.length;
}

// Example usage:
const numbers = [3, 5, 1, 8, -2, 7, 2, 5, 3];
const average = findAverage(numbers);
console.log("Average of the elements in the array:", average); // Output: 3.5555555555555554