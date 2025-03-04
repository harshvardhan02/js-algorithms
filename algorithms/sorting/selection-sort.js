/**
 * Selection Sort algorithm implementation in JavaScript.
 *
 * The Selection Sort algorithm is an in-place comparison sorting algorithm.
 * It has an O(n^2) time complexity, making it inefficient on large lists,
 * and generally performs worse than the similar insertion sort.
 * 
 * This function sorts an array of numbers in ascending order using the Selection Sort algorithm.
 *
 * @param {number[]} arr - The array of numbers to be sorted.
 * @returns {number[]} - The sorted array.
 */
function selectionSort(arr) {
  let n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    // Find the minimum element in the unsorted part of the array
    let minIndex = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }

    // Swap the found minimum element with the first element of the unsorted part
    if (minIndex !== i) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
  }

  return arr;
}

// Example usage:
const array = [64, 25, 12, 22, 11];
const sortedArray = selectionSort(array);
console.log(sortedArray);  // Output: [11, 12, 22, 25, 64]