const getMeanScore = (arr) => (arr[0] + arr[1]) / 2;

function solution(score) {
  const answer = [];

  for (let i = 0; i < score.length; i++) {
    let myMean = getMeanScore(score[i]);
    let rank = 1 + score.filter((v) => getMeanScore(v) > myMean).length;
    answer.push(rank);
  }

  return answer;
}
