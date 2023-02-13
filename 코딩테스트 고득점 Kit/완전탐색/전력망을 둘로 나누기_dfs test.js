// wire = [연결 되어 있는, 연결한]
function DFS(grid, root, id, visited) {
  if (!visited[id] && !root) {
    visited[id] = root ? root : id;
    return;
  }

  console.log(root, id, visited);

  if (grid[id]) {
    for (let chain of grid[id]) {
      DFS(grid, visited[id], chain, visited);
    }
  }

  return;
}

/**
 *
 * @param {number} n
 * @param {array} wires
 */
function solution(n, wires) {
  const grid = wires.reduce((acc, cur) => {
    acc[cur[0]] ? acc[cur[0]].push(cur[1]) : (acc[cur[0]] = [cur[1]]);

    return acc;
  }, {});

  // root id 기록
  const visited = {};
  for (let i = 1; i <= n; i++) {
    if (grid[i]) {
      if (!visited[i]) visited[i] = i;
      for (let chain of grid[i]) DFS(grid, null, chain, visited);
    }
  }

  console.log(visited);
}

solution(9, [
  [1, 3],
  [2, 3],
  [3, 4],
  [4, 5],
  [4, 6],
  [4, 7],
  [7, 8],
  [7, 9],
]);
