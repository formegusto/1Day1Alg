function collatz(n) {
  const result = [n];
  while (n > 1) {
    if (!(n % 2)) n /= 2;
    else n = n * 3 + 1;
    result.push(n);
  }
  return result;
}

function solution(k, ranges) {
  let answer = [];

  // 1. get collatz
  const yList = collatz(k);
  const collatzCnt = yList.length - 1;

  // 2. 누적분
  const culCal = [0];
  for (let i = 1; i < yList.length; i++) {
    const area = (yList[i - 1] + yList[i]) / 2;
    culCal.push(culCal[i - 1] + area);
  }

  for (let i = 0; i < ranges.length; i++) {
    let [start, end] = ranges[i];
    end = collatzCnt + end;
    if (end && start === end) answer.push(0);
    else if (start > end) answer.push(-1);
    else answer.push(culCal[end] - culCal[start]);
  }

  return answer;
}

console.log(
  solution(5, [
    [0, 0],
    [0, -1],
    [2, -3],
    [3, -3],
    [0, -100],
    [0, -4],
    [0, -5],
    [0, -6],
    [1, 0],
    [1, -1],
    [1, -5],
  ])
);
