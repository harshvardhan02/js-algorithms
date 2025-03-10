/**
 * Function to implement the Floyd-Warshall algorithm.
 * The algorithm finds the shortest paths between all pairs of vertices in a given weighted graph.
 *
 * @param {number[][]} graph - The adjacency matrix representing the graph. 
 *                             graph[i][j] holds the weight of the edge from vertex i to vertex j.
 *                             If there is no edge, it should be Infinity.
 * @returns {number[][]} - The matrix of shortest paths between all pairs of vertices.
 */
function floydWarshall(graph) {
  const numVertices = graph.length;
  const dist = Array.from({ length: numVertices }, (_, i) =>
    Array.from({ length: numVertices }, (_, j) => graph[i][j])
  );

  for (let k = 0; k < numVertices; k++) {
    for (let i = 0; i < numVertices; i++) {
      for (let j = 0; j < numVertices; j++) {
        if (dist[i][k] + dist[k][j] < dist[i][j]) {
          dist[i][j] = dist[i][k] + dist[k][j];
        }
      }
    }
  }

  return dist;
}

// Example usage:
const graph = [
  [0, 3, Infinity, 5],
  [2, 0, Infinity, 4],
  [Infinity, 1, 0, Infinity],
  [Infinity, Infinity, 2, 0]
];
const shortestPaths = floydWarshall(graph);
console.log("Matrix of shortest paths between all pairs of vertices:", shortestPaths);
/*
Output:
[
  [0, 3, 7, 5],
  [2, 0, 6, 4],
  [3, 1, 0, 5],
  [5, 3, 2, 0]
]
*/