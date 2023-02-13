const BONUSDICT = {
  S: 1,
  D: 2,
  T: 3,
};

const OPTIONS = {
  "*": [2, 2],
  "#": [1, -1],
};

/**
 *
 * @param {string} dartResult
 * @returns {number}
 */
function solution(dartResult) {
  let answer = 0;
  const scores = [];
  let dr = 0;
  for (let i = 0; i < 3; i++) {
    let score = "";
    let bonus = "";
    let option = "";
    // score parsing
    while ("0" <= dartResult[dr] && "9" >= dartResult[dr])
      score += dartResult[dr++];

    // bonus parsing
    bonus += dartResult[dr++];

    // option parsing
    if (
      dr < dartResult.length &&
      !("0" <= dartResult[dr] && "9" >= dartResult[dr])
    )
      option += dartResult[dr++];

    // calc score
    scores.push(score ** BONUSDICT[bonus]);
    if (option) {
      const [range, sig] = OPTIONS[option];
      for (let i = scores.length - 1; i >= 0 && i >= scores.length - range; i--)
        scores[i] *= sig;
    }
  }

  return scores.reduce((acc, cur) => acc + cur, 0);
}
// 이거 정규화 공부하고 다시 오기

console.log(solution("1S2D*3T"), "\n");
console.log(solution("1D2S#10S"), "\n");
