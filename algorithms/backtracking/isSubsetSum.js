/**
 * Function to determine if there is a subset of the given set with a sum equal to the given sum.
 *
 * @param {number[]} set - The input set of numbers.
 * @param {number} sum - The target sum.
 * @returns {boolean} - True if there is a subset with the target sum, otherwise false.
 */
function isSubsetSum(set, sum) {
  const n = set.length;
  const subset = Array.from({ length: n + 1 }, () => Array(sum + 1).fill(false));

  // If sum is 0, then answer is true
  for (let i = 0; i <= n; i++) {
    subset[i][0] = true;
  }

  // If sum is not 0 and set is empty, then answer is false
  for (let i = 1; i <= sum; i++) {
    subset[0][i] = false;
  }

  // Fill the subset table in bottom up manner
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= sum; j++) {
      if (j < set[i - 1]) {
        subset[i][j] = subset[i - 1][j];
      } else {
        subset[i][j] = subset[i - 1][j] || subset[i - 1][j - set[i - 1]];
      }
    }
  }

  return subset[n][sum];
}

// Example usage:
const set = [3, 34, 4, 12, 5, 2];
const sum = 9;
const result = isSubsetSum(set, sum);
console.log(`Is there a subset with sum ${sum}?:`, result); // Output: true