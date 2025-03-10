/**
 * Class to find the median from a data stream.
 * Uses two heaps: a max-heap for the lower half of the numbers and a min-heap for the upper half.
 */
class MedianFinder {
  constructor() {
    this.low = new MaxHeap(); // Max-heap for the lower half
    this.high = new MinHeap(); // Min-heap for the upper half
  }

  /**
   * Adds a number to the data stream.
   * @param {number} num - The number to add.
   */
  addNum(num) {
    if (this.low.size() === 0 || num <= this.low.peek()) {
      this.low.insert(num);
    } else {
      this.high.insert(num);
    }

    // Balance the heaps
    if (this.low.size() > this.high.size() + 1) {
      this.high.insert(this.low.extractMax());
    } else if (this.high.size() > this.low.size()) {
      this.low.insert(this.high.extractMin());
    }
  }

  /**
   * Finds the median of the numbers added so far.
   * @returns {number} - The median.
   */
  findMedian() {
    if (this.low.size() > this.high.size()) {
      return this.low.peek();
    } else {
      return (this.low.peek() + this.high.peek()) / 2;
    }
  }
}

/**
 * Class representing a max-heap.
 */
class MaxHeap {
  constructor() {
    this.heap = [];
  }

  size() {
    return this.heap.length;
  }

  peek() {
    return this.heap[0];
  }

  insert(value) {
    this.heap.push(value);
    this.bubbleUp(this.heap.length - 1);
  }

  extractMax() {
    if (this.size() === 0) {
      throw new Error("Heap is empty");
    }

    const max = this.heap[0];
    const end = this.heap.pop();

    if (this.size() > 0) {
      this.heap[0] = end;
      this.bubbleDown(0);
    }

    return max;
  }

  bubbleUp(index) {
    const element = this.heap[index];

    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      const parent = this.heap[parentIndex];

      if (element <= parent) {
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
        if (leftChild > element) {
          swap = leftChildIndex;
        }
      }

      if (rightChildIndex < length) {
        rightChild = this.heap[rightChildIndex];
        if (
          (swap === null && rightChild > element) ||
          (swap !== null && rightChild > leftChild)
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

  peek() {
    return this.heap[0];
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

const medianFinder = new MedianFinder();
medianFinder.addNum(1);
medianFinder.addNum(2);
console.log(medianFinder.findMedian()); // Output: 1.5
medianFinder.addNum(3);
console.log(medianFinder.findMedian()); // Output: 2