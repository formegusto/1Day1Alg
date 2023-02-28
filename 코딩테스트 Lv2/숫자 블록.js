/*
제약사항 있음요
1부터 10,000,000까지의 숫자가 적힌 블록들을 이용해
*/
function getDivisor(n) {
  let max = 0;
  for (let i = 1; i <= Math.sqrt(n); i++) {
    if (!(n % i) && i !== n) {
      max = i;
      const _max = n / i;
      if (_max <= 1e7 && _max > max && _max !== n) return _max;
    }
  }

  return max;
}

function solution(begin, end) {
  let answer = [];

  for (let i = begin; i <= end; i++) answer.push(getDivisor(i));

  return answer;
}

console.log(solution(100000014, 100000016));
console.log(solution(3, 160));
