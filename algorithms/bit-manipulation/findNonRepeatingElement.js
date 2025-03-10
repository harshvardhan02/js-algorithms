/**
 * Function to find the non-repeating element in an array where every other element repeats twice.
 * Uses bit manipulation (XOR) to find the unique element.
 * @param {number[]} nums - The array of numbers.
 * @returns {number} - The non-repeating element.
 */
function findNonRepeatingElement(nums) {
  let uniqueElement = 0;
  for (let num of nums) {
    uniqueElement ^= num;
  }
  return uniqueElement;
}

// Example usage:

const nums1 = [2, 3, 5, 4, 5, 3, 4];
const nums2 = [1, 2, 2, 1, 3];
const nums3 = [10, 20, 30, 20, 10];

console.log(`The non-repeating element in [${nums1}] is: ${findNonRepeatingElement(nums1)}`); // Output: 2
console.log(`The non-repeating element in [${nums2}] is: ${findNonRepeatingElement(nums2)}`); // Output: 3
console.log(`The non-repeating element in [${nums3}] is: ${findNonRepeatingElement(nums3)}`); // Output: 30