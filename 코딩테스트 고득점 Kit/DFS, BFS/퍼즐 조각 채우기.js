// 내 솔루션은 모양을 캐치하는 DFS를 만드는 것임
// gameBoard의 0의 모양 캐치
// table은 1의 모양 캐치

const dr = [-1, 1, 0, 0];
const dc = [0, 0, -1, 1];
let R, C;
let visited;

function DFS(maps, r, c, neg) {
  visited[r][c] = true;

  // 블록 정보
  let blocks = [[r, c]];
  for (let i = 0; i < 4; i++) {
    const nr = r + dr[i];
    const nc = c + dc[i];
    if (nr < 0 || nr >= R || nc < 0 || nc >= C || maps[nr][nc] === neg)
      continue;
    if (!visited[nr][nc]) blocks = [...blocks, ...DFS(maps, nr, nc, neg)];
  }
  return blocks;
}

function initVisited() {
  visited = Array.from(
    {
      length: R,
    },
    () => Array(C).fill(false)
  );
}

function getShape(target, neg) {
  initVisited();
  const shape = [];
  for (let r = 0; r < R; r++) {
    for (let c = 0; c < C; c++) {
      if (target[r][c] !== neg && !visited[r][c])
        shape.push(DFS(target, r, c, neg));
    }
  }

  return shape;
}

function makeBlock(arr) {
  const rList = arr.map(([r]) => r);
  const cList = arr.map(([_, c]) => c);

  let [r1, r2] = [Math.min(...rList), Math.max(...rList)];
  let [c1, c2] = [Math.min(...cList), Math.max(...cList)];

  const block = Array.from(
    {
      length: r2 - r1 - (r1 - r1) + 1,
    },
    () => Array(c2 - c1 - (c1 - c1) + 1).fill(0)
  );
  for (let i = 0; i < arr.length; i++) {
    let [r, c] = arr[i];
    [r, c] = [r - r1, c - c1];

    block[r][c] = 1;
  }

  return block;
}

function solution(gameBoard, table) {
  R = gameBoard.length;
  C = gameBoard[0].length;

  const boardEmptyShape = getShape(gameBoard, 1);
  console.log(boardEmptyShape, "\n\n");

  const posBlockShape = getShape(table, 0);
  console.log(posBlockShape, "\n\n");
}

solution(
  [
    [1, 1, 0, 0, 1, 0],
    [0, 0, 1, 0, 1, 0],
    [0, 1, 1, 0, 0, 1],
    [1, 1, 0, 1, 1, 1],
    [1, 0, 0, 0, 1, 0],
    [0, 1, 1, 1, 0, 0],
  ],
  [
    [1, 0, 0, 1, 1, 0],
    [1, 0, 1, 0, 1, 0],
    [0, 1, 1, 0, 1, 1],
    [0, 0, 1, 0, 0, 0],
    [1, 1, 0, 1, 1, 0],
    [0, 1, 0, 0, 0, 0],
  ]
);
