/**
 *
 * @param {number} n
 * @param {array} edge
 */
function solution(n, edge) {
  const graph = Array.from(
    {
      length: n,
    },
    () => []
  );

  for (let i = 0; i < edge.length; i++) {
    const [n1, n2] = edge[i];
    graph[n1 - 1].push(n2);
    graph[n2 - 1].push(n1);
  }

  const visited = Array(n).fill(0);
  const q = [1];
  let max = 1;
  visited[0] = max;

  while (q.length) {
    const node = q.shift();

    for (let i = 0; i < graph[node - 1].length; i++) {
      if (
        visited[graph[node - 1][i] - 1] === 0 ||
        visited[graph[node - 1][i] - 1] > visited[node - 1] + 1
      ) {
        visited[graph[node - 1][i] - 1] = visited[node - 1] + 1;
        q.push(graph[node - 1][i]);
      }
    }

    max = Math.max(max, visited[node - 1]);
  }

  return visited.filter((v) => v === max).length;
}

console.log(
  solution(6, [
    [3, 6],
    [4, 3],
    [3, 2],
    [1, 3],
    [1, 2],
    [2, 4],
    [5, 2],
  ])
);
