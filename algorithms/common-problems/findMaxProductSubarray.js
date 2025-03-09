/**
 * Function to find the maximum product subarray in an array.
 *
 * @param {number[]} arr - The input array.
 * @returns {number} - The maximum product of a subarray.
 */
function findMaxProductSubarray(arr) {
  if (arr.length === 0) {
    throw new Error("Array is empty.");
  }

  let maxProduct = arr[0];
  let minProduct = arr[0];
  let result = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < 0) {
      [maxProduct, minProduct] = [minProduct, maxProduct];
    }

    maxProduct = Math.max(arr[i], maxProduct * arr[i]);
    minProduct = Math.min(arr[i], minProduct * arr[i]);

    result = Math.max(result, maxProduct);
  }

  return result;
}

// Example usage:
const numbers = [2, 3, -2, 4];
const maxProduct = findMaxProductSubarray(numbers);
console.log("Maximum product of a subarray:", maxProduct); // Output: 6