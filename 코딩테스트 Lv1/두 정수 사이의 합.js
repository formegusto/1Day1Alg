function solution(a, b) {
  let answer = 0;
  const start = a > b ? b : a;
  const end = a > b ? a : b;

  for (let i = start; i <= end; i++) answer += i;

  return answer;
}
