function solution(N, number) {
  if (N === number) return 1;
  let answer = -1;

  const dp = Array.from(
    {
      length: 8,
    },
    (_, i) => new Set([Number(String(N).repeat(i + 1))])
  );

  for (let i = 1; i < 8; i++) {
    for (let j = 0; j < i; j++) {
      for (let op1 of dp[j]) {
        for (let op2 of dp[i - j - 1]) {
          dp[i].add(op1 + op2);
          dp[i].add(op1 - op2);
          dp[i].add(op1 * op2);
          if (op2 !== 0) dp[i].add(Math.floor(op1 / op2));
        }
      }
    }
    if (dp[i].has(number)) {
      answer = i + 1;
      break;
    }
  }

  return answer;
}
