const dr = [-1, 1, 0, 0];
const dc = [0, 0, -1, 1];
let queue;

function BFS(size, startR, startC, maps, target) {
  const visited = Array.from(
    {
      length: size[0],
    },
    () => Array(size[1]).fill(0)
  );
  console.log(visited);
  let tr = -1,
    tc = -1;

  queue = [[startR, startC]];
  visited[startR][startC] = 1;

  while (queue.length) {
    const [r, c] = queue.shift();

    if (maps[r][c] === target) {
      tr = r;
      tc = c;
      break;
    }

    for (let i = 0; i < 4; i++) {
      const [nr, nc] = [r + dr[i], c + dc[i]];
      if (
        nr < 0 ||
        nr >= size[0] ||
        nc < 0 ||
        nc >= size[1] ||
        maps[nr][nc] === "X"
      )
        continue;
      if (!visited[nr][nc] || visited[r][c] + 1 < visited[nr][nc]) {
        visited[nr][nc] = visited[r][c] + 1;
        queue.push([nr, nc]);
      }
    }
  }

  return [tr, tc, tr === -1 || tc === -1 ? null : visited[tr][tc]];
}

// function getVisited() {
//   const visited =

//   return visited;
// }

function solution(maps) {
  let size = [maps.length, maps[0].length];
  //   console.log(size);

  // get start
  let startR = 0;
  let startC = 0;
  getStart: for (; startR < size[0]; startR++) {
    for (; startC < size[1]; startC++) {
      if (maps[startR][startC] === "S") break getStart;
    }
  }
  let count = 0;
  const [leverR, leverC, leverCount] = BFS(size, startR, startC, maps, "L");
  count += leverCount - 1;
  if (leverR === -1 || leverC === -1) return -1;

  const [goalR, goalC, goalCount] = BFS(size, leverR, leverC, maps, "E");
  if (goalR === -1 || goalC === -1) return -1;
  count += goalCount - 1;

  return count;
}

// console.log(solution(["SOOOL", "XXXXO", "OOOOO", "OXXXX", "OOOOE"]));
console.log(solution(["SOOOL", "OOOOO", "OOOOO", "OOOOO", "OOOOE"]));
// console.log(solution(["LOOOS", "OOOOO", "OOOOO", "XOOOO", "EXOOO"]));

// console.log(solution(["SOOL", "XXXO", "OOOO", "OXXX", "OOOE"]));
