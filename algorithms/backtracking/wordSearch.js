/**
 * Function to check if a word exists in a 2D board.
 * The word can be constructed from letters of sequentially adjacent cells, where "adjacent" cells are those horizontally or vertically neighboring.
 * The same letter cell may not be used more than once.
 *
 * @param {character[][]} board - The 2D board of characters.
 * @param {string} word - The word to search for.
 * @returns {boolean} - True if the word exists in the board, otherwise false.
 */
function exist(board, word) {
  const rows = board.length;
  const cols = board[0].length;

  function dfs(x, y, index) {
    if (index === word.length) return true;
    if (x < 0 || y < 0 || x >= rows || y >= cols || board[x][y] !== word[index]) return false;

    const temp = board[x][y];
    board[x][y] = '#'; // Mark as visited

    const found = dfs(x + 1, y, index + 1) ||
      dfs(x - 1, y, index + 1) ||
      dfs(x, y + 1, index + 1) ||
      dfs(x, y - 1, index + 1);

    board[x][y] = temp; // Unmark

    return found;
  }

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (board[i][j] === word[0] && dfs(i, j, 0)) {
        return true;
      }
    }
  }

  return false;
}

// Example usage:
const board = [
  ['A', 'B', 'C', 'E'],
  ['S', 'F', 'C', 'S'],
  ['A', 'D', 'E', 'E']
];
const word = "ABCCED";
const result = exist(board, word);
console.log(`Does the word "${word}" exist in the board?`, result); // Output: true