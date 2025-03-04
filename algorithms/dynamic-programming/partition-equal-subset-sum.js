/**
 * Partition Equal Subset Sum algorithm implementation in JavaScript.
 *
 * The Partition Equal Subset Sum problem is the problem of determining whether a given array can be partitioned
 * into two subsets such that the sum of elements in both subsets is equal.
 *
 * This function checks whether the array can be partitioned into two subsets with equal sum using dynamic programming.
 *
 * @param {number[]} nums - The input array of non-negative integers.
 * @returns {boolean} - True if the array can be partitioned into two subsets with equal sum, otherwise false.
 */
function canPartition(nums) {
  const totalSum = nums.reduce((a, b) => a + b, 0);

  if (totalSum % 2 !== 0) {
    return false;
  }

  const target = totalSum / 2;
  const dp = Array(target + 1).fill(false);
  dp[0] = true;

  for (let num of nums) {
    for (let i = target; i >= num; i--) {
      dp[i] = dp[i] || dp[i - num];
    }
  }

  return dp[target];
}

// Example usage:
const nums = [1, 5, 11, 5];
const result = canPartition(nums);
console.log(result);  // Output: true