/**
 * Sliding Window Pattern implementation in JavaScript.
 *
 * The sliding window pattern is a common technique used to solve problems involving arrays or strings.
 * It involves using a window (a subarray or substring) that slides over the input data structure to solve problems like finding the maximum sum of a subarray of size k, longest substring with k unique characters, etc.
 */

/**
 * Example 1: Finding the maximum sum of a subarray of size k.
 *
 * @param {number[]} arr - The input array.
 * @param {number} k - The size of the subarray.
 * @returns {number} - The maximum sum of any subarray of size k.
 */
function maxSumSubarray(arr, k) {
  let maxSum = 0;
  let windowSum = 0;

  // Compute the sum of the first window
  for (let i = 0; i < k; i++) {
    windowSum += arr[i];
  }

  maxSum = windowSum;

  // Slide the window over the array
  for (let i = k; i < arr.length; i++) {
    windowSum += arr[i] - arr[i - k];
    maxSum = Math.max(maxSum, windowSum);
  }

  return maxSum;
}

/**
 * Example 2: Finding the longest substring with k unique characters.
 *
 * @param {string} str - The input string.
 * @param {number} k - The number of unique characters.
 * @returns {string} - The longest substring with k unique characters.
 */
function longestSubstringWithKUniqueChars(str, k) {
  let windowStart = 0;
  let maxLength = 0;
  let maxSubstring = "";
  const charFrequency = {};

  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    const endChar = str[windowEnd];
    if (!(endChar in charFrequency)) {
      charFrequency[endChar] = 0;
    }
    charFrequency[endChar]++;

    // Shrink the window until we have exactly k unique characters
    while (Object.keys(charFrequency).length > k) {
      const startChar = str[windowStart];
      charFrequency[startChar]--;
      if (charFrequency[startChar] === 0) {
        delete charFrequency[startChar];
      }
      windowStart++;
    }

    // Update the maximum length and substring if the current window is longer
    const windowLength = windowEnd - windowStart + 1;
    if (windowLength > maxLength) {
      maxLength = windowLength;
      maxSubstring = str.substring(windowStart, windowEnd + 1);
    }
  }

  return maxSubstring;
}

// Example usage:
const arr = [2, 1, 5, 1, 3, 2];
const k = 3;
console.log("Maximum sum of subarray of size", k, ":", maxSumSubarray(arr, k)); // Output: 9

const str = "araaci";
const uniqueChars = 2;
console.log("Longest substring with", uniqueChars, "unique characters:", longestSubstringWithKUniqueChars(str, uniqueChars)); // Output: "araa"