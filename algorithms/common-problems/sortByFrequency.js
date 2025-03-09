/**
 * Function to sort the elements of an array by frequency.
 * Elements with higher frequencies come first. If two elements have the same frequency, they are sorted by their value.
 *
 * @param {number[]} arr - The input array.
 * @returns {number[]} - The array sorted by frequency.
 */
function sortByFrequency(arr) {
  const frequencyMap = new Map();

  // Calculate the frequency of each element
  for (let num of arr) {
    if (frequencyMap.has(num)) {
      frequencyMap.set(num, frequencyMap.get(num) + 1);
    } else {
      frequencyMap.set(num, 1);
    }
  }

  // Convert the map to an array and sort it by frequency and value
  const sortedArray = Array.from(frequencyMap.keys()).sort((a, b) => {
    const frequencyDifference = frequencyMap.get(b) - frequencyMap.get(a);
    return frequencyDifference === 0 ? a - b : frequencyDifference;
  });

  // Expand the sorted array based on frequency
  const result = [];
  for (let num of sortedArray) {
    for (let i = 0; i < frequencyMap.get(num); i++) {
      result.push(num);
    }
  }

  return result;
}

// Example usage:
const numbers = [3, 3, 1, 8, 3, 7, 2, 5, 2, 5, 5];
const sortedByFrequency = sortByFrequency(numbers);
console.log("Array sorted by frequency:", sortedByFrequency); // Output: [3, 3, 3, 5, 5, 5, 2, 2, 1, 7, 8]