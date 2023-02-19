function solution(arr) {
  const operandsCount = Math.ceil(arr.length / 2);
  const maxdp = new Array(operandsCount)
    .fill()
    .map((_) => new Array(operandsCount).fill(-Infinity));
  const minDp = new Array(operandsCount)
    .fill()
    .map((_) => new Array(operandsCount).fill(Infinity));

  for (let i = 0; i < operandsCount; i++) {
    maxDp[i][i] = +arr[i * 2];
    minDp[i][i] = +arr[i * 2];
  }

  for (let cnt = 1; cnt < operandsCount; cnt++) {
    for (let i = 0; i < operandsCount - cnt; i++) {
      const j = i + cnt;
      for (let k = i; k < j; k++) {
        if (arr[k * 2 + 1] === "+") {
          maxDp[i][j] = Math.max(maxDp[i][j], maxDp[i][k] + maxDp[k + 1][j]);
          minDp[i][j] = Math.min(minDp[i][j], minDp[i][k] + minDp[k + 1][j]);
        } else {
          maxDp[i][j] = Math.max(maxDp[i][j], maxDp[i][k] - minDp[k + 1][j]);
          minDp[i][j] = Math.min(minDp[i][j], minDp[i][k] - maxDp[k + 1][j]);
        }
      }
    }
  }

  return maxDp[0][operandsCount - 1];
}
