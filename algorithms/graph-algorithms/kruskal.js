class UnionFind {
  constructor(size) {
    this.parent = Array(size).fill(0).map((_, index) => index);
    this.rank = Array(size).fill(0);
  }

  find(x) {
    if (this.parent[x] !== x) {
      this.parent[x] = this.find(this.parent[x]); // Path compression
    }
    return this.parent[x];
  }

  union(x, y) {
    const rootX = this.find(x);
    const rootY = this.find(y);

    if (rootX !== rootY) {
      if (this.rank[rootX] > this.rank[rootY]) {
        this.parent[rootY] = rootX;
      } else if (this.rank[rootX] < this.rank[rootY]) {
        this.parent[rootX] = rootY;
      } else {
        this.parent[rootY] = rootX;
        this.rank[rootX] += 1;
      }
    }
  }
}

/**
 * Function to implement Kruskal's algorithm.
 * The algorithm finds the Minimum Spanning Tree (MST) of a given graph.
 *
 * @param {number} vertices - The number of vertices in the graph.
 * @param {number[][]} edges - The edges of the graph, where each edge is represented as [u, v, w] (u: source, v: destination, w: weight).
 * @returns {number[][]} - The edges in the Minimum Spanning Tree.
 */
function kruskal(vertices, edges) {
  // Sort edges based on their weights
  edges.sort((a, b) => a[2] - b[2]);

  const unionFind = new UnionFind(vertices);
  const mst = [];

  for (const [u, v, w] of edges) {
    if (unionFind.find(u) !== unionFind.find(v)) {
      unionFind.union(u, v);
      mst.push([u, v, w]);
    }
  }

  return mst;
}

// Example usage:
const vertices = 4;
const edges = [
  [0, 1, 10],
  [0, 2, 6],
  [0, 3, 5],
  [1, 3, 15],
  [2, 3, 4]
];
const mst = kruskal(vertices, edges);
console.log("Edges in the Minimum Spanning Tree:", mst); // Output: [ [ 2, 3, 4 ], [ 0, 3, 5 ], [ 0, 1, 10 ] ]