/**
 * Function to find the kth largest element in an array using a min-heap.
 * @param {number[]} nums - The array of numbers.
 * @param {number} k - The kth position to find.
 * @returns {number} - The kth largest element in the array.
 */
function kthLargestElement(nums, k) {
  if (k > nums.length) {
    throw new Error("k is larger than the size of the array");
  }

  // Create a min-heap using a priority queue
  const minHeap = new MinHeap();

  for (let i = 0; i < nums.length; i++) {
    minHeap.insert(nums[i]);

    // If the heap size exceeds k, remove the minimum element
    if (minHeap.size() > k) {
      minHeap.extractMin();
    }
  }

  // The root of the heap is the kth largest element
  return minHeap.extractMin();
}

/**
 * Class representing a min-heap.
 */
class MinHeap {
  constructor() {
    this.heap = [];
  }

  size() {
    return this.heap.length;
  }

  insert(value) {
    this.heap.push(value);
    this.bubbleUp(this.heap.length - 1);
  }

  extractMin() {
    if (this.size() === 0) {
      throw new Error("Heap is empty");
    }

    const min = this.heap[0];
    const end = this.heap.pop();

    if (this.size() > 0) {
      this.heap[0] = end;
      this.bubbleDown(0);
    }

    return min;
  }

  bubbleUp(index) {
    const element = this.heap[index];

    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      const parent = this.heap[parentIndex];

      if (element >= parent) {
        break;
      }

      this.heap[index] = parent;
      index = parentIndex;
    }

    this.heap[index] = element;
  }

  bubbleDown(index) {
    const length = this.heap.length;
    const element = this.heap[index];

    while (true) {
      const leftChildIndex = 2 * index + 1;
      const rightChildIndex = 2 * index + 2;
      let leftChild, rightChild;
      let swap = null;

      if (leftChildIndex < length) {
        leftChild = this.heap[leftChildIndex];
        if (leftChild < element) {
          swap = leftChildIndex;
        }
      }

      if (rightChildIndex < length) {
        rightChild = this.heap[rightChildIndex];
        if (
          (swap === null && rightChild < element) ||
          (swap !== null && rightChild < leftChild)
        ) {
          swap = rightChildIndex;
        }
      }

      if (swap === null) {
        break;
      }

      this.heap[index] = this.heap[swap];
      index = swap;
    }

    this.heap[index] = element;
  }
}

// Example usage:

const nums = [3, 2, 1, 5, 6, 4];
const k = 2;
const result = kthLargestElement(nums, k);
console.log(`${k}th largest element in the array is: ${result}`); // Output: 5