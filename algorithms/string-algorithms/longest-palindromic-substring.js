/**
 * Longest Palindromic Substring implementation in JavaScript.
 *
 * This function finds the longest palindromic substring in a given string using dynamic programming.
 * The time complexity of this solution is O(n^2) and the space complexity is O(n^2).
 *
 * @param {string} s - The input string.
 * @returns {string} - The longest palindromic substring.
 */
function longestPalindromicSubstring(s) {
  const n = s.length;
  if (n === 0) return '';

  // Create a 2D array to store whether substring s[i..j] is a palindrome
  const dp = Array.from({ length: n }, () => Array(n).fill(false));

  let start = 0;
  let maxLength = 1;

  // All substrings of length 1 are palindromes
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
  for (let length = 3; length <= n; length++) {
    for (let i = 0; i < n - length + 1; i++) {
      const j = i + length - 1;

      // Check if s[i..j] is a palindrome
      if (s[i] === s[j] && dp[i + 1][j - 1]) {
        dp[i][j] = true;

        if (length > maxLength) {
          start = i;
          maxLength = length;
        }
      }
    }
  }

  return s.substring(start, start + maxLength);
}

// Example usage:
const inputString = "babad";
const longestPalindrome = longestPalindromicSubstring(inputString);
console.log("Longest Palindromic Substring:", longestPalindrome);  // Output: "bab" or "aba"