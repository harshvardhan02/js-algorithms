/**
 * Knapsack Problem implementation in JavaScript.
 *
 * The Knapsack Problem is a combinatorial optimization problem that derives its name from the problem faced by someone
 * who is constrained by a fixed-size knapsack and must fill it with the most valuable items.
 * The problem can be stated as: given a set of items, each with a weight and a value, determine the number of each item
 * to include in a collection so that the total weight is less than or equal to a given limit and the total value is as
 * large as possible.
 *
 * This function solves the 0/1 Knapsack Problem using dynamic programming.
 *
 * @param {number} capacity - The maximum weight capacity of the knapsack.
 * @param {number[]} weights - An array of weights for each item.
 * @param {number[]} values - An array of values for each item.
 * @returns {number} - The maximum value that can be put in the knapsack.
 */
function knapsack(capacity, weights, values) {
  const n = weights.length;
  const dp = Array(n + 1).fill().map(() => Array(capacity + 1).fill(0));

  for (let i = 1; i <= n; i++) {
    for (let w = 1; w <= capacity; w++) {
      if (weights[i - 1] <= w) {
        dp[i][w] = Math.max(dp[i - 1][w], dp[i - 1][w - weights[i - 1]] + values[i - 1]);
      } else {
        dp[i][w] = dp[i - 1][w];
      }
    }
  }

  return dp[n][capacity];
}

// Example usage:
const capacity = 50;
const weights = [10, 20, 30];
const values = [60, 100, 120];
const maxValue = knapsack(capacity, weights, values);
console.log(maxValue);  // Output: 220