/**
 * Dijkstra's Algorithm implementation in JavaScript.
 *
 * Dijkstra's Algorithm is used for finding the shortest paths between nodes in a graph, which may represent, for example, road networks.
 * 
 * This implementation uses a priority queue to efficiently get the next node with the smallest distance.
 */

class PriorityQueue {
  constructor() {
    this.queue = [];
  }

  enqueue(element, priority) {
    this.queue.push({ element, priority });
    this.queue.sort((a, b) => a.priority - b.priority);
  }

  dequeue() {
    return this.queue.shift().element;
  }

  isEmpty() {
    return this.queue.length === 0;
  }
}

/**
 * Function to find the shortest path from a source node to all other nodes in a graph using Dijkstra's Algorithm.
 *
 * @param {Object} graph - The graph represented as an adjacency list.
 * @param {string} startNode - The starting node.
 * @returns {Object} - An object containing the shortest distances from the start node to all other nodes.
 */
function dijkstra(graph, startNode) {
  const distances = {};
  const priorityQueue = new PriorityQueue();
  const previous = {};

  for (let node in graph) {
    if (node === startNode) {
      distances[node] = 0;
      priorityQueue.enqueue(node, 0);
    } else {
      distances[node] = Infinity;
      priorityQueue.enqueue(node, Infinity);
    }
    previous[node] = null;
  }

  while (!priorityQueue.isEmpty()) {
    const currentNode = priorityQueue.dequeue();

    for (let neighbor in graph[currentNode]) {
      const distance = graph[currentNode][neighbor];
      const newDistance = distances[currentNode] + distance;

      if (newDistance < distances[neighbor]) {
        distances[neighbor] = newDistance;
        previous[neighbor] = currentNode;
        priorityQueue.enqueue(neighbor, newDistance);
      }
    }
  }

  return distances;
}

// Example usage:
const graph = {
  A: { B: 1, C: 4 },
  B: { A: 1, C: 2, D: 5 },
  C: { A: 4, B: 2, D: 1 },
  D: { B: 5, C: 1 }
};

const startNode = 'A';
const shortestPaths = dijkstra(graph, startNode);
console.log("Shortest paths from node A:", shortestPaths);  // Output: Shortest paths from node A: { A: 0, B: 1, C: 3, D: 4 }