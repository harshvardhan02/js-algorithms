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
 * Function to serialize a binary tree to a string.
 * @param {TreeNode} root - The root node of the binary tree.
 * @returns {string} - The serialized string representation of the binary tree.
 */
function serialize(root) {
  const result = [];

  function helper(node) {
    if (node === null) {
      result.push("null");
      return;
    }
    result.push(node.value.toString());
    helper(node.left);
    helper(node.right);
  }

  helper(root);
  return result.join(",");
}

/**
 * Function to deserialize a string to a binary tree.
 * @param {string} data - The serialized string representation of the binary tree.
 * @returns {TreeNode} - The root node of the deserialized binary tree.
 */
function deserialize(data) {
  const values = data.split(",");
  let index = 0;

  function helper() {
    if (values[index] === "null") {
      index++;
      return null;
    }
    const node = new TreeNode(parseInt(values[index], 10));
    index++;
    node.left = helper();
    node.right = helper();
    return node;
  }

  return helper();
}

// Example usage:

// Constructing a binary tree
//         1
//        / \
//       2   3
//          / \
//         4   5

const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.right.left = new TreeNode(4);
root.right.right = new TreeNode(5);

const serializedData = serialize(root);
console.log("Serialized binary tree:", serializedData); // Output: "1,2,null,null,3,4,null,null,5,null,null"

const deserializedTree = deserialize(serializedData);
console.log("Deserialized binary tree:", serialize(deserializedTree)); // Output: "1,2,null,null,3,4,null,null,5,null,null"