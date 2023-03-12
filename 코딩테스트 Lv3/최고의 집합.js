function solution(n, s) {
  const baseMax = Math.floor(s / n);
  if (!baseMax) return [-1];

  const answer = Array(n).fill(baseMax);
  const rest = s % n;
  for (let i = 0; i < rest; i++) answer[answer.length - 1 - i]++;

  return answer;
}
