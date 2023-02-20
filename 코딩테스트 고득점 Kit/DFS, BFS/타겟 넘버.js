function DFS(arr, idx, sum, target) {
  const pos = sum + arr[idx];
  const neg = sum - arr[idx];

  let cnt = 0;
  if (idx === arr.length - 1) {
    if (target === pos) cnt++;
    if (target === neg) cnt++;
    return cnt;
  }

  cnt += DFS(arr, idx + 1, pos, target);
  cnt += DFS(arr, idx + 1, neg, target);

  return cnt;
}

function solution(numbers, target) {
  return DFS(numbers, 0, 0, target);
}
