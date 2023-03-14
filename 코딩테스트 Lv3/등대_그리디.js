function makeGraph(n, info) {
  let graph = Array.from({ length: n + 1 }, () => []);
  for (let i = 0; i < info.length; i++) {
    const [start, end] = info[i];
    graph[start].push(end);
    graph[end].push(start);
  }

  return graph;
}

function solution(n, lighthouse) {
  let answer = 0;
  visited = Array(n + 1).fill(false);

  while (lighthouse.length) {
    const graph = makeGraph(n, lighthouse);
    for (let i = 0; i < graph.length; i++) {
      if (graph[i].length === 1) {
        const end = graph[i][0];
        if (!visited[end]) {
          visited[end] = true;
          if (graph[end].length !== 1) answer++;
          else answer += 0.5;
        }
      }
    }

    lighthouse = lighthouse.filter((l) => {
      const [start, end] = l;
      return !visited[start] && !visited[end];
    });
  }

  return answer;
}

console.log(
  solution(11, [
    [1, 2],
    [1, 3],
    [1, 4],
    //   [1, 5],
    [1, 9],
    [5, 6],
    [5, 7],
    [5, 8],
    [9, 10],
    [10, 11],
    [11, 5],
  ])
);
