/**
 * Linear Search algorithm implementation in JavaScript.
 *
 * The Linear Search algorithm is a simple search algorithm that checks each element of the array sequentially until the target value is found or the array is exhausted.
 * It has a time complexity of O(n), making it inefficient for large lists, but simple to implement and useful for small or unsorted lists.
 *
 * This function searches for a target value within an array using the Linear Search algorithm.
 *
 * @param {number[]} arr - The array of numbers to search.
 * @param {number} target - The target value to search for.
 * @returns {number} - The index of the target value in the array, or -1 if the target is not found.
 */
function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
}

// Example usage:
const array = [10, 20, 30, 40, 50];
const target = 30;
const index = linearSearch(array, target);
console.log(index);  // Output: 2