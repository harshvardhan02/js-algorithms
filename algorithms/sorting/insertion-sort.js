/**
 * Insertion Sort algorithm implementation in JavaScript.
 *
 * The Insertion Sort algorithm is a simple sorting algorithm that builds the final sorted array one item at a time.
 * It is much less efficient on large lists than more advanced algorithms such as quicksort, heapsort, or merge sort.
 * However, it has the advantage of being simple to implement and efficient for small data sets or nearly sorted data.
 *
 * This function sorts an array of numbers in ascending order using the Insertion Sort algorithm.
 *
 * @param {number[]} arr - The array of numbers to be sorted.
 * @returns {number[]} - The sorted array.
 */
function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let key = arr[i];
    let j = i - 1;

    // Move elements of arr[0..i-1], that are greater than key,
    // to one position ahead of their current position
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = key;
  }
  return arr;
}

// Example usage:
const array = [12, 11, 13, 5, 6];
const sortedArray = insertionSort(array);
console.log(sortedArray);  // Output: [5, 6, 11, 12, 13]