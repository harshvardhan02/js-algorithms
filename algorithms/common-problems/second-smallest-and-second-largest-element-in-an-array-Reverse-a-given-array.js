/**
 * Function to find the second smallest and second largest elements in an array.
 *
 * @param {number[]} arr - The input array.
 * @returns {Object} - An object containing the second smallest and second largest elements.
 */
function findSecondSmallestAndLargest(arr) {
  if (arr.length < 2) {
    throw new Error("Array must contain at least two elements.");
  }

  let smallest = Infinity;
  let secondSmallest = Infinity;
  let largest = -Infinity;
  let secondLargest = -Infinity;

  for (let num of arr) {
    if (num < smallest) {
      secondSmallest = smallest;
      smallest = num;
    } else if (num < secondSmallest && num !== smallest) {
      secondSmallest = num;
    }

    if (num > largest) {
      secondLargest = largest;
      largest = num;
    } else if (num > secondLargest && num !== largest) {
      secondLargest = num;
    }
  }

  return {
    secondSmallest: secondSmallest,
    secondLargest: secondLargest
  };
}

/**
 * Function to reverse a given array.
 *
 * @param {number[]} arr - The input array.
 * @returns {number[]} - The reversed array.
 */
function reverseArray(arr) {
  let start = 0;
  let end = arr.length - 1;

  while (start < end) {
    [arr[start], arr[end]] = [arr[end], arr[start]];
    start++;
    end--;
  }

  return arr;
}

// Example usage:
const numbers = [3, 5, 1, 8, -2, 7, 2];
const { secondSmallest, secondLargest } = findSecondSmallestAndLargest(numbers);
console.log("Second smallest number:", secondSmallest); // Output: 1
console.log("Second largest number:", secondLargest); // Output: 7

const reversedNumbers = reverseArray(numbers);
console.log("Reversed array:", reversedNumbers); // Output: [ 2, 7, -2, 8, 1, 5, 3 ]