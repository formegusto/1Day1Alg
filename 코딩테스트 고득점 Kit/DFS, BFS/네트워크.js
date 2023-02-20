function solution(n, computers) {
  let answer = 0;
  let visited = Array(n).fill(false);

  function DFS(idx) {
    visited[idx] = true;

    for (let i = 0; i < computers[idx].length; i++) {
      if (computers[idx][i] && !visited[i]) DFS(i);
    }
  }
  for (let i = 0; i < computers.length; i++) {
    if (!visited[i]) {
      answer++;
      for (let j = 0; j < computers[i].length; j++) {
        if (computers[i][j] && !visited[j]) {
          DFS(j);
        }
      }
    }
  }

  return answer;
}
