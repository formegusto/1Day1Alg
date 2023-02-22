// 결과를 미리 map에 저장해놨다가 쓰는 방식
// 미리 속하는 멤버를 저장해두고,
// 반복문의 횟수를 줄인다.
function solution(weights) {
  let answer = 0;
  let wMap = {};
  let pMap = {};

  for (let i = 0; i < weights.length; i++) {
    for (let d = 2; d <= 4; d++) {
      const v = wMap[weights[i] * d];
      if (v) {
        for (let k = 0; k < v.length; k++) {
          if (pMap[v[k]] !== i && pMap[i] !== v[k]) {
            pMap[v[k]] = i;
            answer++;
          }
        }
        v.push(i);
      } else {
        wMap[weights[i] * d] = [i];
      }
    }
  }

  return answer;
}

solution([100, 180, 360, 100, 270]);
