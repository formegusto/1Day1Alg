// 왔던 길을 기준으로 더해야 하는 값
const DIR = {
  S: {
    T: [1, 0],
    B: [-1, 0],
    L: [0, 1],
    R: [0, -1],
  },
  L: {
    T: [0, 1],
    B: [0, -1],
    L: [-1, 0],
    R: [1, 0],
  },
  R: {
    T: [0, -1],
    B: [0, 1],
    L: [1, 0],
    R: [-1, 0],
  },
};

function getPrevDir(err) {
  if (err[0] === -1 && err[1] === 0) return "T";
  else if (err[0] === 1 && err[1] === 0) return "B";
  else if (err[0] === 0 && err[1] === -1) return "L";
  else if (err[0] === 0 && err[1] === 1) return "R";
  //   else return "T";
}

function DFS(grid, prev, next, level, visited) {
  let [nx, ny] = next;
  // 넘어간 경우
  if (grid.length === nx || grid[0].length === ny) {
    prev = [nx === grid.length ? -1 : nx, ny === grid[0].length ? -1 : ny];
    nx %= grid.length;
    ny %= grid[0].length;
    return DFS(grid, prev, [nx, ny], level, visited);
  }
  // 넘어간 경우 2
  if (nx === -1 || ny === -1) {
    prev = [nx === -1 ? grid.length : nx, ny === -1 ? grid[0].length : ny];
    nx = nx === -1 ? grid.length - 1 : nx;
    ny = ny === -1 ? grid[0].length - 1 : ny;
    return DFS(grid, prev, [nx, ny], level, visited);
  }

  const type = grid[nx][ny];
  const err = [prev[0] - nx, prev[1] - ny];
  const dir = getPrevDir(err);
  const [dx, dy] = DIR[type][dir];

  if (visited[nx][ny].includes(`${type}${dir}`)) return level - 1;
  visited[nx][ny].push(`${type}${dir}`);

  nx += dx;
  ny += dy;

  return DFS(grid, next, [nx, ny], ++level, visited);
}

function solution(grid) {
  grid = grid.reduce((acc, cur) => [...acc, [...cur]], []);
  grid[0][0];

  let cc = [];
  let visited = grid.map((g) => Array(g.length).fill([]));
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      let initPrev = [i, j];
      for (let key in DIR["S"]) {
        const [x, y] = DIR["S"][key];
        let initNext = [i + x, j + y];

        const count = DFS(grid, initPrev, initNext, 1, visited);
        if (count) cc.push(count);
      }
    }
  }
  cc = cc.sort((a, b) => a - b);
  return cc;
}
