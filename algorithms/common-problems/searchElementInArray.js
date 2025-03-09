/**
 * Function to search for an element in an array.
 * Returns the index of the element if found, otherwise returns -1.
 *
 * @param {number[]} arr - The input array.
 * @param {number} target - The element to search for.
 * @returns {number} - The index of the element if found, otherwise -1.
 */
function searchElementInArray(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
}

// Example usage:
const numbers = [10, 20, 30, 40, 50];
const target = 30;
const index = searchElementInArray(numbers, target);
console.log(`Element ${target} is found at index:`, index); // Output: Element 30 is found at index: 2

const targetNotFound = 60;
const indexNotFound = searchElementInArray(numbers, targetNotFound);
console.log(`Element ${targetNotFound} is found at index:`, indexNotFound); // Output: Element 60 is found at index: -1