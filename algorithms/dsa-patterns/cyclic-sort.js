/**
 * Cyclic Sort implementation in JavaScript.
 *
 * The cyclic sort algorithm is used to sort an array of integers where the integers are in the range from 1 to n.
 * The time complexity of this sorting algorithm is O(n) and the space complexity is O(1).
 *
 * @param {number[]} nums - The input array of integers.
 * @returns {number[]} - The sorted array.
 */
function cyclicSort(nums) {
  let i = 0;

  while (i < nums.length) {
    const correctIndex = nums[i] - 1;

    if (nums[i] !== nums[correctIndex]) {
      // Swap nums[i] with nums[correctIndex]
      [nums[i], nums[correctIndex]] = [nums[correctIndex], nums[i]];
    } else {
      i++;
    }
  }

  return nums;
}

// Example usage:
const nums = [3, 1, 5, 4, 2];
console.log("Original Array:", nums);
const sortedArray = cyclicSort(nums);
console.log("Sorted Array:", sortedArray);  // Output: [1, 2, 3, 4, 5]