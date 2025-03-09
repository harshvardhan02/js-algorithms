/**
 * Function to sort an array according to the order defined by another array.
 *
 * @param {number[]} arr - The input array to be sorted.
 * @param {number[]} order - The array that defines the order.
 * @returns {number[]} - The sorted array.
 */
function sortByOrder(arr, order) {
  const orderMap = new Map();
  const result = [];

  // Create a map to store the order of each element
  order.forEach((num, index) => {
    orderMap.set(num, index);
  });

  // Separate elements that are in the order array and those that are not
  const inOrder = [];
  const notInOrder = [];
  arr.forEach(num => {
    if (orderMap.has(num)) {
      inOrder.push(num);
    } else {
      notInOrder.push(num);
    }
  });

  // Sort the elements that are in the order array
  inOrder.sort((a, b) => orderMap.get(a) - orderMap.get(b));

  // Combine the sorted elements with the remaining elements
  result.push(...inOrder, ...notInOrder);

  return result;
}

// Example usage:
const numbers = [5, 3, 9, 1, 3, 5, 7, 9, 3];
const order = [3, 5, 7];
const sortedArray = sortByOrder(numbers, order);
console.log("Array sorted according to the defined order:", sortedArray); // Output: [3, 3, 3, 5, 5, 7, 9, 1, 9]