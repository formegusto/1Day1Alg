function getDivisors(num) {
  const result = [];

  for (let i = 1; i <= Math.sqrt(num); i++) {
    if (!(num % i)) {
      result.push(i);
      if (num / i !== i) result.push(num / i);
    }
  }

  return result;
}

function solution(left, right) {
  var answer = 0;

  for (let i = left; i <= right; i++) {
    const divisors = getDivisors(i);
    if (divisors.length % 2) answer -= i;
    else answer += i;
  }

  return answer;
}
