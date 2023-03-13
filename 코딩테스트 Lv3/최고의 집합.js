// https://velog.io/@longroadhome/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-LV.3-%EC%B5%9C%EA%B3%A0%EC%9D%98-%EC%A7%91%ED%95%A9-JS
function solution(n, s) {
  const baseMax = Math.floor(s / n);
  if (!baseMax) return [-1];

  const answer = Array(n).fill(baseMax);
  const rest = s % n;
  for (let i = 0; i < rest; i++) answer[answer.length - 1 - i]++;

  return answer;
}
