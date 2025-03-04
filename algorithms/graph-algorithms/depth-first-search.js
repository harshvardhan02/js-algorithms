/**
 * Depth-First Search (DFS) implementation in JavaScript.
 *
 * Depth-First Search is an algorithm for traversing or searching tree or graph data structures. The algorithm starts at the root node
 * (selecting some arbitrary node as the root node in the case of a graph) and explores as far as possible along each branch before backtracking.
 */

/**
 * Depth-First Search function using recursion.
 *
 * @param {Object} graph - The graph represented as an adjacency list.
 * @param {string} startNode - The starting node.
 * @param {Set} visited - A set to keep track of visited nodes.
 * @returns {Array} - An array of nodes in the order they were visited.
 */
function dfsRecursive(graph, startNode, visited = new Set()) {
  visited.add(startNode);
  const result = [startNode];

  for (const neighbor of graph[startNode]) {
    if (!visited.has(neighbor)) {
      result.push(...dfsRecursive(graph, neighbor, visited));
    }
  }

  return result;
}

/**
 * Depth-First Search function using an iterative approach with a stack.
 *
 * @param {Object} graph - The graph represented as an adjacency list.
 * @param {string} startNode - The starting node.
 * @returns {Array} - An array of nodes in the order they were visited.
 */
function dfsIterative(graph, startNode) {
  const stack = [startNode];
  const visited = new Set();
  const result = [];

  while (stack.length > 0) {
    const node = stack.pop();

    if (!visited.has(node)) {
      visited.add(node);
      result.push(node);

      for (const neighbor of graph[node]) {
        if (!visited.has(neighbor)) {
          stack.push(neighbor);
        }
      }
    }
  }

  return result;
}

// Example usage:
const graph = {
  A: ['B', 'C'],
  B: ['A', 'D', 'E'],
  C: ['A', 'F'],
  D: ['B'],
  E: ['B', 'F'],
  F: ['C', 'E']
};

const startNode = 'A';
const dfsRecursiveResult = dfsRecursive(graph, startNode);
const dfsIterativeResult = dfsIterative(graph, startNode);
console.log("DFS Recursive result:", dfsRecursiveResult);  // Output: DFS Recursive result: [ 'A', 'B', 'D', 'E', 'F', 'C' ]
console.log("DFS Iterative result:", dfsIterativeResult);  // Output: DFS Iterative result: [ 'A', 'C', 'F', 'E', 'B', 'D' ]