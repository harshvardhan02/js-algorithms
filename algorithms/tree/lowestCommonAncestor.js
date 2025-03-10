/**
 * Class representing a node in a binary tree.
 */
class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

/**
 * Function to find the lowest common ancestor (LCA) of two nodes in a binary tree.
 *
 * @param {TreeNode} root - The root node of the binary tree.
 * @param {TreeNode} p - The first node.
 * @param {TreeNode} q - The second node.
 * @returns {TreeNode} - The LCA of the two nodes.
 */
function lowestCommonAncestor(root, p, q) {
  if (root === null || root === p || root === q) {
    return root;
  }

  const left = lowestCommonAncestor(root.left, p, q);
  const right = lowestCommonAncestor(root.right, p, q);

  if (left !== null && right !== null) {
    return root;
  }

  return left !== null ? left : right;
}

// Example usage:

// Constructing a binary tree
//         3
//        / \
//       5   1
//      / \ / \
//     6  2 0  8
//       / \
//      7   4

const root = new TreeNode(3);
const node5 = new TreeNode(5);
const node1 = new TreeNode(1);
const node6 = new TreeNode(6);
const node2 = new TreeNode(2);
const node0 = new TreeNode(0);
const node8 = new TreeNode(8);
const node7 = new TreeNode(7);
const node4 = new TreeNode(4);

root.left = node5;
root.right = node1;
node5.left = node6;
node5.right = node2;
node1.left = node0;
node1.right = node8;
node2.left = node7;
node2.right = node4;

const lca1 = lowestCommonAncestor(root, node5, node1);
console.log(`The LCA of node 5 and node 1 is: ${lca1.value}`); // Output: 3

const lca2 = lowestCommonAncestor(root, node5, node4);
console.log(`The LCA of node 5 and node 4 is: ${lca2.value}`); // Output: 5