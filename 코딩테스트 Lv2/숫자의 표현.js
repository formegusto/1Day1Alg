function solution(n) {
  let answer = 0;
  for (let i = 1; i <= n; i++) {
    if (!(n % i) && i % 2) answer++;
  }
  return answer;
}
