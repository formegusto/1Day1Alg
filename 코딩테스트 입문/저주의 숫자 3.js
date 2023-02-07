function solution(n) {
  let count = 0;
  for (let i = 1; i <= n; i++) {
    while (String(i + count).includes("3") || !((i + count) % 3)) count++;
  }

  return n + count;
}
