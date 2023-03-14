let tree;

function makeTree(n, lighthouse) {
  tree = Array.from({ length: n + 1 }, () => []);
  for (let i = 0; i < lighthouse.length; i++) {
    const [a, b] = lighthouse[i];
    tree[a].push(b);
    tree[b].push(a);
  }
}

function solution(n, lighthouse) {
  makeTree(n, lighthouse);
  function DFS(node, tree, visited) {
    visited[node] = true;
    const children = tree[node].reduce(
      (acc, cur) => (visited[cur] ? acc : acc.concat(cur)),
      []
    );
    let [on, off] = [1, 0];
    if (!children.length) return [on, off];
    else {
      for (let i = 0; i < children.length; i++) {
        const child = children[i];
        const [childOn, childOff] = DFS(child, tree, visited);
        on += Math.min(childOn, childOff);
        off += childOn;
      }
      return [on, off];
    }
  }

  return Math.min(...DFS(1, tree, Array(n + 1).fill(false)));
}

console.log(
  solution(8, [
    [1, 2],
    [1, 3],
    [1, 4],
    [1, 5],
    [5, 6],
    [5, 7],
    [5, 8],
  ])
);
