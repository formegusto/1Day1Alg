// Floyd-Warshall Algorithm
// 모든 각각의 정점을 출발점으로해서 모든 정점까지의 최단경로를 구하는 알고리즘

// Floyd-Warshall Target Data
// 단방향으로 표현 [start node, end node, cost]

const information = [
  [0, 1, 5],
  [0, 3, 8],
  [1, 0, 7], // 같은 경로라도 시작점이 다르면 비용이 다를 수 있음
  [1, 2, 9],
  [2, 0, 2],
  [2, 3, 4],
  [3, 2, 3],
];

// Floyd-Warshall Graph Presentation
// row : start node
// col : end node
const n = 4;
const graph = Array.from(
  {
    length: n,
  },
  () => Array(n).fill(Infinity)
);
for (let i = 0; i < information.length; i++) {
  const [start, end, cost] = information[i];
  if (graph[start][start] === Infinity) graph[start][start] = 0;
  graph[start][end] = cost;
}
/*
[
  console.log(graph);
  [0, 5, Infinity, 8],
  [7, 0, 9, Infinity],
  [2, Infinity, 0, 4],
  [Infinity, Infinity, 3, 0],
];
*/

// Floyd-Warshall Function
function floydWarshall(graph) {
  const size = graph.length;
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      for (let k = 0; k < size; k++) {
        // 어느 경로를 거쳐서 가는 것이 최소인지 판별하는 문제이다.
        graph[j][k] = Math.min(graph[j][k], graph[j][i] + graph[i][k]);
      }
    }
  }
}
floydWarshall(graph);
console.log(graph);
/*
console.log(graph);
[
  [0, 5, 11, 8],
  [7, 0, 9, 13],
  [2, 7, 0, 4],
  [5, 10, 3, 0],
];
*/

/**
 * 비슷한 알고리즘으로 다익스트라(Dijkstra)가 있다.
 * 다익스트라는 하나의 정점에서 모든 정점으로 가는 최단 경로를 찾지만,
 * 플로이드 와샬은 모든 경로에서 찾는다.
 * 시간복잡도 면에서 플로이드 와샬이 월등히 높은 차이를 가진다.
 *
 * 하지만 모든 지점의 최단경로를 구하는데에 좋은 알고리즘이다.
 * **/
