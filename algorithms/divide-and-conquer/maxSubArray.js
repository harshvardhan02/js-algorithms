/**
 * Function to find the maximum sum of a contiguous subarray using the divide and conquer method.
 *
 * @param {number[]} nums - The input array of numbers.
 * @returns {number} - The maximum sum of the contiguous subarray.
 */
function maxSubArray(nums) {
  return maxSubArrayHelper(nums, 0, nums.length - 1);
}

function maxSubArrayHelper(nums, left, right) {
  if (left === right) {
    return nums[left];
  }

  const mid = Math.floor((left + right) / 2);
  const leftMax = maxSubArrayHelper(nums, left, mid);
  const rightMax = maxSubArrayHelper(nums, mid + 1, right);
  const crossMax = maxCrossingSum(nums, left, mid, right);

  return Math.max(leftMax, rightMax, crossMax);
}

function maxCrossingSum(nums, left, mid, right) {
  let sum = 0;
  let leftSum = -Infinity;
  for (let i = mid; i >= left; i--) {
    sum += nums[i];
    if (sum > leftSum) {
      leftSum = sum;
    }
  }

  sum = 0;
  let rightSum = -Infinity;
  for (let i = mid + 1; i <= right; i++) {
    sum += nums[i];
    if (sum > rightSum) {
      rightSum = sum;
    }
  }

  return leftSum + rightSum;
}

// Example usage:
const array = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
const result = maxSubArray(array);
console.log(`The maximum sum of the contiguous subarray is: ${result}`); // Output: 6