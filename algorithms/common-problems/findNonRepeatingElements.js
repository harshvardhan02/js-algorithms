/**
 * Function to find all non-repeating elements in an array.
 *
 * @param {number[]} arr - The input array.
 * @returns {number[]} - An array of non-repeating elements.
 */
function findNonRepeatingElements(arr) {
  const elementCount = {};
  const nonRepeatingElements = [];

  // Count the occurrences of each element in the array
  for (let num of arr) {
    if (elementCount[num]) {
      elementCount[num]++;
    } else {
      elementCount[num] = 1;
    }
  }

  // Collect elements that have a count of 1
  for (let num in elementCount) {
    if (elementCount[num] === 1) {
      nonRepeatingElements.push(Number(num));
    }
  }

  return nonRepeatingElements;
}

// Example usage:
const numbers = [3, 5, 1, 8, 3, 7, 2, 5, 3];
const nonRepeatingNumbers = findNonRepeatingElements(numbers);
console.log("Non-repeating elements in the array:", nonRepeatingNumbers); // Output: [1, 8, 7, 2]