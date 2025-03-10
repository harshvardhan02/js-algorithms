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
 * Function to find the maximum path sum in a binary tree.
 * The path can start and end at any node in the tree.
 * 
 * @param {TreeNode} root - The root node of the binary tree.
 * @returns {number} - The maximum path sum.
 */
function maxPathSum(root) {
  let maxSum = -Infinity;

  function findMaxPath(node) {
    if (node === null) {
      return 0;
    }

    // Recursively get the maximum path sum of the left and right subtrees
    const leftMax = Math.max(findMaxPath(node.left), 0);
    const rightMax = Math.max(findMaxPath(node.right), 0);

    // Calculate the path sum through the current node
    const currentSum = node.value + leftMax + rightMax;

    // Update the maximum path sum found so far
    maxSum = Math.max(maxSum, currentSum);

    // Return the maximum path sum including the current node and one of its subtrees
    return node.value + Math.max(leftMax, rightMax);
  }

  findMaxPath(root);
  return maxSum;
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

const result = maxPathSum(root);
console.log(`The maximum path sum in the binary tree is: ${result}`); // Output: 15