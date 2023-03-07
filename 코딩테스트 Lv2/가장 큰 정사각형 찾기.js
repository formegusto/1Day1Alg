const dr = [0, -1, -1];
const dc = [-1, 0, -1];

function solution(board) {
  let answer = 0;

  const [R, C] = [board.length, board[0].length];
  if (R < 2 || C < 2) return 1;
  for (let i = 1; i < R; i++) {
    for (let j = 1; j < C; j++) {
      if (board[i][j] !== 1) continue;
      let min = Number.MAX_SAFE_INTEGER;
      for (let d = 0; d < 3; d++) {
        const [nr, nc] = [i + dr[d], j + dc[d]];
        min = Math.min(min, board[nr][nc]);
      }
      board[i][j] = min + 1;
      answer = Math.max(answer, board[i][j]);
    }
  }

  return answer ** 2;
}
