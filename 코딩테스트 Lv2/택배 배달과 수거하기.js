function solution(cap, n, deliveries, pickups) {
  let answer = 0;
  const sDel = deliveries.map((_, i) => i);
  const sPick = pickups.map((_, i) => i);

  while (sDel.length && !deliveries[sDel[sDel.length - 1]]) sDel.pop();
  while (sPick.length && !pickups[sPick[sPick.length - 1]]) sPick.pop();

  let iDel = -1;
  let iPick = -1;

  while (sDel.length || sPick.length) {
    let delCnt = cap;
    let pickCnt = 0;

    if (sDel.length) iDel = sDel[sDel.length - 1];
    if (sPick.length) iPick = sPick[sPick.length - 1];

    // 픽업과 딜리버리 중 많이 소요되는 비용
    answer += (Math.max(iDel, iPick) + 1) * 2;

    if (sDel.length) {
      for (let i = iDel; i >= 0; i--) {
        if (!delCnt) break;
        if (delCnt >= deliveries[i]) {
          delCnt -= deliveries[i];
          deliveries[i] = 0;
        } else {
          deliveries[i] -= delCnt;
          delCnt = 0;
        }
      }
    }

    if (sPick.length) {
      for (let i = iPick; i >= 0; i--) {
        if (pickCnt === cap) break;
        if (cap - pickCnt >= pickups[i]) {
          pickCnt += pickups[i];
          pickups[i] = 0;
        } else {
          pickups[i] -= cap - pickCnt;
          pickCnt = cap;
        }
      }
    }

    iDel = -1;
    iPick = -1;

    while (sDel.length) {
      if (deliveries[sDel[sDel.length - 1]] === 0) sDel.pop();
      else break;
    }
    while (sPick.length) {
      if (pickups[sPick[sPick.length - 1]] === 0) sPick.pop();
      else break;
    }
  }

  return answer;
}

solution(4, 5, [1, 0, 3, 1, 2], [0, 3, 0, 4, 0]);
solution(2, 2, [1, 0], [1, 0]);
