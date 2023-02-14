function solution(N, stages) {
  let answer = [];

  for (let i = 1; i <= N; i++) {
    const challengers = stages.filter((v) => v >= i);
    const loser = challengers.filter((v) => v === i);

    answer.push([i, loser.length / challengers.length]);
  }

  return answer.sort((a, b) => b[1] - a[1]).map((v) => v[0]);
}
