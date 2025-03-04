/**
 * Z Algorithm implementation in JavaScript.
 *
 * The Z algorithm is used to find occurrences of a pattern in a given text.
 * It constructs the Z array, which for each position in the string, gives the length of the longest substring starting from that position
 * which is also a prefix of the string.
 * The time complexity of this solution is O(n) where n is the length of the concatenated string (pattern + "$" + text).
 */

/**
 * Function to construct the Z array for a given string.
 *
 * @param {string} s - The input string.
 * @returns {number[]} - The Z array.
 */
function computeZArray(s) {
  const Z = Array(s.length).fill(0);
  let left = 0, right = 0;

  for (let i = 1; i < s.length; i++) {
    if (i > right) {
      left = right = i;
      while (right < s.length && s[right] === s[right - left]) {
        right++;
      }
      Z[i] = right - left;
      right--;
    } else {
      const k = i - left;
      if (Z[k] < right - i + 1) {
        Z[i] = Z[k];
      } else {
        left = i;
        while (right < s.length && s[right] === s[right - left]) {
          right++;
        }
        Z[i] = right - left;
        right--;
      }
    }
  }
  return Z;
}

/**
 * Z Algorithm to find occurrences of a pattern in a text.
 *
 * @param {string} text - The text to search in.
 * @param {string} pattern - The pattern to search for.
 * @returns {number[]} - An array of starting indices where the pattern is found in the text.
 */
function zAlgorithm(text, pattern) {
  const concatenated = pattern + "$" + text;
  const Z = computeZArray(concatenated);
  const result = [];

  for (let i = 0; i < Z.length; i++) {
    if (Z[i] === pattern.length) {
      result.push(i - pattern.length - 1);
    }
  }

  return result;
}

// Example usage:
const text = "ababcabcabababd";
const pattern = "ababd";
const indices = zAlgorithm(text, pattern);
console.log("Pattern found at indices:", indices);  // Output: Pattern found at index: [10]