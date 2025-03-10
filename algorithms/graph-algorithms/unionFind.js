/**
 * Class to represent the Union-Find data structure (also known as Disjoint Set Union).
 * It supports union and find operations on disjoint sets and can be used to detect cycles in a graph.
 */
class UnionFind {
  constructor(size) {
    this.parent = Array(size).fill(0).map((_, index) => index);
    this.rank = Array(size).fill(0);
  }

  /**
   * Function to find the root of the set in which element x is present.
   * Implements path compression to flatten the structure.
   *
   * @param {number} x - The element to find.
   * @returns {number} - The root of the set containing x.
   */
  find(x) {
    if (this.parent[x] !== x) {
      this.parent[x] = this.find(this.parent[x]); // Path compression
    }
    return this.parent[x];
  }

  /**
   * Function to unite the sets containing elements x and y.
   * Implements union by rank to keep the tree flat.
   *
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
        this.rank[rootX] += 1;
      }
    }
  }
}

// Example usage:
const uf = new UnionFind(10);

uf.union(1, 2);
uf.union(2, 3);
uf.union(4, 5);
console.log("Find(1):", uf.find(1)); // Output: Find(1): 1
console.log("Find(2):", uf.find(2)); // Output: Find(2): 1
console.log("Find(3):", uf.find(3)); // Output: Find(3): 1
console.log("Find(4):", uf.find(4)); // Output: Find(4): 4
console.log("Find(5):", uf.find(5)); // Output: Find(5): 4

uf.union(3, 4);
console.log("Find(3) after union with 4:", uf.find(3)); // Output: Find(3) after union with 4: 1
console.log("Find(4) after union with 3:", uf.find(4)); // Output: Find(4) after union with 3: 1
console.log("Find(5) after union with 3:", uf.find(5)); // Output: Find(5) after union with 3: 1