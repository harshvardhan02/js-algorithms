/**
 * Function to detect a cycle in a linked list using the Tortoise and Hare algorithm.
 * @param {ListNode} head - The head node of the linked list.
 * @returns {boolean} - True if there is a cycle in the linked list, otherwise false.
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

/**
 * Function to find the starting node of a cycle in a linked list using the Tortoise and Hare algorithm.
 * @param {ListNode} head - The head node of the linked list.
 * @returns {ListNode|null} - The starting node of the cycle if there is a cycle, otherwise null.
 */
function detectCycle(head) {
  if (head === null || head.next === null) {
    return null;
  }

  let slow = head;
  let fast = head;
  let hasCycle = false;

  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) {
      hasCycle = true;
      break;
    }
  }

  if (!hasCycle) {
    return null;
  }

  slow = head;
  while (slow !== fast) {
    slow = slow.next;
    fast = fast.next;
  }

  return slow;
}

/**
 * Class representing a node in a linked list.
 */
class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// Example usage:

// Creating a linked list with a cycle:
// 1 -> 2 -> 3 -> 4 -> 5
//           ^         |
//           |_________|
const head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
head.next.next.next.next = new ListNode(5);
head.next.next.next.next.next = head.next.next; // Creating a cycle at node with value 3

console.log(`Has cycle: ${hasCycle(head)}`); // Output: true
console.log(`Cycle starts at node with value: ${detectCycle(head).value}`); // Output: 3

// Creating a linked list without a cycle:
// 1 -> 2 -> 3 -> 4 -> 5
const head2 = new ListNode(1);
head2.next = new ListNode(2);
head2.next.next = new ListNode(3);
head2.next.next.next = new ListNode(4);
head2.next.next.next.next = new ListNode(5);

console.log(`Has cycle: ${hasCycle(head2)}`); // Output: false
console.log(`Cycle starts at node: ${detectCycle(head2)}`); // Output: null