/**
 * Function to find the median of the elements in an array.
 *
 * The median is the middle value in a list of numbers. If the list is even, 
 * the median is the average of the two middle values.
 *
 * @param {number[]} arr - The input array.
 * @returns {number} - The median of the elements in the array.
 */
function findMedian(arr) {
  if (arr.length === 0) {
    throw new Error("Array is empty.");
  }

  arr.sort((a, b) => a - b);

  const mid = Math.floor(arr.length / 2);

  if (arr.length % 2 === 0) {
    return (arr[mid - 1] + arr[mid]) / 2;
  } else {
    return arr[mid];
  }
}

// Example usage:
const numbers = [3, 5, 1, 8, -2, 7, 2];
const median = findMedian(numbers);
console.log("Median of the elements in the array:", median); // Output: 3