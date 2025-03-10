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
 * @returns {number[]} - The in-order traversal result.
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
 * @returns {number[]} - The pre-order traversal result.
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
 * @returns {number[]} - The post-order traversal result.
 */
function postOrderTraversal(root, result = []) {
  if (root) {
    postOrderTraversal(root.left, result);
    postOrderTraversal(root.right, result);
    result.push(root.value);
  }
  return result;
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

/**
 * Function to get the left view of a binary tree.
 * @param {TreeNode} root - The root node of the binary tree.
 * @returns {number[]} - The left view of the binary tree.
 */
function leftView(root) {
  const result = [];
  if (root === null) {
    return result;
  }

  const queue = [root];

  while (queue.length > 0) {
    const levelSize = queue.length;
    for (let i = 0; i < levelSize; i++) {
      const currentNode = queue.shift();
      if (i === 0) {
        result.push(currentNode.value);
      }

      if (currentNode.left !== null) {
        queue.push(currentNode.left);
      }

      if (currentNode.right !== null) {
        queue.push(currentNode.right);
      }
    }
  }

  return result;
}

/**
 * Function to get the right view of a binary tree.
 * @param {TreeNode} root - The root node of the binary tree.
 * @returns {number[]} - The right view of the binary tree.
 */
function rightView(root) {
  const result = [];
  if (root === null) {
    return result;
  }

  const queue = [root];

  while (queue.length > 0) {
    const levelSize = queue.length;
    for (let i = 0; i < levelSize; i++) {
      const currentNode = queue.shift();
      if (i === levelSize - 1) {
        result.push(currentNode.value);
      }

      if (currentNode.left !== null) {
        queue.push(currentNode.left);
      }

      if (currentNode.right !== null) {
        queue.push(currentNode.right);
      }
    }
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
console.log("Level-order traversal:", levelOrderTraversal(root)); // Output: [[1], [2, 3], [4, 5, 6, 7]]
console.log("Left view:", leftView(root)); // Output: [1, 2, 4]
console.log("Right view:", rightView(root)); // Output: [1, 3, 7]