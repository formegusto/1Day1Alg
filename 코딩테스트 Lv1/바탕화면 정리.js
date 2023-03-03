function solution(wp) {
  let minR = (minC = Number.MAX_SAFE_INTEGER);
  let maxR = (maxC = Number.MIN_SAFE_INTEGER);

  for (let i = 0; i < wp.length; i++) {
    for (let j = 0; j < wp[i].length; j++) {
      if (wp[i][j] === "#") {
        minR = Math.min(i, minR);
        minC = Math.min(j, minC);
        maxR = Math.max(i, maxR);
        maxC = Math.max(j, maxC);
      }
    }
  }

  return [minR, minC, ++maxR, ++maxC];
}
