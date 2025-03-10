/**
 * Function to solve the Rat in a Maze problem using backtracking.
 * The function finds a path for the rat from the top-left corner to the bottom-right corner of the maze.
 *
 * @param {number[][]} maze - The maze represented as a 2D array, where 1 indicates a path and 0 indicates a wall.
 * @returns {number[][]} - The solution path represented as a 2D array, where 1 indicates the path taken by the rat.
 */
function solveRatInMaze(maze) {
  const N = maze.length;
  const solution = Array.from({ length: N }, () => Array(N).fill(0));

  function isSafe(maze, x, y) {
    return x >= 0 && x < N && y >= 0 && y < N && maze[x][y] === 1;
  }

  function solveMazeUtil(maze, x, y, solution) {
    if (x === N - 1 && y === N - 1 && maze[x][y] === 1) {
      solution[x][y] = 1;
      return true;
    }

    if (isSafe(maze, x, y)) {
      solution[x][y] = 1;

      if (solveMazeUtil(maze, x + 1, y, solution)) {
        return true;
      }

      if (solveMazeUtil(maze, x, y + 1, solution)) {
        return true;
      }

      solution[x][y] = 0;
      return false;
    }

    return false;
  }

  if (!solveMazeUtil(maze, 0, 0, solution)) {
    console.log("No solution exists");
    return [];
  }

  return solution;
}

// Example usage:
const maze = [
  [1, 0, 0, 0],
  [1, 1, 0, 1],
  [0, 1, 0, 0],
  [1, 1, 1, 1]
];

const solution = solveRatInMaze(maze);
console.log("Solution path for the Rat in a Maze problem:");
console.log(solution);
/*
Output:
Solution path for the Rat in a Maze problem:
[
  [ 1, 0, 0, 0 ],
  [ 1, 1, 0, 0 ],
  [ 0, 1, 0, 0 ],
  [ 0, 1, 1, 1 ]
]
*/