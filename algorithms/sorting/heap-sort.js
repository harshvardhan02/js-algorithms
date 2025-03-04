/**
 * Heap Sort algorithm implementation in JavaScript.
 *
 * The Heap Sort algorithm is a comparison-based sorting technique based on a Binary Heap data structure.
 * It is similar to selection sort where we first find the maximum element and place the maximum element at the end.
 * We repeat the same process for the remaining elements.
 *
 * This function sorts an array of numbers in ascending order using the Heap Sort algorithm.
 *
 * @param {number[]} arr - The array of numbers to be sorted.
 * @returns {number[]} - The sorted array.
 */

function heapSort(arr) {
  let len = arr.length;

  // Build a max heap
  for (let i = Math.floor(len / 2) - 1; i >= 0; i--) {
    heapify(arr, len, i);
  }

  // Extract elements from the heap
  for (let i = len - 1; i >= 0; i--) {
    // Move current root to end
    [arr[0], arr[i]] = [arr[i], arr[0]];

    // Call max heapify on the reduced heap
    heapify(arr, i, 0);
  }

  return arr;
}

function heapify(arr, len, i) {
  let largest = i; // Initialize largest as root
  let left = 2 * i + 1; // left = 2*i + 1
  let right = 2 * i + 2; // right = 2*i + 2

  // If left child is larger than root
  if (left < len && arr[left] > arr[largest]) {
    largest = left;
  }

  // If right child is larger than largest so far
  if (right < len && arr[right] > arr[largest]) {
    largest = right;
  }

  // If largest is not root
  if (largest !== i) {
    [arr[i], arr[largest]] = [arr[largest], arr[i]];

    // Recursively heapify the affected sub-tree
    heapify(arr, len, largest);
  }
}

// Example usage:
const array = [12, 11, 13, 5, 6, 7];
console.log("Unsorted array:", array);
const sortedArray = heapSort(array);
console.log("Sorted array:", sortedArray);