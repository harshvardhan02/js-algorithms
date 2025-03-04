/**
 * Knuth-Morris-Pratt (KMP) Algorithm implementation in JavaScript.
 *
 * The KMP algorithm is used for searching a pattern in a given text. It preprocesses the pattern to create a partial match table
 * (also known as the "longest prefix suffix" (LPS) array) to determine the next positions to match.
 * This allows the algorithm to avoid unnecessary comparisons and achieve a time complexity of O(n + m),
 * where n is the length of the text and m is the length of the pattern.
 */

/**
 * Preprocess the pattern to create the LPS array.
 *
 * @param {string} pattern - The pattern to preprocess.
 * @returns {number[]} - The LPS array.
 */
function computeLPSArray(pattern) {
  const lps = Array(pattern.length).fill(0);
  let length = 0;
  let i = 1;

  while (i < pattern.length) {
    if (pattern[i] === pattern[length]) {
      length++;
      lps[i] = length;
      i++;
    } else {
      if (length !== 0) {
        length = lps[length - 1];
      } else {
        lps[i] = 0;
        i++;
      }
    }
  }

  return lps;
}

/**
 * KMP search algorithm to find occurrences of a pattern in a text.
 *
 * @param {string} text - The text to search in.
 * @param {string} pattern - The pattern to search for.
 * @returns {number[]} - An array of starting indices where the pattern is found in the text.
 */
function kmpSearch(text, pattern) {
  const lps = computeLPSArray(pattern);
  const result = [];
  let i = 0; // Index for text
  let j = 0; // Index for pattern

  while (i < text.length) {
    if (pattern[j] === text[i]) {
      i++;
      j++;
    }

    if (j === pattern.length) {
      result.push(i - j);
      j = lps[j - 1];
    } else if (i < text.length && pattern[j] !== text[i]) {
      if (j !== 0) {
        j = lps[j - 1];
      } else {
        i++;
      }
    }
  }

  return result;
}

// Example usage:
const text = "ababcabcabababd";
const pattern = "ababd";
const indices = kmpSearch(text, pattern);
console.log("Pattern found at indices:", indices);  // Output: Pattern found at indices: [10]