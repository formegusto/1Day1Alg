function solution(n, a, b) {
  let answer = 1;

  while (Math.round(a / 2) !== Math.round(b / 2)) {
    a = Math.round(a / 2);
    b = Math.round(b / 2);
    answer++;
  }

  return answer;
}
