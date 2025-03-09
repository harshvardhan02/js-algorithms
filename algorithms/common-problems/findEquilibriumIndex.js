/**
 * Function to find the equilibrium index of an array.
 * The equilibrium index is an index such that the sum of elements at lower indexes is equal to the sum of elements at higher indexes.
 *
 * @param {number[]} arr - The input array.
 * @returns {number} - The equilibrium index or -1 if no equilibrium index exists.
 */
function findEquilibriumIndex(arr) {
  const totalSum = arr.reduce((sum, num) => sum + num, 0);
  let leftSum = 0;

  for (let i = 0; i < arr.length; i++) {
    const rightSum = totalSum - leftSum - arr[i];
    if (leftSum === rightSum) {
      return i;
    }
    leftSum += arr[i];
  }

  return -1;
}

// Example usage:
const numbers = [1, 3, 5, 2, 2];
const equilibriumIndex = findEquilibriumIndex(numbers);
console.log("Equilibrium index of the array:", equilibriumIndex); // Output: 2