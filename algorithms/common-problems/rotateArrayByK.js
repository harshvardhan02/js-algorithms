/**
 * Function to rotate an array by K elements using the Block Swap Algorithm.
 *
 * The Block Swap Algorithm is an efficient way to rotate an array.
 * It divides the array into two parts and swaps the blocks recursively.
 *
 * @param {number[]} arr - The input array.
 * @param {number} k - The number of elements to rotate by.
 * @returns {number[]} - The rotated array.
 */
function rotateArrayByK(arr, k) {
  const n = arr.length;
  k = k % n; // Handle cases where k is greater than the length of the array

  if (k === 0 || k === n) {
    return arr;
  }

  function swap(arr, start1, start2, blockSize) {
    for (let i = 0; i < blockSize; i++) {
      [arr[start1 + i], arr[start2 + i]] = [arr[start2 + i], arr[start1 + i]];
    }
  }

  function rotateRecursively(arr, i, j, k) {
    if (i === k || j === k) {
      swap(arr, i, n - k + i, k);
      return;
    }

    if (i < j) {
      swap(arr, i, n - j + i, i);
      rotateRecursively(arr, i, j - i, k);
    } else {
      swap(arr, i, n - j + i, j);
      rotateRecursively(arr, i - j, j, k);
    }
  }

  rotateRecursively(arr, 0, n - k, k);

  return arr;
}

// Example usage:
const numbers = [1, 2, 3, 4, 5, 6, 7];
const k = 3;
console.log("Original Array:", numbers);
const rotatedArray = rotateArrayByK(numbers, k);
console.log("Array after rotating by", k, "elements:", rotatedArray); // Output: [5, 6, 7, 1, 2, 3, 4]