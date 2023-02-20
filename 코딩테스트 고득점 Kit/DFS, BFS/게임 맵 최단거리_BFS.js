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

  let qPos = 0;
  const queue = [[0, 0, 1]];
  visited[0][0] = 1;
  while (true) {
    if (!queue[qPos]) break;
    const [r, c] = queue[qPos++];

    if (r === rSize - 1 && c === cSize - 1) break;

    for (let i = 0; i < 4; i++) {
      const [dr, dc] = DIRS[i];
      const [nr, nc] = [r + dr, c + dc];

      if (nr < 0 || nr >= rSize || nc < 0 || nc >= cSize || !maps[nr][nc])
        continue;
      if (visited[nr][nc]) continue;
      visited[nr][nc] = visited[r][c] + 1;
      queue.push([nr, nc]);
    }
  }

  return visited[rSize - 1][cSize - 1] ? visited[rSize - 1][cSize - 1] : -1;
}

solution([
  [1, 0, 1, 1, 1],
  [1, 0, 1, 0, 1],
  [1, 0, 1, 1, 1],
  [1, 1, 1, 0, 1],
  [0, 0, 0, 0, 1],
]);

solution([
  [1, 0, 1, 1, 1],
  [1, 0, 1, 0, 1],
  [1, 0, 1, 1, 1],
  [1, 1, 1, 0, 0],
  [0, 0, 0, 0, 1],
]);

console.log(solution([[1, 1, 1, 1, 1]]));
console.log(
  solution([
    [1, 0],
    [1, 1],
  ])
);
console.log(solution([[1, 1, 1, 0, 1]]));
console.log(solution([[1], [1], [1], [1], [1]]));
console.log(solution([[1], [1], [1], [0], [1]]));
