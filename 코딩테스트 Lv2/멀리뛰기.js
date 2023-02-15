function solution(s) {
  if (s === 1) return 1;
  if (s === 2) return 2;

  let answer = 0;
  let n1 = 0,
    n2 = 1;
  for (let i = 2; i <= s + 1; i++) {
    answer = n1 + (n2 % 1234567);
    n1 = n2;
    n2 = answer;
  }
  return answer % 1234567;
}
