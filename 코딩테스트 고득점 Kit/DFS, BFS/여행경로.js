function solution(tickets) {
  const graph = tickets.reduce((acc, [start, end]) => {
    acc[start] ? acc[start].push(end) : (acc[start] = [end]);
    acc[start].sort((a, b) => (a < b ? 1 : -1));
    return acc;
  }, {});

  const s = ["ICN"];
  const path = [];

  while (s.length) {
    const src = s[s.length - 1];

    if (!graph[src] || !graph[src].length) path.push(s.pop());
    else s.push(graph[src].pop());

    console.log(graph);
  }

  return path.reverse();
}

console.log(
  solution([
    ["ICN", "JFK"],
    ["HND", "IAD"],
    ["JFK", "HND"],
  ])
);

console.log(
  solution([
    ["ICN", "SFO"],
    ["ICN", "ATL"],
    ["SFO", "ATL"],
    ["ATL", "ICN"],
    ["ATL", "SFO"],
  ])
);
// [ 'ICN', 'ATL', 'ICN', 'SFO', 'ATL', 'SFO' ]

console.log(
  solution([
    ["ICN", "A"],
    ["ICN", "B"],
    ["B", "ICN"],
  ])
);
// [ 'ICN', 'B', 'ICN', 'A' ]

// 이건 약간 이해를 잘 못한듯
