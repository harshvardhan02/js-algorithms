/**
 * Two Pointer Pattern implementation in JavaScript.
 *
 * The two-pointer pattern is a common technique used to solve problems involving arrays or linked lists.
 * It involves using two pointers to iterate through the data structure simultaneously, often from different ends.
 * This technique is useful for problems like finding pairs with a specific sum, removing duplicates, and more.
 */

/**
 * Example 1: Finding pairs with a specific sum in a sorted array.
 *
 * @param {number[]} arr - The sorted array.
 * @param {number} targetSum - The target sum.
 * @returns {Array} - An array of pairs that add up to the target sum.
 */
function findPairsWithSum(arr, targetSum) {
  const result = [];
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    const currentSum = arr[left] + arr[right];
    if (currentSum === targetSum) {
      result.push([arr[left], arr[right]]);
      left++;
      right--;
    } else if (currentSum < targetSum) {
      left++;
    } else {
      right--;
    }
  }

  return result;
}

/**
 * Example 2: Removing duplicates from a sorted array.
 *
 * @param {number[]} arr - The sorted array.
 * @returns {number[]} - The array with duplicates removed.
 */
function removeDuplicates(arr) {
  if (arr.length === 0) return [];

  let left = 0;
  for (let right = 1; right < arr.length; right++) {
    if (arr[left] !== arr[right]) {
      left++;
      arr[left] = arr[right];
    }
  }

  return arr.slice(0, left + 1);
}

/**
 * Example 3: Squaring a sorted array and returning a sorted array of squares.
 *
 * @param {number[]} arr - The sorted array.
 * @returns {number[]} - The sorted array of squares.
 */
function sortedSquares(arr) {
  const result = new Array(arr.length);
  let left = 0;
  let right = arr.length - 1;
  let index = arr.length - 1;

  while (left <= right) {
    const leftSquare = arr[left] * arr[left];
    const rightSquare = arr[right] * arr[right];
    if (leftSquare > rightSquare) {
      result[index] = leftSquare;
      left++;
    } else {
      result[index] = rightSquare;
      right--;
    }
    index--;
  }

  return result;
}

// Example usage:
const arr1 = [1, 2, 3, 4, 6];
const targetSum = 6;
console.log("Pairs with sum", targetSum, ":", findPairsWithSum(arr1, targetSum)); // Output: [[2, 4]]

const arr2 = [1, 1, 2, 2, 3, 4, 4, 5];
console.log("Array with duplicates removed:", removeDuplicates(arr2)); // Output: [1, 2, 3, 4, 5]

const arr3 = [-4, -1, 0, 3, 10];
console.log("Sorted squares:", sortedSquares(arr3)); // Output: [0, 1, 9, 16, 100]