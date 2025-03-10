/**
 * Function to generate all permutations of an array.
 *
 * @param {any[]} array - The input array.
 * @returns {any[][]} - An array of all permutations of the input array.
 */
function getPermutations(array) {
  const results = [];

  function permute(arr, memo = []) {
    if (arr.length === 0) {
      results.push(memo);
    } else {
      for (let i = 0; i < arr.length; i++) {
        const curr = arr.slice();
        const next = curr.splice(i, 1);
        permute(curr.slice(), memo.concat(next));
      }
    }
  }

  permute(array);
  return results;
}

/**
 * Function to generate all combinations of a given size from an array.
 *
 * @param {any[]} array - The input array.
 * @param {number} size - The size of the combinations.
 * @returns {any[][]} - An array of all combinations of the given size from the input array.
 */
function getCombinations(array, size) {
  const results = [];

  function combine(arr, combo = []) {
    if (combo.length === size) {
      results.push(combo);
      return;
    }
    for (let i = 0; i < arr.length; i++) {
      combine(arr.slice(i + 1), combo.concat(arr[i]));
    }
  }

  combine(array);
  return results;
}

// Example usage:
const array = [1, 2, 3];
console.log("Permutations of [1, 2, 3]:", getPermutations(array));
/*
Output:
Permutations of [1, 2, 3]: [
  [ 1, 2, 3 ],
  [ 1, 3, 2 ],
  [ 2, 1, 3 ],
  [ 2, 3, 1 ],
  [ 3, 1, 2 ],
  [ 3, 2, 1 ]
]
*/

const combinationSize = 2;
console.log(`Combinations of size ${combinationSize} from [1, 2, 3]:`, getCombinations(array, combinationSize));
/*
Output:
Combinations of size 2 from [1, 2, 3]: [
  [ 1, 2 ],
  [ 1, 3 ],
  [ 2, 3 ]
]
*/