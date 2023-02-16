function solution(N, number) {
  let answer = -1;

  const s = Array.from(
    {
      length: 8,
    },
    () => new Set()
  );
  for (let i = 0; i < s.length; i++) s[i].add(Number(String(N).repeat(i + 1)));

  for (let i = 1; i < 4; i++) {
    for (let j = 0; j < i; j++) {
      for (let op1 of s[j]) {
        for (let op2 of s[i - j - 1]) {
          console.log(i, i - j - 1, op1, op2);
          s[i].add(op1 + op2);
          s[i].add(op1 - op2);
          s[i].add(op1 * op2);
          if (op2 !== 0) s[i].add(Math.floor(op1 / op2));
        }
      }
      if (s[i].has(number)) {
        answer = i + 1;
        break;
      }
    }
  }

  return answer;
}

solution(2);
