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
 * Function to reverse a linked list.
 * @param {ListNode} head - The head node of the linked list.
 * @returns {ListNode} - The new head node of the reversed linked list.
 */
function reverseLinkedList(head) {
  let prev = null;
  let current = head;
  let next = null;

  while (current !== null) {
    next = current.next; // Store the next node
    current.next = prev; // Reverse the current node's pointer
    prev = current; // Move the prev pointer one step forward
    current = next; // Move the current pointer one step forward
  }

  return prev; // The new head node of the reversed list
}

// Example usage:

// Creating a linked list: 1 -> 2 -> 3 -> 4 -> 5
const head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
head.next.next.next.next = new ListNode(5);

console.log("Original linked list:");
let current = head;
while (current !== null) {
  console.log(current.value);
  current = current.next;
}

// Reversing the linked list
const newHead = reverseLinkedList(head);

console.log("Reversed linked list:");
current = newHead;
while (current !== null) {
  console.log(current.value);
  current = current.next;
}