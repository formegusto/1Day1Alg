// 내 솔루션은 모양을 캐치하는 DFS를 만드는 것임
// gameBoard의 0의 모양 캐치
// table은 1의 모양 캐치
// + 부분적으로 해결할 수 있는 경우도 있음.
// gameboard를 탐색하는 파트는 다르게 진행

const dr = [-1, 1, 0, 0];
const dc = [0, 0, -1, 1];
let R, C;
let visited;
let posBlock;

function tableDFS(maps, r, c) {
  visited[r][c] = true;

  // 블록 정보
  let blocks = [[r, c]];
  for (let i = 0; i < 4; i++) {
    const nr = r + dr[i];
    const nc = c + dc[i];
    if (nr < 0 || nr >= R || nc < 0 || nc >= C || maps[nr][nc] === 0) continue;
    if (!visited[nr][nc]) blocks = [...blocks, ...tableDFS(maps, nr, nc)];
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

function getShape(target) {
  initVisited();
  const shape = [];
  for (let r = 0; r < R; r++) {
    for (let c = 0; c < C; c++) {
      if (target[r][c] !== 0 && !visited[r][c])
        shape.push(tableDFS(target, r, c));
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

  return {
    length: arr.length,
    block: block,
  };
}

function rotateBlock(arr) {
  const r = arr.length;
  const c = arr[0].length;

  const newR = c;
  const newC = r;

  const rotate = Array.from(
    {
      length: newR,
    },
    () => Array(newC).fill(0)
  );
  // 행은 기존 열 index가 된다.
  // 열은 기존 행 index가 된다.
  for (let i = 0; i < r; i++) {
    for (let j = 0; j < c; j++) {
      rotate[j][r - i - 1] = arr[i][j];
    }
  }
  return rotate;
}

function isEqual(block1, block2) {
  for (let i = 0; i < 4; i++) {
    const b1 = block1.reduce((acc, r) => acc + r.join(""), "");
    const b2 = block2.reduce((acc, r) => acc + r.join(""), "");

    if (b1 === b2) return true;

    block2 = rotateBlock(block2);
  }
  return false;
}

function boardDFS(maps, r, c, allRoute, route) {
  visited[r][c] = true;

  allRoute = [...allRoute, [r, c]];
  route = [...route, [r, c]];
  for (let i = 0; i < posBlock.length; i++) {
    if (isEqual(makeBlock(route).block, posBlock[i].block)) {
      posBlock = [...posBlock.slice(0, i), ...posBlock.slice(i + 1)];
      route = [];
    }
  }

  for (let i = 0; i < 4; i++) {
    const nr = r + dr[i];
    const nc = c + dc[i];
    if (nr < 0 || nr >= R || nc < 0 || nc >= C || maps[nr][nc] === 0) continue;
    if (!visited[nr][nc]) {
      boardDFS(maps, nr, nc, allRoute, route, posBlock);
    }
  }
}

function solution(gameBoard, table) {
  R = gameBoard.length;
  C = gameBoard[0].length;

  // 사용가능한 블록 구하기
  const posBlockShape = getShape(table, 0);
  posBlock = posBlockShape.map(makeBlock).sort((a, b) => b.length - a.length);

  initVisited();
  for (let r = 0; r < R; r++) {
    for (let c = 0; c < C; c++) {
      if (gameBoard[r][c] !== 1 && !visited[r][c]) {
        boardDFS(gameBoard, r, c, [], []);
        console.log(posBlock);
      }
    }
  }
}

console.log(
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
  )
);
