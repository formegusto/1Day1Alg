function solution(n) {
  let dp = Array(n).fill(0);
  dp[0] = 1;
  dp[1] = 2;
  for (let i = 2; i < n; i++) {
    let sum = dp[i - 1] + dp[i - 2];
    dp[i] = sum % 1000000007;
  }

  return dp[n - 1];
}

console.log(solution(4));

// 이전 n의 결과를 이용하는 dp의 특징
// 1 -> 2 -> 3 -> 5 -> 8
