/**
 * Function to replace each element of the array by its rank in the array.
 * The rank of a number is its position in the sorted array.
 *
 * @param {number[]} arr - The input array.
 * @returns {number[]} - The array with each element replaced by its rank.
 */
function replaceWithRank(arr) {
  if (arr.length === 0) {
    return arr;
  }

  // Create a sorted copy of the array
  const sortedArray = [...arr].sort((a, b) => a - b);

  // Create a map to store the rank of each element
  const rankMap = new Map();
  sortedArray.forEach((num, index) => {
    if (!rankMap.has(num)) {
      rankMap.set(num, index + 1);
    }
  });

  // Replace each element in the original array with its rank
  return arr.map(num => rankMap.get(num));
}

// Example usage:
const numbers = [40, 10, 20, 30, 20];
const rankedArray = replaceWithRank(numbers);
console.log("Array with elements replaced by their rank:", rankedArray); // Output: [4, 1, 2, 3, 2]