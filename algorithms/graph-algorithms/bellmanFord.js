/**
 * Function to implement the Bellman-Ford algorithm.
 * The algorithm finds the shortest path from a single source vertex to all other vertices in a weighted graph.
 *
 * @param {number} vertices - The number of vertices in the graph.
 * @param {number[][]} edges - The edges of the graph, where each edge is represented as [u, v, w] (u: source, v: destination, w: weight).
 * @param {number} source - The source vertex.
 * @returns {number[]} - The shortest distances from the source to each vertex. If a negative weight cycle is detected, returns 'undefined'.
 */
function bellmanFord(vertices, edges, source) {
  // Initialize distances from source to all other vertices as INFINITY
  // and distance to the source itself as 0
  const distances = Array(vertices).fill(Infinity);
  distances[source] = 0;

  // Relax all edges V-1 times (where V is the number of vertices)
  for (let i = 1; i < vertices; i++) {
    for (const [u, v, w] of edges) {
      if (distances[u] !== Infinity && distances[u] + w < distances[v]) {
        distances[v] = distances[u] + w;
      }
    }
  }

  // Check for negative weight cycles
  for (const [u, v, w] of edges) {
    if (distances[u] !== Infinity && distances[u] + w < distances[v]) {
      console.error("Graph contains a negative weight cycle");
      return undefined;
    }
  }

  return distances;
}

// Example usage:
const vertices = 5;
const edges = [
  [0, 1, -1],
  [0, 2, 4],
  [1, 2, 3],
  [1, 3, 2],
  [1, 4, 2],
  [3, 2, 5],
  [3, 1, 1],
  [4, 3, -3]
];
const source = 0;
const shortestDistances = bellmanFord(vertices, edges, source);
console.log("Shortest distances from source:", shortestDistances);