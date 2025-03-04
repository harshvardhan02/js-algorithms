/**
 * Fractional Knapsack problem implementation in JavaScript.
 *
 * The Fractional Knapsack problem is a problem where we are given a set of items, each with a weight and a value,
 * and we need to determine the maximum value we can obtain by placing items (or fractions of items) into a knapsack
 * with a given capacity. We can take fractions of items, hence the term "fractional".
 *
 * This function finds the maximum value that can be achieved with the given capacity.
 *
 * @param {number} capacity - The total capacity of the knapsack.
 * @param {Array} items - An array of objects representing the items, each with a weight and value.
 * @returns {number} - The maximum value that can be achieved.
 */
function fractionalKnapsack(capacity, items) {
  // Sort items by value-to-weight ratio in descending order
  items.sort((a, b) => (b.value / b.weight) - (a.value / a.weight));

  let maxValue = 0;
  for (const item of items) {
    if (capacity === 0) break;

    if (item.weight <= capacity) {
      // If the entire item can be taken, take it
      maxValue += item.value;
      capacity -= item.weight;
    } else {
      // If only a fraction of the item can be taken, take the fraction
      maxValue += (item.value / item.weight) * capacity;
      capacity = 0;
    }
  }

  return maxValue;
}

// Example usage:
const items = [
  { weight: 10, value: 60 },
  { weight: 20, value: 100 },
  { weight: 30, value: 120 },
];

const capacity = 50;
const maxKnapsackValue = fractionalKnapsack(capacity, items);
console.log("Maximum value in knapsack:", maxKnapsackValue);  // Output: Maximum value in knapsack: 240