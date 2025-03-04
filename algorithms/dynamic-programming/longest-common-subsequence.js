/**
 * Longest Common Subsequence (LCS) algorithm implementation in JavaScript.
 *
 * The Longest Common Subsequence problem is the problem of finding the longest subsequence common to all sequences
 * in a set of sequences (often just two sequences). A subsequence is a sequence that appears in the same relative order,
 * but not necessarily consecutively.
 *
 * This function finds the length of the longest common subsequence of two strings using dynamic programming.
 *
 * @param {string} text1 - The first string.
 * @param {string} text2 - The second string.
 * @returns {number} - The length of the longest common subsequence.
 */
function longestCommonSubsequence(text1, text2) {
  const m = text1.length;
  const n = text2.length;
  const dp = Array(m + 1).fill().map(() => Array(n + 1).fill(0));

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (text1[i - 1] === text2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }

  return dp[m][n];
}

// Example usage:
const text1 = "abcde";
const text2 = "ace";
const lcsLength = longestCommonSubsequence(text1, text2);
console.log(lcsLength);  // Output: 3