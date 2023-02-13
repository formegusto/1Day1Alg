function BFS(start, grid, visited) {
  if (visited[start]) return -1;

  const q = [];
  q.push(start);

  let count = 0;
  while (q.length) {
    const s = q.shift();
    if (visited[s]) continue;

    visited[s] = ++count;

    if (grid[s])
      for (let i = 0; i < grid[s].length; i++) {
        const nextNode = grid[s][i];
        if (!visited[nextNode]) q.push(nextNode);
      }
  }

  return count;
}

/**
 *
 * @param {number} n
 * @param {array} wires
 * @returns
 */
function solution(n, wires) {
  let answer = -1;

  for (let sliceIdx = 0; sliceIdx < wires.length; sliceIdx++) {
    const _wires = [...wires.slice(0, sliceIdx), ...wires.slice(sliceIdx + 1)];
    const grid = _wires.reduce((acc, [node, nextNode]) => {
      acc[node] ? acc[node].push(nextNode) : (acc[node] = [nextNode]);
      acc[nextNode] ? acc[nextNode].push(node) : (acc[nextNode] = [node]);

      return acc;
    }, {});

    const visited = Array(n + 1).fill(0);
    const counts = [];
    for (let i = 1; i <= n; i++) {
      if (!visited[i]) {
        const count = BFS(i, grid, visited);
        counts.push(count);
      }
    }

    if (counts.length !== 2) continue;
    const err = Math.abs(counts[0] - counts[1]);
    if (answer === -1 || answer > err) answer = err;
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

// console.log(
//   solution(6, [
//     [1, 4],
//     [6, 3],
//     [2, 5],
//     [5, 1],
//     [5, 3],
//   ])
// );

// console.log(
//   solution(4, [
//     [1, 2],
//     [2, 3],
//     [3, 4],
//   ])
// );

// console.log(
//   solution(7, [
//     [1, 2],
//     [2, 7],
//     [3, 7],
//     [3, 4],
//     [4, 5],
//     [6, 7],
//   ])
// );

// console.log(
//   solution(9, [
//     [1, 3],
//     [3, 5],
//     [3, 2],
//     [5, 4],
//     [4, 6],
//     [6, 7],
//     [7, 8],
//     [8, 9],
//   ])
// );
