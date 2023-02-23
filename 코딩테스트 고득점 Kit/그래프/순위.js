function solution(n, results) {
  const graph = Array.from(
    {
      length: n,
    },
    () => Array(n).fill(Infinity)
  );
  for (let i = 0; i < results.length; i++) {
    let [winner, loser] = results[i];
    [winner, loser] = [winner - 1, loser - 1];
    graph[winner][loser] = 1;
    graph[loser][winner] = -1;
    graph[winner][winner] = 0;
    graph[loser][loser] = 0;
  }
  //   console.log(graph, "\n");

  // floyd-warshall
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      for (let k = 0; k < n; k++) {
        // 여기서 권투 경기가 들어가면 됨
        // j가 i win ===> i 가 k win ===> j 가 k win
        if (graph[j][i] === 1 && graph[i][k] === 1) graph[j][k] = 1;
        // j가 i loss ===> i 가 k loss ===> j 가 k 에게도 loss
        if (graph[j][i] === -1 && graph[i][k] === -1) graph[j][k] = -1;
      }
    }
  }
  //   console.log(graph);
  let answer = 0;
  for (let i = 0; i < graph.length; i++)
    if (!graph.filter((v) => v === Infinity).length) answer++;

  return answer;
}

solution(5, [
  [4, 3],
  [4, 2],
  [3, 2],
  [1, 2],
  [2, 5],
]);
