function solution(n, lost, reserve) {
  let answer = 0;

  lost.sort((a, b) => a - b);
  reserve.sort((a, b) => a - b);

  for (let i = 1; i <= n; i++) {
    if (!lost.includes(i)) answer++;
    else {
      let reserveIdx = reserve.indexOf(i);
      if (reserveIdx === -1) {
        reserveIdx = 0;
        while (
          reserveIdx < reserve.length &&
          i - 1 !== reserve[reserveIdx] &&
          i + 1 !== reserve[reserveIdx]
        )
          reserveIdx++;
        if (reserveIdx === reserve.length || lost.includes(reserve[reserveIdx]))
          continue;
      }

      reserve = [
        ...reserve.slice(0, reserveIdx),
        ...reserve.slice(reserveIdx + 1),
      ];

      answer++;
    }
  }

  return answer;
}

/*
신기한 풀이 있음. 참고
*/
