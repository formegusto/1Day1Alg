function solution(n) {
  let answer = 0;

  let ternary = [];
  while (n) {
    ternary.push(n % 3);
    n = Math.floor(n / 3);
  }
  ternary = ternary.reverse();

  return ternary.reduce((acc, cur, idx) => acc + 3 ** idx * cur, 0);
}

// ㅋㅋㅋㅋ toString이 있었엌ㅋㅋㅋ
// parseInt 까지,,
