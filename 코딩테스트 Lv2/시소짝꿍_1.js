// 일반적인 방식
const DIS = [
  [2, 3],
  [2, 4],
  [3, 4],
  [4, 3],
  [4, 2],
  [3, 2],
];

function solution(weights) {
  let answer = 0;
  for (let i = 0; i < weights.length; i++) {
    for (let j = i + 1; j < weights.length; j++) {
      if (weights[i] === weights[j]) {
        answer++;
        continue;
      }
      for (let d = 0; d < 6; d++) {
        const [d1, d2] = DIS[d];
        if (weights[i] * d1 === weights[j] * d2) {
          answer++;
          break;
        }
      }
    }
  }

  return answer;
}
