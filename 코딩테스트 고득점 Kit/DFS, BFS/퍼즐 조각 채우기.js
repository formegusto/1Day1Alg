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

function isFill(block1, block2) {
  for (let i = 0; i < 4; i++) {
    const b1 = block1.block.reduce((acc, r) => acc + r.join(""), "");
    const b2 = block2.block.reduce((acc, r) => acc + r.join(""), "");

    let chk = 0;
    for (let i = 0; i < b1.length; i++) {
      if (b1[i] === "1" && b1[i] === b2[i]) chk++;
    }
    if (block2.length === 3) {
      console.log(chk);
    }
    if (chk === block1.length || chk === block2.length) return true;

    block2 = {
      length: block2.length,
      block: rotateBlock(block2.block),
    };
  }

  return false;
}

function isEqual(block1, block2) {
  const b1 = JSON.stringify(block1);
  for (let i = 0; i < 4; i++) {
    const b2 = JSON.stringify(block2);

    if (b1 === b2) return true;

    block2 = rotateBlock(block2);
  }
  return false;
}

function solution(gameBoard, table) {
  R = gameBoard.length;
  C = gameBoard[0].length;

  // DFS 공간 탐색
  const boardEmptyShape = getShape(gameBoard, 1);
  const posBlockShape = getShape(table, 0);

  const boardEmpty = boardEmptyShape
    .map(makeBlock)
    .sort((a, b) => a.length - b.length);
  let posBlock = posBlockShape
    .map(makeBlock)
    .sort((a, b) => b.length - a.length);

  let answer = 0;
  for (let i = boardEmpty.length - 1; i >= 0; i--) {
    const empty = boardEmpty[i];
    let pos;
    for (let j = 0; j < posBlock.length; j++) {
      if (isEqual(empty.block, posBlock[j].block)) {
        pos = posBlock[j];
        posBlock = [...posBlock.slice(0, j), ...posBlock.slice(j + 1)];
        break;
      }
    }
    if (pos) answer += pos.length;
  }

  return answer;
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
