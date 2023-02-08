function solution(hp) {
  let answer = 0;

  let a = 0;
  let ants = [5, 3, 1];
  while (hp) {
    answer += Math.floor(hp / ants[a]);
    hp %= ants[a];
    a++;
  }

  return answer;
}
