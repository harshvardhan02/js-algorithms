/**
 * Longest Palindromic Substring algorithm implementation in JavaScript.
 *
 * The Longest Palindromic Substring problem is the problem of finding the longest substring in a given string
 * that reads the same backward as forward.
 *
 * This function finds the longest palindromic substring in a given string using dynamic programming.
 *
 * @param {string} s - The input string.
 * @returns {string} - The longest palindromic substring.
 */
function longestPalindrome(s) {
  const n = s.length;
  if (n === 0) return "";

  const dp = Array(n).fill().map(() => Array(n).fill(false));
  let start = 0;
  let maxLength = 1;

  // All substrings of length 1 are palindromic
  for (let i = 0; i < n; i++) {
    dp[i][i] = true;
  }

  // Check for substrings of length 2
  for (let i = 0; i < n - 1; i++) {
    if (s[i] === s[i + 1]) {
      dp[i][i + 1] = true;
      start = i;
      maxLength = 2;
    }
  }

  // Check for substrings of length greater than 2
  for (let k = 3; k <= n; k++) {
    for (let i = 0; i <= n - k; i++) {
      const j = i + k - 1;

      if (dp[i + 1][j - 1] && s[i] === s[j]) {
        dp[i][j] = true;

        if (k > maxLength) {
          start = i;
          maxLength = k;
        }
      }
    }
  }

  return s.substring(start, start + maxLength);
}

// Example usage:
const inputString = "babad";
const longestPalindromicSubstring = longestPalindrome(inputString);
console.log(longestPalindromicSubstring);  // Output: "bab" or "aba"