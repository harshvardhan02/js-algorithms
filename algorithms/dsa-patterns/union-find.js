/**
 * Union-Find (Disjoint Set Union) implementation in JavaScript.
 *
 * The Union-Find data structure is used to keep track of a partition of a set into disjoint (non-overlapping) subsets.
 * It supports two main operations: finding the set a particular element is in, and merging (union) two sets.
 */

/**
 * Class representing a Union-Find data structure.
 */
class UnionFind {
  /**
   * Create a Union-Find data structure.
   * @param {number} size - The number of elements in the set.
   */
  constructor(size) {
    this.parent = Array.from({ length: size }, (_, index) => index);
    this.rank = Array(size).fill(0);
  }

  /**
   * Find the root of the set containing element `x` with path compression.
   * @param {number} x - The element to find.
   * @returns {number} - The root of the set containing `x`.
   */
  find(x) {
    if (this.parent[x] !== x) {
      this.parent[x] = this.find(this.parent[x]); // Path compression
    }
    return this.parent[x];
  }

  /**
   * Union the sets containing elements `x` and `y` using union by rank.
   * @param {number} x - The first element.
   * @param {number} y - The second element.
   */
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
        this.rank[rootX]++;
      }
    }
  }
}

// Example usage:
const uf = new UnionFind(10);

uf.union(1, 2);
uf.union(3, 4);
uf.union(2, 4);

console.log(uf.find(1)); // Output: 1 or 3, depending on the internal state after union operations
console.log(uf.find(3)); // Output: 1 or 3, depending on the internal state after union operations
console.log(uf.find(5)); // Output: 5 (since it is not connected to any other elements)