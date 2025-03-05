/**
 * Fast and Slow Pointer Pattern implementation in JavaScript.
 *
 * The fast and slow pointer pattern is a common technique used to solve problems involving linked lists.
 * It involves using two pointers that move at different speeds (one faster than the other) to detect cycles, find the middle of the list, etc.
 */

/**
 * Class representing a node in the linked list.
 */
class ListNode {
  /**
   * Create a node.
   * @param {number} value - The value of the node.
   */
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

/**
 * Function to detect a cycle in a linked list using the fast and slow pointer pattern.
 *
 * @param {ListNode} head - The head of the linked list.
 * @returns {boolean} - True if there is a cycle, false otherwise.
 */
function hasCycle(head) {
  let slow = head;
  let fast = head;

  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) {
      return true;
    }
  }

  return false;
}

/**
 * Function to find the middle of a linked list using the fast and slow pointer pattern.
 *
 * @param {ListNode} head - The head of the linked list.
 * @returns {ListNode} - The middle node of the linked list.
 */
function findMiddle(head) {
  let slow = head;
  let fast = head;

  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow;
}

// Example usage:
// Create a linked list 1 -> 2 -> 3 -> 4 -> 5
const head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
head.next.next.next.next = new ListNode(5);

console.log("Original Linked List:");
let node = head;
while (node !== null) {
  console.log(node.value);
  node = node.next;
}

// Check if the linked list has a cycle
console.log("Has Cycle:", hasCycle(head)); // Output: false

// Find the middle of the linked list
const middleNode = findMiddle(head);
console.log("Middle Node:", middleNode.value); // Output: 3

// Create a cycle in the linked list: 5 -> 3
head.next.next.next.next.next = head.next.next;

// Check if the linked list has a cycle again
console.log("Has Cycle:", hasCycle(head)); // Output: true