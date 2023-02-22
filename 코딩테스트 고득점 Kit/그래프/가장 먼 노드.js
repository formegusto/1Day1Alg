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
  function DFS(prev, node, cnt) {
    visited[node - 1] = cnt;

    for (let i = 0; i < graph[node - 1].length; i++) {
      if (graph[node - 1][i] === prev) continue;
      if (
        visited[graph[node - 1][i] - 1] === 0 ||
        visited[graph[node - 1][i] - 1] > cnt + 1
      )
        DFS(node, graph[node - 1][i], cnt + 1);
    }
  }

  DFS(null, 1, 1);
  const maxV = Math.max(...visited);
  return visited.filter((v) => v === maxV).length;
}

console.log(
  solution(20000, [
    [3, 6],
    [4, 3],
    [3, 2],
    [1, 3],
    [1, 2],
    [2, 4],
    [5, 2],
  ])
);
