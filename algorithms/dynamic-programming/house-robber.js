/**
 * House Robber problem implementation in JavaScript.
 *
 * The House Robber problem is a dynamic programming problem where a robber has to maximize the amount of money stolen from a row of houses,
 * but cannot rob two adjacent houses.
 *
 * This function finds the maximum amount of money that can be robbed without robbing two adjacent houses.
 *
 * @param {number[]} nums - An array of non-negative integers representing the amount of money in each house.
 * @returns {number} - The maximum amount of money that can be robbed.
 */
function rob(nums) {
  if (nums.length === 0) return 0;
  if (nums.length === 1) return nums[0];

  let prev1 = 0;
  let prev2 = 0;

  for (let num of nums) {
    let temp = prev1;
    prev1 = Math.max(prev2 + num, prev1);
    prev2 = temp;
  }

  return prev1;
}

// Example usage:
const houses = [2, 7, 9, 3, 1];
const maxRobbedAmount = rob(houses);
console.log(maxRobbedAmount);  // Output: 12