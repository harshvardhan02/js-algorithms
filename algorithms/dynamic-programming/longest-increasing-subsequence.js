/**
 * Longest Increasing Subsequence (LIS) algorithm implementation in JavaScript.
 *
 * The Longest Increasing Subsequence problem is the problem of finding the longest subsequence in a given sequence
 * such that all elements of the subsequence are sorted in increasing order.
 *
 * This function finds the length of the longest increasing subsequence in an array of numbers using dynamic programming.
 *
 * @param {number[]} nums - The array of numbers.
 * @returns {number} - The length of the longest increasing subsequence.
 */
function lengthOfLIS(nums) {
  if (nums.length === 0) return 0;

  const dp = Array(nums.length).fill(1);

  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
  }

  return Math.max(...dp);
}

// Example usage:
const array = [10, 9, 2, 5, 3, 7, 101, 18];
const lisLength = lengthOfLIS(array);
console.log(lisLength);  // Output: 4