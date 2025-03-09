/**
 * Function to remove duplicates from a sorted array.
 *
 * @param {number[]} arr - The input sorted array.
 * @returns {number[]} - The array with duplicates removed.
 */
function removeDuplicates(arr) {
  if (arr.length === 0) {
    return arr;
  }

  let uniqueIndex = 0;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== arr[uniqueIndex]) {
      uniqueIndex++;
      arr[uniqueIndex] = arr[i];
    }
  }

  return arr.slice(0, uniqueIndex + 1);
}

// Example usage:
const sortedNumbers = [1, 1, 2, 2, 3, 4, 4, 5];
const uniqueNumbers = removeDuplicates(sortedNumbers);
console.log("Array with duplicates removed:", uniqueNumbers); // Output: [1, 2, 3, 4, 5]