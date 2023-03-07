function solution(N, road, K) {
  const graph = Array.from(
    {
      length: N + 1,
    },
    () =>
      Array.from(
        {
          length: N + 1,
        },
        () => []
      )
  );
  for (let i = 0; i < road.length; i++) {
    const [start, end, cost] = road[i];
    graph[start][end].push(cost);
    graph[end][start].push(cost);
  }

  const costs = Array(N).fill(Number.MAX_SAFE_INTEGER);
  function DFS(key, totalCost) {
    if (totalCost > K) return;
    else {
      costs[key - 1] = Math.min(costs[key - 1], totalCost);
    }

    for (let i = 0; i < graph[key].length; i++) {
      for (let j = 0; j < graph[key][i].length; j++) {
        if (costs[i - 1] > totalCost + graph[key][i][j])
          DFS(i, totalCost + graph[key][i][j]);
      }
    }
  }
  DFS(1, 0);

  return costs.filter((c) => c <= K).length;
}
