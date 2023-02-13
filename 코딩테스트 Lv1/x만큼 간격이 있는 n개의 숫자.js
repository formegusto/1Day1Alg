function solution(x, n) {
  let answer = [];

  for (let i = 1; i <= Math.abs(n); i++) answer.push(x * i);

  return answer;
}
