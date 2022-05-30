// Time complexity: O(mn)
// Space complexity: O(k) where k is the height of stack
function exist(board: string[][], word: string): boolean {
  const dfs = (i: number, j: number, k: number) => {
    if (k === word.length) {
      return true
    }

    if (
      i === -1 ||
      i === board.length ||
      j === -1 ||
      j === board[0].length ||
      board[i][j] !== word[k]
    ) {
      return false
    }

    board[i][j] = ''

    let res =
      dfs(i + 1, j, k + 1) ||
      dfs(i - 1, j, k + 1) ||
      dfs(i, j + 1, k + 1) ||
      dfs(i, j - 1, k + 1)

    board[i][j] = word[k]

    return res
  }

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (dfs(i, j, 0)) {
        return true
      }
    }
  }

  return false
}
