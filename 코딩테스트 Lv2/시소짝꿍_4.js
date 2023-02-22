// 경우의 수의 숫자를 저장하는 방식
// (1,1) (2,3) (2,4) (3,4) (4,3) (4,2) (3,2)
const RATE = [1, 3 / 2, 2, 4 / 3];

function solution(weights) {
  weights.sort((a, b) => b - a);

  let answer = 0;
  const rObj = {};
  for (let i = 0; i < weights.length; i++) {
    for (let r = 0; r < 4; r++) {
      let s = weights[i] * RATE[r];
      if (rObj[s]) answer += rObj[s];
    }
    if (!rObj[weights[i]]) rObj[weights[i]] = 1;
    else rObj[weights[i]]++;
  }

  return answer;
}
