/**
 * Class representing a node in a binary search tree.
 */
class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

/**
 * Class representing a binary search tree (BST).
 */
class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  /**
   * Insert a value into the BST.
   * @param {number} value - The value to insert.
   */
  insert(value) {
    const newNode = new TreeNode(value);

    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  /**
   * Helper function to recursively insert a node into the BST.
   * @param {TreeNode} node - The current node.
   * @param {TreeNode} newNode - The new node to insert.
   */
  insertNode(node, newNode) {
    if (newNode.value < node.value) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }

  /**
   * Search for a value in the BST.
   * @param {number} value - The value to search for.
   * @returns {boolean} - True if the value is found, otherwise false.
   */
  search(value) {
    return this.searchNode(this.root, value);
  }

  /**
   * Helper function to recursively search for a value in the BST.
   * @param {TreeNode} node - The current node.
   * @param {number} value - The value to search for.
   * @returns {boolean} - True if the value is found, otherwise false.
   */
  searchNode(node, value) {
    if (node === null) {
      return false;
    }

    if (value < node.value) {
      return this.searchNode(node.left, value);
    } else if (value > node.value) {
      return this.searchNode(node.right, value);
    } else {
      return true;
    }
  }

  /**
   * Delete a value from the BST.
   * @param {number} value - The value to delete.
   */
  delete(value) {
    this.root = this.deleteNode(this.root, value);
  }

  /**
   * Helper function to recursively delete a node from the BST.
   * @param {TreeNode} node - The current node.
   * @param {number} value - The value to delete.
   * @returns {TreeNode} - The updated node.
   */
  deleteNode(node, value) {
    if (node === null) {
      return null;
    }

    if (value < node.value) {
      node.left = this.deleteNode(node.left, value);
      return node;
    } else if (value > node.value) {
      node.right = this.deleteNode(node.right, value);
      return node;
    } else {
      // Node with only one child or no child
      if (node.left === null) {
        return node.right;
      } else if (node.right === null) {
        return node.left;
      }

      // Node with two children: Get the inorder successor (smallest in the right subtree)
      node.value = this.findMinNode(node.right).value;

      // Delete the inorder successor
      node.right = this.deleteNode(node.right, node.value);
      return node;
    }
  }

  /**
   * Find the minimum value node in the BST.
   * @param {TreeNode} node - The current node.
   * @returns {TreeNode} - The node with the minimum value.
   */
  findMinNode(node) {
    while (node && node.left !== null) {
      node = node.left;
    }
    return node;
  }

  /**
   * Perform in-order traversal of the BST.
   * @param {TreeNode} node - The current node.
   * @param {number[]} result - The array to store the traversal result.
   * @returns {number[]} - The in-order traversal result.
   */
  inOrderTraversal(node, result = []) {
    if (node) {
      this.inOrderTraversal(node.left, result);
      result.push(node.value);
      this.inOrderTraversal(node.right, result);
    }
    return result;
  }

  /**
   * Perform pre-order traversal of the BST.
   * @param {TreeNode} node - The current node.
   * @param {number[]} result - The array to store the traversal result.
   * @returns {number[]} - The pre-order traversal result.
   */
  preOrderTraversal(node, result = []) {
    if (node) {
      result.push(node.value);
      this.preOrderTraversal(node.left, result);
      this.preOrderTraversal(node.right, result);
    }
    return result;
  }

  /**
   * Perform post-order traversal of the BST.
   * @param {TreeNode} node - The current node.
   * @param {number[]} result - The array to store the traversal result.
   * @returns {number[]} - The post-order traversal result.
   */
  postOrderTraversal(node, result = []) {
    if (node) {
      this.postOrderTraversal(node.left, result);
      this.postOrderTraversal(node.right, result);
      result.push(node.value);
    }
    return result;
  }
}

// Example usage:
const bst = new BinarySearchTree();
bst.insert(50);
bst.insert(30);
bst.insert(70);
bst.insert(20);
bst.insert(40);
bst.insert(60);
bst.insert(80);

console.log("In-order traversal:", bst.inOrderTraversal(bst.root)); // Output: [20, 30, 40, 50, 60, 70, 80]
console.log("Pre-order traversal:", bst.preOrderTraversal(bst.root)); // Output: [50, 30, 20, 40, 70, 60, 80]
console.log("Post-order traversal:", bst.postOrderTraversal(bst.root)); // Output: [20, 40, 30, 60, 80, 70, 50]

console.log("Search 40:", bst.search(40)); // Output: true
console.log("Search 90:", bst.search(90)); // Output: false

bst.delete(20);
console.log("In-order traversal after deleting 20:", bst.inOrderTraversal(bst.root)); // Output: [30, 40, 50, 60, 70, 80]

bst.delete(30);
console.log("In-order traversal after deleting 30:", bst.inOrderTraversal(bst.root)); // Output: [40, 50, 60, 70, 80]

bst.delete(50);
console.log("In-order traversal after deleting 50:", bst.inOrderTraversal(bst.root)); // Output: [40, 60, 70, 80]