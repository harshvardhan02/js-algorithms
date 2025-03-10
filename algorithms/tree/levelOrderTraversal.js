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
 * Function to perform level-order traversal (breadth-first traversal) of a binary tree.
 * @param {TreeNode} root - The root node of the binary tree.
 * @returns {number[][]} - A 2D array where each subarray contains the values of the nodes at each level.
 */
function levelOrderTraversal(root) {
  const result = [];
  if (root === null) {
    return result;
  }

  const queue = [root];

  while (queue.length > 0) {
    const levelSize = queue.length;
    const currentLevel = [];

    for (let i = 0; i < levelSize; i++) {
      const currentNode = queue.shift();
      currentLevel.push(currentNode.value);

      if (currentNode.left !== null) {
        queue.push(currentNode.left);
      }

      if (currentNode.right !== null) {
        queue.push(currentNode.right);
      }
    }

    result.push(currentLevel);
  }

  return result;
}

// Example usage:

// Constructing a binary tree
//         1
//        / \
//       2   3
//      / \ / \
//     4  5 6  7

const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.left = new TreeNode(6);
root.right.right = new TreeNode(7);

const result = levelOrderTraversal(root);
console.log("Level-order traversal:", result); // Output: [[1], [2, 3], [4, 5, 6, 7]]