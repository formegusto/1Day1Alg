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
  const q = [...Object.values(CALC).map((f) => [f(x), 1])];

  let failCase = {};
  while (q.length) {
    const [result, cnt] = q.shift();

    if (failCase[result]) continue;
    if (result === y) return cnt;

    let failCnt = 0;
    for (let i = 0; i < 3; i++) {
      const nextResult = CALC[i](result);
      if (nextResult === result) failCase++;
      if (nextResult > y) failCnt++;
      else q.push([nextResult, cnt + 1]);
    }

    if (failCnt >= 3) failCase[result] = false;
  }

  return -1;
}

console.log(solution(1, 1000000, 1));
console.log(solution(2, 1000000, 2));
