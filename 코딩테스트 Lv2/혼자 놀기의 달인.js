function solution(cards) {
  let answer = 0;
  for (let i = 0; i < cards.length; i++) {
    const c = [...cards];
    const boxGrp1 = [];
    let seq = c[i];
    while (!boxGrp1.includes(seq)) {
      boxGrp1.push(seq);
      seq = c[seq - 1];
    }
    for (let g = 0; g < boxGrp1.length; g++) c[boxGrp1[g] - 1] = 0;
    for (let j = 0; j < c.length; j++) {
      if (!c[j]) continue;
      const boxGrp2 = [];
      seq = c[j];
      while (c[seq - 1] && !boxGrp2.includes(seq)) {
        boxGrp2.push(seq);
        seq = c[seq - 1];
      }
      answer = Math.max(answer, boxGrp1.length * boxGrp2.length);
    }
  }

  return answer;
}

console.log(solution([8, 6, 3, 7, 2, 5, 1, 4]));
