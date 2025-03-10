/**
 * Class representing a node in a linked list.
 */
class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

/**
 * Function to merge k sorted linked lists using a min-heap.
 * @param {ListNode[]} lists - An array of the head nodes of the k sorted linked lists.
 * @returns {ListNode} - The head node of the merged sorted linked list.
 */
function mergeKSortedLists(lists) {
  const minHeap = new MinHeap();

  // Add the head of each list to the min-heap
  for (const list of lists) {
    if (list !== null) {
      minHeap.insert(list);
    }
  }

  const dummy = new ListNode(0);
  let current = dummy;

  while (minHeap.size() > 0) {
    const smallestNode = minHeap.extractMin();
    current.next = smallestNode;
    current = current.next;

    if (smallestNode.next !== null) {
      minHeap.insert(smallestNode.next);
    }
  }

  return dummy.next;
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

  insert(node) {
    this.heap.push(node);
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

      if (element.value >= parent.value) {
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
        if (leftChild.value < element.value) {
          swap = leftChildIndex;
        }
      }

      if (rightChildIndex < length) {
        rightChild = this.heap[rightChildIndex];
        if (
          (swap === null && rightChild.value < element.value) ||
          (swap !== null && rightChild.value < leftChild.value)
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

// Creating first sorted linked list: 1 -> 4 -> 5
const l1 = new ListNode(1);
l1.next = new ListNode(4);
l1.next.next = new ListNode(5);

// Creating second sorted linked list: 1 -> 3 -> 4
const l2 = new ListNode(1);
l2.next = new ListNode(3);
l2.next.next = new ListNode(4);

// Creating third sorted linked list: 2 -> 6
const l3 = new ListNode(2);
l3.next = new ListNode(6);

// Merging the three sorted linked lists
const lists = [l1, l2, l3];
const mergedHead = mergeKSortedLists(lists);

// Printing the merged sorted linked list
let current = mergedHead;
const mergedList = [];
while (current !== null) {
  mergedList.push(current.value);
  current = current.next;
}
console.log("Merged sorted linked list:", mergedList); // Output: [1, 1, 2, 3, 4, 4, 5, 6]