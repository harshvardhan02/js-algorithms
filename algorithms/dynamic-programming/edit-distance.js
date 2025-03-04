/**
 * Edit Distance (Levenshtein Distance) algorithm implementation in JavaScript.
 *
 * The Edit Distance problem is the problem of finding the minimum number of operations required to transform one string into another.
 * The allowed operations are insertion, deletion, and substitution.
 *
 * This function finds the edit distance between two strings using dynamic programming.
 *
 * @param {string} word1 - The first string.
 * @param {string} word2 - The second string.
 * @returns {number} - The minimum number of operations required to transform word1 into word2.
 */
function editDistance(word1, word2) {
  const m = word1.length;
  const n = word2.length;
  const dp = Array(m + 1).fill().map(() => Array(n + 1).fill(0));

  for (let i = 0; i <= m; i++) {
    for (let j = 0; j <= n; j++) {
      if (i === 0) {
        dp[i][j] = j; // If first string is empty, insert all characters of second string
      } else if (j === 0) {
        dp[i][j] = i; // If second string is empty, remove all characters of first string
      } else if (word1[i - 1] === word2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1]; // If the last characters are the same, ignore them
      } else {
        dp[i][j] = 1 + Math.min(dp[i - 1][j],    // Remove
          dp[i][j - 1],    // Insert
          dp[i - 1][j - 1] // Replace
        );
      }
    }
  }

  return dp[m][n];
}

// Example usage:
const word1 = "kitten";
const word2 = "sitting";
const distance = editDistance(word1, word2);
console.log(distance);  // Output: 3