/**
 * Coin Change problem implementation in JavaScript.
 *
 * The Coin Change problem is a classic algorithmic problem that involves finding the minimum number of coins
 * needed to make a given amount of money from a set of coin denominations.
 * 
 * This function finds the minimum number of coins needed to make up a given amount using dynamic programming.
 *
 * @param {number[]} coins - An array of coin denominations.
 * @param {number} amount - The total amount of money.
 * @returns {number} - The minimum number of coins needed to make up the given amount, or -1 if it's not possible.
 */
function coinChange(coins, amount) {
  const dp = Array(amount + 1).fill(Infinity);
  dp[0] = 0;

  for (let coin of coins) {
    for (let i = coin; i <= amount; i++) {
      dp[i] = Math.min(dp[i], dp[i - coin] + 1);
    }
  }

  return dp[amount] === Infinity ? -1 : dp[amount];
}

// Example usage:
const coins = [1, 2, 5];
const amount = 11;
const result = coinChange(coins, amount);
console.log(result);  // Output: 3 (11 = 5 + 5 + 1)