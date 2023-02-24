function solution(n, k, enemy) {
  let answer = 0;

  // [현재 n, 잔여 무적권,idx 겸 cnt, 무적권 사용여부]
  const q = [
    [n, k, 0, true],
    [n, k, 0, false],
  ];

  while (q.length) {
    let [nowN, nowK, cnt, useK] = q.shift();
    answer = Math.max(answer, cnt);
    if (cnt >= enemy.length) {
      break;
    }

    if (useK) {
      nowK--;
      q.push([nowN, nowK, cnt + 1, false]);
      if (nowK) q.push([nowN, nowK, cnt + 1, true]);
    } else {
      nowN -= enemy[cnt];
      if (nowN > 0) {
        q.push([nowN, nowK, cnt + 1, false]);
        if (nowK) if (nowK) q.push([nowN, nowK, cnt + 1, true]);
      }
    }
  }

  return answer;
}

solution(7, 3, [4, 2, 4, 5, 3, 3, 1]);
solution(2, 4, [3, 3, 3, 3]);
