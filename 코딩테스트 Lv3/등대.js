/*
방문하는데, 자신이 자식이 없는 노드일 때, 부모한테 켜야 함을 알려주어야 함.
*/
let N, visited, graph;
let switches;

function solution(n, lighthouse) {
  let answer = 0;
  N = n;
  visited = Array(n + 1).fill(false);
  switches = Array(n + 1).fill(false);
  graph = Array.from({ length: n + 1 }, () => []);
  for (let i = 0; i < lighthouse.length; i++) {
    const [start, end] = lighthouse[i];
    graph[start].push(end);
    graph[end].push(start);
  }

  function DFS(par, now) {
    visited[now] = true;
    if (graph[now].length === 1 && !switches[par]) {
      switches[par] = true;
      if (graph[par].length !== 1) answer += 1;
      else answer += 0.5;
      return;
    }

    for (let i = 0; i < graph[now].length; i++) {
      const child = graph[now][i];
      if (!visited[child]) DFS(now, child);
    }
  }

  DFS(0, 1);

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
