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
 * Function to get the intersection point of two linked lists, if any.
 * @param {ListNode} headA - The head node of the first linked list.
 * @param {ListNode} headB - The head node of the second linked list.
 * @returns {ListNode} - The intersection node, or null if there is no intersection.
 */
function getIntersectionNode(headA, headB) {
  if (headA === null || headB === null) {
    return null;
  }

  let pointerA = headA;
  let pointerB = headB;

  // Traverse both lists, and when reaching the end of one list, continue from the beginning of the other list.
  while (pointerA !== pointerB) {
    pointerA = pointerA === null ? headB : pointerA.next;
    pointerB = pointerB === null ? headA : pointerB.next;
  }

  return pointerA;
}

// Example usage:

// Creating two linked lists with intersection

// List A: 1 -> 2 -> 3
//                   \
//                    6 -> 7
//                   /
// List B:       4 -> 5

const intersection = new ListNode(6);
intersection.next = new ListNode(7);

const headA = new ListNode(1);
headA.next = new ListNode(2);
headA.next.next = new ListNode(3);
headA.next.next.next = intersection;

const headB = new ListNode(4);
headB.next = new ListNode(5);
headB.next.next = intersection;

const intersectionNode = getIntersectionNode(headA, headB);
if (intersectionNode !== null) {
  console.log(`The intersection point is: ${intersectionNode.value}`); // Output: 6
} else {
  console.log("There is no intersection point.");
}