function solution(land) {
  const dp = [land[0]];
  let landIdx = 1;
  let dpIdx = 0;
  while (landIdx < land.length) {
    const _land = land[landIdx++];
    const maxDp = Array(4).fill(0);
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
        if (i === j) continue;
        maxDp[i] = Math.max(maxDp[i], dp[dpIdx][j] + _land[i]);
      }
    }

    dp.push(maxDp);
    dpIdx++;
  }

  return Math.max(...dp.pop());
}
