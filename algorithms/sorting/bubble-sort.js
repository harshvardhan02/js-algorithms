/**
 * Bubble Sort algorithm implementation in JavaScript.
 *
 * The Bubble Sort algorithm is a simple sorting algorithm that repeatedly steps through the list,
 * compares adjacent elements and swaps them if they are in the wrong order. The pass through the
 * list is repeated until the list is sorted. The algorithm gets its name from the way smaller 
 * elements "bubble" to the top of the list.
 *
 * This function sorts an array of numbers in ascending order using the Bubble Sort algorithm.
 *
 * @param {number[]} arr - The array of numbers to be sorted.
 * @returns {number[]} - The sorted array.
 */

function bubbleSort(arr) {
  let len = arr.length;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

// Example usage:
const array = [64, 34, 25, 12, 22, 11, 90];
console.log("Unsorted array:", array);
const sortedArray = bubbleSort(array);
console.log("Sorted array:", sortedArray); // Output: [11, 12, 22, 25, 34, 64, 90]

export { bubbleSort };