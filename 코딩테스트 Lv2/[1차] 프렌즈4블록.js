const DR = [0, 1, 1];
const DC = [1, 0, 1];

function isDelete(r, c, board) {
  const now = board[r][c];
  if (now === -1) return false;
  for (let d = 0; d < 3; d++) {
    const [dr, dc] = [DR[d], DC[d]];
    const [nr, nc] = [r + dr, c + dc];

    if (!board[nr] || board[nr][nc] !== now) return false;
  }

  return true;
}

function scan(m, n, board) {
  const result = [];
  for (let r = 0; r < m; r++) {
    for (let c = 0; c < n; c++) {
      if (isDelete(r, c, board)) result.push([r, c]);
    }
  }

  return result;
}

function deleteBlock(delPos, board) {
  for (let p = 0; p < delPos.length; p++) {
    const [r, c] = delPos[p];
    board[r][c] = -1;
    for (let d = 0; d < 3; d++) {
      const [dr, dc] = [DR[d], DC[d]];
      board[r + dr][c + dc] = -1;
    }
  }

  return board;
}

function cleanBoard(m, n, board) {
  for (let i = m - 2; i >= 0; i--) {
    for (let j = n - 1; j >= 0; j--) {
      if (board[i][j] === -1) continue;
      let nr = i + 1;
      if (board[nr][j] === -1) {
        while (nr < m && board[nr][j] === -1) {
          [board[nr][j], board[nr - 1][j]] = [board[nr - 1][j], -1];
          nr++;
        }
      }
    }
  }
}

function solution(m, n, board) {
  board = board.map((b) => [...b]);

  let delPos = scan(m, n, board);
  while (delPos.length) {
    deleteBlock(delPos, board);
    cleanBoard(m, n, board);

    delPos = scan(m, n, board);
  }

  return board.flat().filter((b) => b === -1).length;
}

console.log(solution(4, 5, ["CCBDE", "AAADE", "AAABF", "CCBBF"]));
console.log(
  solution(6, 6, ["TTTANT", "RRFACC", "RRRFCC", "TRRRAA", "TTMMMF", "TMMTTJ"])
);
