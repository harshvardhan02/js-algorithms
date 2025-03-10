/**
 * Function to implement Prim's algorithm.
 * The algorithm finds the Minimum Spanning Tree (MST) of a given graph using a greedy approach.
 *
 * @param {number} vertices - The number of vertices in the graph.
 * @param {number[][]} graph - The adjacency matrix representing the graph.
 * @returns {number[][]} - The edges in the Minimum Spanning Tree.
 */
function prims(vertices, graph) {
  const parent = Array(vertices).fill(null);
  const key = Array(vertices).fill(Infinity);
  const mstSet = Array(vertices).fill(false);

  // Start from the first vertex
  key[0] = 0;
  parent[0] = -1;

  for (let count = 0; count < vertices - 1; count++) {
    // Pick the minimum key vertex from the set of vertices not yet included in MST
    let u = minKey(key, mstSet);

    // Add the picked vertex to the MST set
    mstSet[u] = true;

    // Update key value and parent index of the adjacent vertices of the picked vertex
    for (let v = 0; v < vertices; v++) {
      if (graph[u][v] && !mstSet[v] && graph[u][v] < key[v]) {
        parent[v] = u;
        key[v] = graph[u][v];
      }
    }
  }

  // Construct the result array
  const mst = [];
  for (let i = 1; i < vertices; i++) {
    mst.push([parent[i], i, graph[i][parent[i]]]);
  }

  return mst;
}

/**
 * Function to find the vertex with the minimum key value from
 * the set of vertices not yet included in the MST.
 *
 * @param {number[]} key - The key values.
 * @param {boolean[]} mstSet - The set of vertices included in the MST.
 * @returns {number} - The index of the vertex with the minimum key value.
 */
function minKey(key, mstSet) {
  let min = Infinity;
  let minIndex = -1;

  for (let v = 0; v < key.length; v++) {
    if (!mstSet[v] && key[v] < min) {
      min = key[v];
      minIndex = v;
    }
  }

  return minIndex;
}

// Example usage:
const vertices = 5;
const graph = [
  [0, 2, 0, 6, 0],
  [2, 0, 3, 8, 5],
  [0, 3, 0, 0, 7],
  [6, 8, 0, 0, 9],
  [0, 5, 7, 9, 0]
];
const mst = prims(vertices, graph);
console.log("Edges in the Minimum Spanning Tree:", mst); // Output: [ [ 0, 1, 2 ], [ 1, 2, 3 ], [ 0, 3, 6 ], [ 1, 4, 5 ] ]