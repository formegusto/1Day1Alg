function solution(n) {
  if (!n) return 0;
  if (n % 2) return 0;

  const dp = Array(n + 1).fill(0);
  dp[0] = 1;
  dp[2] = 3;
  for (let i = 4; i <= n; i += 2) {
    let cnt1 = dp[i - 2] * 3;
    let cnt2 = 0;
    for (let j = i - 4; j >= 0; j -= 2) cnt2 += dp[j] * 2;

    dp[i] = (cnt1 + cnt2) % 1000000007;
  }

  return dp[n];
}
