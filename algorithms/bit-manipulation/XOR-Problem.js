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
console.log(`The non-repeating element is: ${findNonRepeatingElement(nums1)}`); // Output: 2


/**
 * Function to find the two non-repeating elements in an array where every other element repeats twice.
 * @param {number[]} nums - The array of numbers.
 * @returns {number[]} - The two non-repeating elements.
 */
function findTwoNonRepeatingElements(nums) {
  // Step 1: XOR all numbers to get XOR of the two unique numbers
  let xor = 0;
  for (let num of nums) {
    xor ^= num;
  }

  // Step 2: Find a set bit in the xor (rightmost set bit)
  let setBit = xor & -xor;

  // Step 3: Divide numbers into two groups and XOR separately
  let num1 = 0, num2 = 0;
  for (let num of nums) {
    if (num & setBit) {
      num1 ^= num;
    } else {
      num2 ^= num;
    }
  }

  return [num1, num2];
}

// Example usage:
const nums2 = [1, 2, 1, 3, 2, 5];
console.log(`The two non-repeating elements are: ${findTwoNonRepeatingElements(nums2)}`); // Output: [3, 5]


/**
 * Function to find the missing number in an array containing n distinct numbers taken from 0, 1, 2, ..., n.
 * @param {number[]} nums - The array of numbers.
 * @returns {number} - The missing number.
 */
function findMissingNumber(nums) {
  let xor = nums.length;
  for (let i = 0; i < nums.length; i++) {
    xor ^= i ^ nums[i];
  }
  return xor;
}

// Example usage:
const nums3 = [3, 0, 1];
console.log(`The missing number is: ${findMissingNumber(nums3)}`); // Output: 2


/**
 * Function to swap two numbers without using a temporary variable.
 * Uses bit manipulation (XOR) to swap the numbers.
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @returns {[number, number]} - The swapped numbers.
 */
function swapTwoNumbers(a, b) {
  a = a ^ b;
  b = a ^ b;
  a = a ^ b;
  return [a, b];
}

// Example usage:
let a = 5, b = 7;
[a, b] = swapTwoNumbers(a, b);
console.log(`Swapped numbers: a = ${a}, b = ${b}`); // Output: a = 7, b = 5