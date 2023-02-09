function solution(n) {
  let answer = 0;

  for (let i = 0; i <= n; i++) {
    if (!(n % i)) answer += i;
  }

  return answer;
}

/*
미친사람 있음
*/
