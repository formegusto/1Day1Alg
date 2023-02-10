const TYPES = ["RT", "CF", "JM", "AN"];

function solution(survey, choices) {
  let answer = "";

  // 1. 설문 점수 정리
  const table = {};
  for (let i = 0; i < survey.length; i++) {
    const [neg, pos] = survey[i].split("");
    let score = 4 - choices[i];

    if (score !== 0) {
      let key = neg;
      if (score < 0) {
        key = pos;
        score *= -1;
      }
      if (table[key]) table[key] += score;
      else table[key] = score;
    }
  }

  // 2. 성향 파악
  for (let i = 0; i < TYPES.length; i++) {
    const [type1, type2] = TYPES[i].split("");

    const score1 = table[type1] ? table[type1] : 0;
    const score2 = table[type2] ? table[type2] : 0;

    if (score1 > score2) answer += type1;
    else if (score1 < score2) answer += type2;
    else answer += type1 > type2 ? type2 : type1;
  }

  return answer;
}
