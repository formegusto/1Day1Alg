// https://velog.io/@longroadhome/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-LV.4-%EC%82%AC%EC%B9%99%EC%97%B0%EC%82%B0
function solution(arr) {
  const opCount = Math.ceil(arr.length / 2);

  const maxDp = new Array(opCount)
    .fill()
    .map((_) => new Array(opCount).fill(-Infinity));
  const minDp = new Array(opCount)
    .fill()
    .map((_) => new Array(opCount).fill(Infinity));

  for (let i = 0; i < opCount; i++) {
    maxDp[i][i] = +arr[i * 2];
    minDp[i][i] = +arr[i * 2];
  }

  for (let cnt = 1; cnt < opCount; cnt++) {
    for (let i = 0; i < opCount - cnt; i++) {
      let j = i + cnt;
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

  return maxDp[0][opCount - 1];
}

solution(["1", "-", "3", "+", "5", "-", "8"]);
// solution(["5", "-", "3", "+", "1", "+", "2", "-", "4"]);
