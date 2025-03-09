/**
 * Function to remove duplicates from an unsorted array.
 *
 * @param {number[]} arr - The input unsorted array.
 * @returns {number[]} - The array with duplicates removed.
 */
function removeDuplicatesUnsorted(arr) {
  const uniqueSet = new Set(arr);
  return Array.from(uniqueSet);
}

// Example usage:
const unsortedNumbers = [3, 5, 1, 8, -2, 7, 2, 5, 3];
const uniqueNumbers = removeDuplicatesUnsorted(unsortedNumbers);
console.log("Array with duplicates removed:", uniqueNumbers); // Output: [3, 5, 1, 8, -2, 7, 2]