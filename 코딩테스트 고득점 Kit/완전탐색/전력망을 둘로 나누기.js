function BFS(start, dist, grid) {
  if (dist[start]) return -1;

  const q = [];
  q.push(start);

  let count = 0;
  while (q.length) {
    const start = q.shift();
    dist[start] = ++count;
    for (let i = 0; i < grid[start].length; i++) {
      const nextNode = grid[start][i];
      if (!dist[nextNode]) q.push(nextNode);
    }
  }

  return count;
}

function solution(n, wires) {
  let answer = -1;

  for (let i = 0; i < wires.length; i++) {
    const _wires = [...wires.slice(0, i), ...wires.slice(i + 1)];
    const grid = _wires.reduce((acc, cur) => {
      acc[cur[0]] ? acc[cur[0]].push(cur[1]) : (acc[cur[0]] = [cur[1]]);
      acc[cur[1]] ? acc[cur[1]].push(cur[0]) : (acc[cur[1]] = [cur[0]]);

      return acc;
    }, {});

    const dist = Array(n + 1).fill(0);
    const counts = [];
    for (let i = 1; i <= n; i++) {
      if (grid[i] && !dist[i]) {
        const count = BFS(i, dist, grid);
        if (count !== -1) counts.push(count);
      }
    }

    if (counts.length !== 2) continue;
    else {
      const err = Math.abs(counts[0] - counts[1]);
      if (answer === -1 || answer > err) answer = err;
    }
  }

  return answer;
}

console.log(
  solution(9, [
    [1, 3],
    [2, 3],
    [3, 4],
    [4, 5],
    [4, 6],
    [4, 7],
    [7, 8],
    [7, 9],
  ])
);

console.log(
  solution(6, [
    [1, 4],
    [6, 3],
    [2, 5],
    [5, 1],
    [5, 3],
  ])
);

console.log(
  solution(4, [
    [1, 2],
    [2, 3],
    [3, 4],
  ])
);

console.log(
  solution(7, [
    [1, 2],
    [2, 7],
    [3, 7],
    [3, 4],
    [4, 5],
    [6, 7],
  ])
);

console.log(
  solution(9, [
    [1, 3],
    [3, 5],
    [3, 2],
    [5, 4],
    [4, 6],
    [6, 7],
    [7, 8],
    [8, 9],
  ])
);
