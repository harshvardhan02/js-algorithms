/**
 * Merge Sort algorithm implementation in JavaScript.
 *
 * The Merge Sort algorithm is a divide and conquer algorithm that was invented by John von Neumann in 1945.
 * It works by dividing the input array into two halves, sorting each half recursively, and then merging the two sorted halves.
 * The merge function is used to combine two sorted arrays into one sorted array.
 *
 * This function sorts an array of numbers in ascending order using the Merge Sort algorithm.
 *
 * @param {number[]} arr - The array of numbers to be sorted.
 * @returns {number[]} - The sorted array.
 */
function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  // Divide the array into two halves
  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);

  // Recursively sort each half and merge the sorted halves
  return merge(mergeSort(left), mergeSort(right));
}

/**
 * Merge two sorted arrays into one sorted array.
 *
 * @param {number[]} left - The first sorted array.
 * @param {number[]} right - The second sorted array.
 * @returns {number[]} - The merged sorted array.
 */
function merge(left, right) {
  const result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  // Compare elements from both arrays and add the smaller one to the result array
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }

  // Add the remaining elements from both arrays to the result array
  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

// Example usage:
const array = [38, 27, 43, 3, 9, 82, 10];
const sortedArray = mergeSort(array);
console.log(sortedArray);  // Output: [3, 9, 10, 27, 38, 43, 82]