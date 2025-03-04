/**
 * Binary Search algorithm implementation in JavaScript.
 *
 * The Binary Search algorithm is an efficient algorithm for finding an item from a sorted list of items.
 * It works by repeatedly dividing in half the portion of the list that could contain the item, until you've narrowed down the possible locations to just one.
 * It has a time complexity of O(log n), making it much more efficient than linear search for large lists.
 *
 * This function searches for a target value within a sorted array using the Binary Search algorithm.
 *
 * @param {number[]} arr - The sorted array of numbers to search.
 * @param {number} target - The target value to search for.
 * @returns {number} - The index of the target value in the array, or -1 if the target is not found.
 */
function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
}

// Example usage:
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const target = 7;
const index = binarySearch(array, target);
console.log(index);  // Output: 6