/**
 * Huffman Coding implementation in JavaScript.
 *
 * Huffman Coding is an algorithm used for lossless data compression. The algorithm assigns variable-length codes to input characters,
 * with shorter codes assigned to more frequent characters. The result is a prefix-free binary tree, known as the Huffman tree.
 *
 * This implementation includes functions to build the Huffman tree, generate Huffman codes, and encode and decode messages.
 */

class HuffmanNode {
  constructor(character, frequency) {
    this.character = character;
    this.frequency = frequency;
    this.left = null;
    this.right = null;
  }
}

/**
 * Build the Huffman tree from a frequency map of characters.
 *
 * @param {Map<string, number>} frequencyMap - A map of characters to their frequencies.
 * @returns {HuffmanNode} - The root of the Huffman tree.
 */
function buildHuffmanTree(frequencyMap) {
  const nodes = [];
  frequencyMap.forEach((frequency, character) => {
    nodes.push(new HuffmanNode(character, frequency));
  });

  while (nodes.length > 1) {
    nodes.sort((a, b) => a.frequency - b.frequency);

    const left = nodes.shift();
    const right = nodes.shift();
    const newNode = new HuffmanNode(null, left.frequency + right.frequency);
    newNode.left = left;
    newNode.right = right;

    nodes.push(newNode);
  }

  return nodes[0];
}

/**
 * Generate Huffman codes from the Huffman tree.
 *
 * @param {HuffmanNode} root - The root of the Huffman tree.
 * @returns {Map<string, string>} - A map of characters to their Huffman codes.
 */
function generateHuffmanCodes(root) {
  const huffmanCodes = new Map();

  function traverse(node, code) {
    if (!node) return;

    if (node.character !== null) {
      huffmanCodes.set(node.character, code);
    }

    traverse(node.left, code + '0');
    traverse(node.right, code + '1');
  }

  traverse(root, '');
  return huffmanCodes;
}

/**
 * Encode a message using Huffman codes.
 *
 * @param {string} message - The message to encode.
 * @param {Map<string, string>} huffmanCodes - A map of characters to their Huffman codes.
 * @returns {string} - The encoded message.
 */
function encodeMessage(message, huffmanCodes) {
  return message.split('').map(char => huffmanCodes.get(char)).join('');
}

/**
 * Decode a message using the Huffman tree.
 *
 * @param {string} encodedMessage - The encoded message.
 * @param {HuffmanNode} root - The root of the Huffman tree.
 * @returns {string} - The decoded message.
 */
function decodeMessage(encodedMessage, root) {
  let decodedMessage = '';
  let currentNode = root;

  for (const bit of encodedMessage) {
    currentNode = bit === '0' ? currentNode.left : currentNode.right;

    if (currentNode.character !== null) {
      decodedMessage += currentNode.character;
      currentNode = root;
    }
  }

  return decodedMessage;
}

// Example usage:
const message = "this is an example for huffman encoding";
const frequencyMap = new Map();
for (const char of message) {
  frequencyMap.set(char, (frequencyMap.get(char) || 0) + 1);
}

const huffmanTreeRoot = buildHuffmanTree(frequencyMap);
const huffmanCodes = generateHuffmanCodes(huffmanTreeRoot);
const encodedMessage = encodeMessage(message, huffmanCodes);
const decodedMessage = decodeMessage(encodedMessage, huffmanTreeRoot);

console.log("Original message:", message);
console.log("Encoded message:", encodedMessage);
console.log("Decoded message:", decodedMessage);