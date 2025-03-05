/**
 * Backtracking implementation in JavaScript.
 *
 * Backtracking is a general algorithm for finding all (or some) solutions to computational problems,
 * notably constraint satisfaction problems, that incrementally builds candidates to the solutions,
 * and abandons each partial candidate ("backtracks") as soon as it determines that the candidate cannot possibly be completed to a valid solution.
 */

/**
 * Example 1: Solving the N-Queens problem using backtracking.
 *
 * The N-Queens problem is the problem of placing N chess queens on an N×N chessboard so that no two queens threaten each other.
 *
 * @param {number} n - The number of queens.
 * @returns {Array} - An array of arrays representing the solutions.
 */
function solveNQueens(n) {
  const solutions = [];
  const board = Array.from({ length: n }, () => Array(n).fill('.'));

  function isSafe(board, row, col) {
    for (let i = 0; i < row; i++) {
      if (board[i][col] === 'Q') return false;
    }

    for (let i = row, j = col; i >= 0 && j >= 0; i--, j--) {
      if (board[i][j] === 'Q') return false;
    }

    for (let i = row, j = col; i >= 0 && j < n; i--, j++) {
      if (board[i][j] === 'Q') return false;
    }

    return true;
  }

  function solve(board, row) {
    if (row === n) {
      const solution = board.map(row => row.join(''));
      solutions.push(solution);
      return;
    }

    for (let col = 0; col < n; col++) {
      if (isSafe(board, row, col)) {
        board[row][col] = 'Q';
        solve(board, row + 1);
        board[row][col] = '.';
      }
    }
  }

  solve(board, 0);
  return solutions;
}

// Example usage:
const n = 4;
const solutions = solveNQueens(n);
console.log(`Solutions for ${n}-Queens problem:`);
solutions.forEach(solution => console.log(solution.join('\n'), '\n'));

/**
 * Example 2: Solving the Sudoku puzzle using backtracking.
 *
 * The Sudoku puzzle is a grid-based number puzzle where the objective is to fill a 9×9 grid with digits
 * so that each column, each row, and each of the nine 3×3 sub-grids contain all of the digits from 1 to 9.
 *
 * @param {number[][]} board - The 9x9 Sudoku board.
 * @returns {boolean} - True if the puzzle is solved, false otherwise.
 */
function solveSudoku(board) {
  function isSafe(board, row, col, num) {
    for (let x = 0; x < 9; x++) {
      if (board[row][x] === num || board[x][col] === num) return false;
    }

    const startRow = row - (row % 3);
    const startCol = col - (col % 3);

    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (board[i + startRow][j + startCol] === num) return false;
      }
    }

    return true;
  }

  function solve(board) {
    for (let row = 0; row < 9; row++) {
      for (let col = 0; col < 9; col++) {
        if (board[row][col] === 0) {
          for (let num = 1; num <= 9; num++) {
            if (isSafe(board, row, col, num)) {
              board[row][col] = num;
              if (solve(board)) return true;
              board[row][col] = 0;
            }
          }
          return false;
        }
      }
    }
    return true;
  }

  return solve(board);
}

// Example usage:
const sudokuBoard = [
  [5, 3, 0, 0, 7, 0, 0, 0, 0],
  [6, 0, 0, 1, 9, 5, 0, 0, 0],
  [0, 9, 8, 0, 0, 0, 0, 6, 0],
  [8, 0, 0, 0, 6, 0, 0, 0, 3],
  [4, 0, 0, 8, 0, 3, 0, 0, 1],
  [7, 0, 0, 0, 2, 0, 0, 0, 6],
  [0, 6, 0, 0, 0, 0, 2, 8, 0],
  [0, 0, 0, 4, 1, 9, 0, 0, 5],
  [0, 0, 0, 0, 8, 0, 0, 7, 9]
];

if (solveSudoku(sudokuBoard)) {
  console.log("Sudoku puzzle solved:");
  sudokuBoard.forEach(row => console.log(row.join(' ')));
} else {
  console.log("No solution exists for the Sudoku puzzle.");
}