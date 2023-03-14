let parents;

function Find(x) {
  if (x === parents[x]) return x;
  else {
    let y = Find(parents[x]);
    parents[x] = y;
    return y;
  }
}

function Union(x, y) {
  x = Find(x);
  y = Find(y);
  if (x !== y) parents[y] = x;
}

function tree(n, graph) {
  graph = graph.sort((a, b) => a[2] - b[2]);
  parents = Array.from(
    {
      length: n + 1,
    },
    (_, i) => i
  );

  let sum = 0;
  for (let i = 0; i < graph.length; i++) {
    if (Find(graph[i][0]) !== Find(graph[i][1])) {
      sum += graph[i][2];
      Union(graph[i][0], graph[i][1]);
    }
  }

  console.log(parents, sum);
}

tree(7, [
  [1, 7, 12],
  [1, 4, 28],
  [1, 2, 67],
  [1, 5, 17],
  [2, 4, 24],
  [2, 5, 62],
  [3, 5, 20],
  [3, 6, 37],
  [4, 7, 13],
  [5, 6, 45],
  [5, 7, 73],
]);
