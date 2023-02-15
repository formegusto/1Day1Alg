function solution(n) {
  let answer = 0;
  for (let i = 1; i <= n; i++) {
    if (!(n % i) && i % 2) answer++;
  }
  return answer;
}

/*
순차적으로 더해져서 만들어지는 수는
약수 중에서 홀수 갯수에 속한다.
*/
