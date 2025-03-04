/**
 * Breadth-First Search (BFS) implementation in JavaScript.
 *
 * Breadth-First Search is an algorithm for traversing or searching tree or graph data structures. It starts at the root node
 * (or an arbitrary node in the case of a graph) and explores all neighbors at the present depth prior to moving on to nodes at the next depth level.
 */

/**
 * Breadth-First Search function.
 *
 * @param {Object} graph - The graph represented as an adjacency list.
 * @param {string} startNode - The starting node.
 * @returns {Array} - An array of nodes in the order they were visited.
 */
function bfs(graph, startNode) {
  const queue = [startNode];
  const visited = new Set();
  const result = [];

  visited.add(startNode);

  while (queue.length > 0) {
    const node = queue.shift();
    result.push(node);

    for (const neighbor of graph[node]) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push(neighbor);
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
const bfsResult = bfs(graph, startNode);
console.log("BFS result:", bfsResult);  // Output: BFS result: [ 'A', 'B', 'C', 'D', 'E', 'F' ]