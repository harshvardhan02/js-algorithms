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
 * Function to perform in-order traversal of a binary tree.
 * @param {TreeNode} root - The root node of the binary tree.
 * @param {number[]} result - The array to store the traversal result.
 */
function inOrderTraversal(root, result = []) {
  if (root) {
    inOrderTraversal(root.left, result);
    result.push(root.value);
    inOrderTraversal(root.right, result);
  }
  return result;
}

/**
 * Function to perform pre-order traversal of a binary tree.
 * @param {TreeNode} root - The root node of the binary tree.
 * @param {number[]} result - The array to store the traversal result.
 */
function preOrderTraversal(root, result = []) {
  if (root) {
    result.push(root.value);
    preOrderTraversal(root.left, result);
    preOrderTraversal(root.right, result);
  }
  return result;
}

/**
 * Function to perform post-order traversal of a binary tree.
 * @param {TreeNode} root - The root node of the binary tree.
 * @param {number[]} result - The array to store the traversal result.
 */
function postOrderTraversal(root, result = []) {
  if (root) {
    postOrderTraversal(root.left, result);
    postOrderTraversal(root.right, result);
    result.push(root.value);
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

console.log("In-order traversal:", inOrderTraversal(root)); // Output: [4, 2, 5, 1, 6, 3, 7]
console.log("Pre-order traversal:", preOrderTraversal(root)); // Output: [1, 2, 4, 5, 3, 6, 7]
console.log("Post-order traversal:", postOrderTraversal(root)); // Output: [4, 5, 2, 6, 7, 3, 1]