const DIRS = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
];

function solution(maps) {
  const [rSize, cSize] = [maps.length, maps[0].length];

  const visited = Array.from(
    {
      length: rSize,
    },
    () => Array(cSize).fill(0)
  );
  visited[0][0] = 1;
  function DFS(r, c, cnt) {
    if (r === rSize - 1 && c === cSize - 1) return;
    if (visited[rSize - 1][cSize - 1] && cnt >= visited[rSize - 1][cSize - 1])
      return;
    for (let i = 0; i < 4; i++) {
      const [dr, dc] = DIRS[i];
      const [nr, nc] = [r + dr, c + dc];
      if (nr < 0 || nr >= rSize || nc < 0 || nc >= cSize || !maps[nr][nc])
        continue;
      if (!visited[nr][nc] || cnt + 1 < visited[nr][nc]) {
        visited[nr][nc] = cnt + 1;
        DFS(nr, nc, cnt + 1);
      }
    }
  }
  DFS(0, 0, 1);

  console.log(visited);

  return visited[rSize - 1][cSize - 1] ? visited[rSize - 1][cSize - 1] : -1;
}

solution([
  [1, 0, 1, 1, 1],
  [1, 0, 1, 0, 1],
  [1, 0, 1, 1, 1],
  [1, 1, 1, 0, 1],
  [0, 0, 0, 0, 1],
]);

// console.log(solution([[1, 0, 1, 1, 1]]));
// console.log(solution([[1, 1, 1, 1, 1]]));
// console.log(solution([[1, 1, 1, 0, 1]]));
// console.log(solution([[1], [1], [1], [1], [1]]));
// console.log(solution([[1], [1], [1], [0], [1]]));
// console.log(
//   solution([
//     [1, 0],
//     [0, 1],
//   ])
// );
// console.log(solution([[1], [1]]));
