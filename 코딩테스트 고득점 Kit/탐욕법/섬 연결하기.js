function find(root, node) {
  if (root[node] === node) return node;
  return find(root, root[node]);
}

function union(root, node1, node2) {
  let p1 = find(root, node1);
  let p2 = find(root, node2);

  if (p1 < p2) root[p2] = p1;
  else root[p1] = p2;
}

function solution(n, costs) {
  costs = costs.sort((a, b) => a[2] - b[2]);
  console.log(costs);

  const root = Array.from(
    {
      length: n,
    },
    (_, i) => i
  );

  let c = 0;
  let totalCost = 0;
  while (c < costs.length) {
    const [start, end, cost] = costs[c++];

    if (find(root, start) !== find(root, end)) {
      union(root, start, end);
      totalCost += cost;
    }
  }

  return totalCost;
}

console.log(
  "answer =>",
  solution(4, [
    [0, 1, 1],
    [0, 2, 2],
    [1, 2, 5],
    [1, 3, 1],
    [2, 3, 8],
  ])
);

console.log(
  "\nanswer 2 =>",
  solution(5, [
    [0, 1, 5],
    [1, 2, 3],
    [2, 3, 3],
    [3, 1, 2],
    [3, 0, 4],
    [2, 4, 6],
    [4, 0, 7],
  ])
);

console.log(
  "\nanswer 3 =>",
  solution(5, [
    [0, 1, 1],
    [0, 2, 2],
    [1, 2, 5],
    [1, 3, 3],
    [2, 3, 8],
    [3, 4, 1],
  ])
);

console.log(0 % 3);
