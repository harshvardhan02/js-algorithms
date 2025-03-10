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
 * Function to detect a cycle in a linked list.
 * @param {ListNode} head - The head node of the linked list.
 * @returns {boolean} - True if a cycle is detected, otherwise false.
 */
function hasCycle(head) {
  if (head === null || head.next === null) {
    return false;
  }

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

// Example usage:

// Creating a linked list: 1 -> 2 -> 3 -> 4 -> 5
const head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
head.next.next.next.next = new ListNode(5);

// Creating a cycle: 5 -> 3
head.next.next.next.next.next = head.next.next;

console.log("Cycle detected:", hasCycle(head)); // Output: true

// Breaking the cycle for further testing
head.next.next.next.next.next = null;

console.log("Cycle detected:", hasCycle(head)); // Output: false