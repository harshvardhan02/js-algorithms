/**
 * Radix Sort algorithm implementation in JavaScript.
 *
 * The Radix Sort algorithm is a non-comparative sorting algorithm that sorts numbers by processing individual digits.
 * It processes digits from the least significant digit to the most significant digit.
 * It uses counting sort as a subroutine to sort the digits.
 *
 * This function sorts an array of non-negative integers in ascending order using the Radix Sort algorithm.
 *
 * @param {number[]} arr - The array of numbers to be sorted.
 * @returns {number[]} - The sorted array.
 */
function radixSort(arr) {
  const maxNum = Math.max(...arr);
  let digitPlace = 1;

  while (Math.floor(maxNum / digitPlace) > 0) {
    arr = countingSortByDigit(arr, digitPlace);
    digitPlace *= 10;
  }

  return arr;
}

/**
 * Counting Sort algorithm implementation for a specific digit place.
 *
 * @param {number[]} arr - The array of numbers to be sorted.
 * @param {number} digitPlace - The digit place to be sorted by (units, tens, hundreds, etc.).
 * @returns {number[]} - The sorted array by the specific digit place.
 */
function countingSortByDigit(arr, digitPlace) {
  const count = new Array(10).fill(0);
  const output = new Array(arr.length).fill(0);

  // Count occurrences of each digit
  for (let i = 0; i < arr.length; i++) {
    const digit = Math.floor(arr[i] / digitPlace) % 10;
    count[digit]++;
  }

  // Change count[i] so that it contains the actual position of this digit in output[]
  for (let i = 1; i < 10; i++) {
    count[i] += count[i - 1];
  }

  // Build the output array
  for (let i = arr.length - 1; i >= 0; i--) {
    const digit = Math.floor(arr[i] / digitPlace) % 10;
    output[count[digit] - 1] = arr[i];
    count[digit]--;
  }

  return output;
}

// Example usage:
const array = [170, 45, 75, 90, 802, 24, 2, 66];
const sortedArray = radixSort(array);
console.log(sortedArray);  // Output: [2, 24, 45, 66, 75, 90, 170, 802]