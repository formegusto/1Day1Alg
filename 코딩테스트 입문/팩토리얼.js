// 팩토리얼 0 은 1 이다.
function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}

function solution(n) {
  let i = 1;
  for (; factorial(i) <= n; i++) {}
  return i - 1;
}
