/**
 * Function to count the frequency of each element in an array.
 *
 * @param {number[]} arr - The input array.
 * @returns {Object} - An object where keys are the elements and values are their frequencies.
 */
function countFrequency(arr) {
  const frequencyMap = {};

  for (let num of arr) {
    if (frequencyMap[num]) {
      frequencyMap[num]++;
    } else {
      frequencyMap[num] = 1;
    }
  }

  return frequencyMap;
}

/**
 * Function to rearrange the array in increasing-decreasing order.
 *
 * The first half of the array is sorted in increasing order,
 * and the second half is sorted in decreasing order.
 *
 * @param {number[]} arr - The input array.
 * @returns {number[]} - The rearranged array.
 */
function rearrangeArray(arr) {
  arr.sort((a, b) => a - b);

  const mid = Math.floor(arr.length / 2);
  const firstHalf = arr.slice(0, mid);
  const secondHalf = arr.slice(mid).reverse();

  return firstHalf.concat(secondHalf);
}

// Example usage:
const numbers = [3, 5, 1, 8, -2, 7, 2, 5, 3];

console.log("Original Array:", numbers);

const frequency = countFrequency(numbers);
console.log("Frequency of each element:", frequency); // Output: { '1': 1, '2': 1, '3': 2, '5': 2, '7': 1, '8': 1, '-2': 1 }

const rearrangedArray = rearrangeArray(numbers);
console.log("Rearranged Array in increasing-decreasing order:", rearrangedArray); // Output: [-2, 1, 2, 3, 3, 5, 5, 8, 7]