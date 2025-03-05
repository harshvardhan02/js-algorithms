/**
 * Topological Sort implementation in JavaScript.
 *
 * Topological sorting is a linear ordering of vertices in a directed acyclic graph (DAG) such that for every directed edge uv,
 * vertex u comes before v in the ordering. Topological sorting is used in scenarios like task scheduling, resolving dependencies, etc.
 */

/**
 * Function to perform topological sort on a graph.
 *
 * @param {Object} graph - The graph represented as an adjacency list.
 * @returns {Array} - An array representing the topological order of vertices.
 */
function topologicalSort(graph) {
  const visited = new Set();
  const stack = [];
  const result = [];

  function dfs(node) {
    visited.add(node);

    for (const neighbor of graph[node]) {
      if (!visited.has(neighbor)) {
        dfs(neighbor);
      }
    }

    stack.push(node);
  }

  // Perform DFS on all vertices
  for (const node in graph) {
    if (!visited.has(node)) {
      dfs(node);
    }
  }

  // Pop vertices from the stack to get the topological order
  while (stack.length > 0) {
    result.push(stack.pop());
  }

  return result;
}

// Example usage:
const graph = {
  5: [2, 0],
  4: [0, 1],
  3: [1],
  2: [3],
  1: [],
  0: []
};

const topoOrder = topologicalSort(graph);
console.log("Topological Order:", topoOrder);  // Output: [5, 4, 2, 3, 1, 0]