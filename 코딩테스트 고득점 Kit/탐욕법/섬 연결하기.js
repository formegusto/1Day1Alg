function solution(n, costs) {
  let answer = 0;

  costs = costs.sort((a, b) => a[2] - b[2]);

  let visited = Array(n).fill(false);
  let visitCount = 0;
  for (let i = 0; i < costs.length; i++) {
    const [start, end, cost] = costs[i];

    if (!visited[start]) {
      visitCount++;
    }

    if (!visited[end]) {
      visited[end] = true;
      answer += cost;
      visitCount++;
    }

    if (visitCount === n) break;
  }

  return answer;
}

console.log(
  "answer =>",
  solution(4, [
    [0, 1, 1],
    // [0, 2, 2],
    [1, 2, 5],
    [1, 3, 1],
    [2, 3, 8],
  ])
);
