/**
 * Implementation of Reservoir Sampling algorithm to select k items from a stream of unknown size.
 * @param {number[]} stream - The array representing the stream of items.
 * @param {number} k - The number of items to sample.
 * @returns {number[]} - The sampled k items.
 */
function reservoirSampling(stream, k) {
  const reservoir = [];

  // Fill the reservoir array with the first k elements from the stream
  for (let i = 0; i < k; i++) {
    reservoir.push(stream[i]);
  }

  // Process the remaining elements of the stream
  for (let i = k; i < stream.length; i++) {
    // Randomly select an index from 0 to i
    const j = Math.floor(Math.random() * (i + 1));

    // If the selected index is within the first k indices, replace the element at that index with the current stream element
    if (j < k) {
      reservoir[j] = stream[i];
    }
  }

  return reservoir;
}

// Example usage:

const stream = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const k = 3;
const sample = reservoirSampling(stream, k);

console.log(`Sampled ${k} items from the stream:`, sample);