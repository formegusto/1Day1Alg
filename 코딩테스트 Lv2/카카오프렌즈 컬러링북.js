let M, N;
let graph;
let visited;

function BFS(sr, sc, num) {
  const dr = [-1, 1, 0, 0];
  const dc = [0, 0, -1, 1];

  let count = 0;
  visited[sr][sc] = true;
  const q = [[sr, sc]];
  while (q.length) {
    const [r, c] = q.shift();

    count++;
    for (let i = 0; i < 4; i++) {
      const [nr, nc] = [r + dr[i], c + dc[i]];

      if (nr < 0 || nr >= M) continue;
      if (nc < 0 || nc >= N) continue;
      if (!visited[nr][nc] && graph[nr][nc] === num) {
        visited[nr][nc] = true;
        q.push([nr, nc]);
      }
    }
  }

  return count;
}

function solution(m, n, picture) {
  [M, N] = [m, n];
  graph = picture;
  visited = Array.from(
    {
      length: m,
    },
    () => Array(n).fill(false)
  );

  let areaCount = 0;
  let maxAreaSize = 0;
  for (let i = 0; i < M; i++) {
    for (let j = 0; j < N; j++) {
      if (!visited[i][j] && graph[i][j] !== 0) {
        areaCount++;
        const areaSize = BFS(i, j, graph[i][j]);
        maxAreaSize = Math.max(areaSize, maxAreaSize);
      }
    }
  }

  return [areaCount, maxAreaSize];
}

console.log(
  solution(6, 4, [
    [1, 1, 1, 0],
    [1, 2, 2, 0],
    [1, 0, 0, 1],
    [0, 0, 0, 1],
    [0, 0, 0, 3],
    [0, 0, 0, 3],
  ])
);
