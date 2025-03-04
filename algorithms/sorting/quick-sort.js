/**
 * Quick Sort algorithm implementation in JavaScript.
 *
 * The Quick Sort algorithm is an efficient, comparison-based, divide and conquer sorting algorithm.
 * It works by selecting a 'pivot' element from the array and partitioning the other elements into two sub-arrays,
 * according to whether they are less than or greater than the pivot. The sub-arrays are then sorted recursively.
 *
 * This function sorts an array of numbers in ascending order using the Quick Sort algorithm.
 *
 * @param {number[]} arr - The array of numbers to be sorted.
 * @returns {number[]} - The sorted array.
 */
function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const pivot = arr[Math.floor(arr.length / 2)];
  const left = [];
  const right = [];
  const equal = [];

  for (const num of arr) {
    if (num < pivot) {
      left.push(num);
    } else if (num > pivot) {
      right.push(num);
    } else {
      equal.push(num);
    }
  }

  return [...quickSort(left), ...equal, ...quickSort(right)];
}

// Example usage:
const array = [3, 6, 8, 10, 1, 2, 1];
const sortedArray = quickSort(array);
console.log(sortedArray);  // Output: [1, 1, 2, 3, 6, 8, 10]