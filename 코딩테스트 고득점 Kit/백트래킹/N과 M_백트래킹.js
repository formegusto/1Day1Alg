// 백트래킹
// 가능한 모든 방법을 탐색한다
// 현재 상태에서 가능한 모든 후보군을 따라 들어가며, 해결책에 대한 후보를 구축해 나아가다
// 가능성이 없다고 판단되면 즉시 후보를 포기하면서 정답을 찾아가는 범용적인 알고리즘이다.

// 대표적인 완전 탐색 방법인 DFS(Depth First Search)로 부터 파생된 알고리즘
// DFS의 비효율적인 경로를 차단하고 목표지점에 갈 수 있는 가능성이 있는 루트를 검사하는 방법이 백트래킹이다.
// 여기서 가지치기(Pruning)를 통해 효율을 극대화한다.
function solution(n, m) {
  const arr = [];

  function DFS(_arr, depth) {
    if (depth === m) {
      arr.push(_arr);
      return;
    }

    for (let i = 1; i <= n; i++) {
      if (!_arr.includes(i)) {
        DFS([..._arr, i], depth + 1, i);
      }
    }
  }
  DFS([], 0);

  return arr;
}

console.log(solution(3, 1));
console.log(solution(4, 2));
console.log(solution(4, 3));
console.log(solution(4, 4));
