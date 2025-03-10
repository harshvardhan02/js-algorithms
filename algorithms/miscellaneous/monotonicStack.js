/**
 * Function to find the next greater element for each element in an array using a monotonic stack.
 * @param {number[]} nums - The array of numbers.
 * @returns {number[]} - An array where each element is replaced by the next greater element to its right, or -1 if no such element exists.
 */
function nextGreaterElement(nums) {
  const result = new Array(nums.length).fill(-1);
  const stack = [];

  for (let i = 0; i < nums.length; i++) {
    while (stack.length > 0 && nums[stack[stack.length - 1]] < nums[i]) {
      const index = stack.pop();
      result[index] = nums[i];
    }
    stack.push(i);
  }

  return result;
}

// Example usage:

const nums = [2, 1, 2, 4, 3];
console.log(`Next greater elements: ${nextGreaterElement(nums)}`); // Output: [4, 2, 4, -1, -1]