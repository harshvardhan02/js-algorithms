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
 * Function to find the diameter of a binary tree.
 * The diameter is defined as the length of the longest path between any two nodes in a tree.
 * This path may or may not pass through the root.
 *
 * @param {TreeNode} root - The root node of the binary tree.
 * @returns {number} - The diameter of the binary tree.
 */
function diameterOfBinaryTree(root) {
  let diameter = 0;

  function height(node) {
    if (node === null) {
      return 0;
    }
    const leftHeight = height(node.left);
    const rightHeight = height(node.right);
    diameter = Math.max(diameter, leftHeight + rightHeight);
    return 1 + Math.max(leftHeight, rightHeight);
  }

  height(root);
  return diameter;
}

// Example usage:

// Constructing a binary tree
//         1
//        / \
//       2   3
//      / \     
//     4   5    

const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

const result = diameterOfBinaryTree(root);
console.log(`The diameter of the binary tree is: ${result}`); // Output: 3