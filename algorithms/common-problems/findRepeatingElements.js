/**
 * Function to find all repeating elements in an array.
 *
 * @param {number[]} arr - The input array.
 * @returns {number[]} - An array of repeating elements.
 */
function findRepeatingElements(arr) {
  const elementCount = {};
  const repeatingElements = [];

  for (let num of arr) {
    if (elementCount[num]) {
      elementCount[num]++;
    } else {
      elementCount[num] = 1;
    }
  }

  for (let num in elementCount) {
    if (elementCount[num] > 1) {
      repeatingElements.push(Number(num));
    }
  }

  return repeatingElements;
}

// Example usage:
const numbers = [3, 5, 1, 8, 3, 7, 2, 5, 3];
const repeatingNumbers = findRepeatingElements(numbers);
console.log("Repeating elements in the array:", repeatingNumbers); // Output: [3, 5]