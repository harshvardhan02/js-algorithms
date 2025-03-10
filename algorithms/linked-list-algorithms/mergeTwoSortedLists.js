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
 * Function to merge two sorted linked lists into one sorted linked list.
 * @param {ListNode} l1 - The head node of the first sorted linked list.
 * @param {ListNode} l2 - The head node of the second sorted linked list.
 * @returns {ListNode} - The head node of the merged sorted linked list.
 */
function mergeTwoSortedLists(l1, l2) {
  const dummy = new ListNode(0);
  let current = dummy;

  while (l1 !== null && l2 !== null) {
    if (l1.value < l2.value) {
      current.next = l1;
      l1 = l1.next;
    } else {
      current.next = l2;
      l2 = l2.next;
    }
    current = current.next;
  }

  if (l1 !== null) {
    current.next = l1;
  } else {
    current.next = l2;
  }

  return dummy.next;
}

// Example usage:

// Creating first sorted linked list: 1 -> 3 -> 5
const l1 = new ListNode(1);
l1.next = new ListNode(3);
l1.next.next = new ListNode(5);

// Creating second sorted linked list: 2 -> 4 -> 6
const l2 = new ListNode(2);
l2.next = new ListNode(4);
l2.next.next = new ListNode(6);

// Merging the two sorted linked lists
const mergedHead = mergeTwoSortedLists(l1, l2);

// Printing the merged sorted linked list
let current = mergedHead;
const mergedList = [];
while (current !== null) {
  mergedList.push(current.value);
  current = current.next;
}
console.log("Merged sorted linked list:", mergedList); // Output: [1, 2, 3, 4, 5, 6]