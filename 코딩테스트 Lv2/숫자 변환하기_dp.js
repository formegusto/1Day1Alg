// 최솟값을 기록하는 dp
function getCalc(n) {
  return {
    0: (x) => x + n,
    1: (x) => x * 2,
    2: (x) => x * 3,
  };
}

function solution(x, y, n) {
  if (x === y) return 0;

  const CALC = getCalc(n);
  const dp = {
    [x]: 0,
  };

  for (let i = x; i <= y; i++) {
    if (dp[i] === undefined) continue;
    for (let c = 0; c < 3; c++) {
      const result = CALC[c](i);
      if (result <= y) {
        if (!dp[result]) dp[result] = Number.MAX_SAFE_INTEGER;
        dp[result] = Math.min(dp[result], dp[i] + 1);
      }
    }
  }

  return dp[y] ? dp[y] : -1;
}

console.log(solution(10, 40, 5));
// console.log(solution(2, 1000000, 2));
