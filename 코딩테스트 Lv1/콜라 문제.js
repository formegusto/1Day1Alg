function solution(a, b, n) {
  let answer = 0;

  while (true) {
    const receiveCount = Math.floor(n / a) * b;
    if (!receiveCount) break;
    const restCount = n % a;

    n = receiveCount + restCount;
    answer += receiveCount;
  }

  return answer;
}

console.log(solution(2, 1, 20));

/*
신박한 답이 존재합니다!
*/
