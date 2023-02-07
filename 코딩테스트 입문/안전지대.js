const DIRS = [
  [-1, -1],
  [-1, 0],
  [-1, 1],
  [0, -1],
  [0, 1],
  [1, -1],
  [1, 0],
  [1, 1],
];

function solution(board) {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] !== 1) continue;
      for (let k = 0; k < DIRS.length; k++) {
        const [ni, nj] = [i + DIRS[k][0], j + DIRS[k][1]];
        if (
          ni < 0 ||
          nj < 0 ||
          ni >= board.length ||
          nj >= board[i].length ||
          board[ni][nj] === 1
        )
          continue;
        board[ni][nj] = -1;
      }
    }
  }

  let answer = 0;
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === 0) answer++;
    }
  }
  return answer;
}
