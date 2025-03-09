/**
 * Function to find all symmetric pairs in an array.
 * A pair (a, b) is symmetric if there exists a pair (b, a).
 *
 * @param {number[][]} arr - The input array containing pairs of numbers.
 * @returns {number[][]} - An array of symmetric pairs.
 */
function findSymmetricPairs(arr) {
  const pairMap = new Map();
  const symmetricPairs = [];

  for (let [a, b] of arr) {
    if (pairMap.has(b) && pairMap.get(b) === a) {
      symmetricPairs.push([a, b]);
    } else {
      pairMap.set(a, b);
    }
  }

  return symmetricPairs;
}

// Example usage:
const pairs = [
  [1, 2],
  [2, 1],
  [3, 4],
  [4, 5],
  [5, 4],
  [6, 7]
];
const symmetricPairs = findSymmetricPairs(pairs);
console.log("Symmetric pairs in the array:", symmetricPairs); // Output: [[2, 1], [5, 4]]