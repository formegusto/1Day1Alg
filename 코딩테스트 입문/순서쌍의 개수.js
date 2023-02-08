function solution(n) {
  var answer = 0;

  for (let i = 0; i * i <= n; i++) {
    const j = n / i;
    if (j === j >> 0) answer += i === j ? 1 : 2;
  }

  return answer;
}
