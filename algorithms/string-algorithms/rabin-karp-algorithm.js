/**
 * Rabin-Karp Algorithm implementation in JavaScript.
 *
 * The Rabin-Karp algorithm is used for searching a pattern in a given text. It uses hashing to find any one of a set
 * of pattern strings in a text. The average and best case time complexity is O(n + m), while the worst case time complexity is O(nm),
 * where n is the length of the text and m is the length of the pattern.
 */

/**
 * Rabin-Karp search algorithm to find occurrences of a pattern in a text.
 *
 * @param {string} text - The text to search in.
 * @param {string} pattern - The pattern to search for.
 * @param {number} q - A prime number to use for hashing.
 * @returns {number[]} - An array of starting indices where the pattern is found in the text.
 */
function rabinKarpSearch(text, pattern, q) {
  const d = 256; // Number of characters in the input alphabet
  const n = text.length;
  const m = pattern.length;
  const result = [];
  let p = 0; // Hash value for pattern
  let t = 0; // Hash value for text
  let h = 1;

  // The value of h would be "pow(d, m-1) % q"
  for (let i = 0; i < m - 1; i++) {
    h = (h * d) % q;
  }

  // Calculate the hash value of pattern and first window of text
  for (let i = 0; i < m; i++) {
    p = (d * p + pattern.charCodeAt(i)) % q;
    t = (d * t + text.charCodeAt(i)) % q;
  }

  // Slide the pattern over text one by one
  for (let i = 0; i <= n - m; i++) {
    // Check the hash values of current window of text and pattern
    if (p === t) {
      // If the hash values match, check for characters one by one
      let j;
      for (j = 0; j < m; j++) {
        if (text[i + j] !== pattern[j]) {
          break;
        }
      }
      if (j === m) {
        result.push(i);
      }
    }

    // Calculate hash value for next window of text: Remove leading digit, add trailing digit
    if (i < n - m) {
      t = (d * (t - text.charCodeAt(i) * h) + text.charCodeAt(i + m)) % q;

      // We might get negative value of t, converting it to positive
      if (t < 0) {
        t = t + q;
      }
    }
  }

  return result;
}

// Example usage:
const text = "GEEKS FOR GEEKS";
const pattern = "GEEK";
const q = 101; // A prime number
const indices = rabinKarpSearch(text, pattern, q);
console.log("Pattern found at indices:", indices);  // Output: Pattern found at indices: [0, 10]