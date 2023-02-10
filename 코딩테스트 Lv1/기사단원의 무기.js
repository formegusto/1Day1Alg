function getDivisors(n) {
  const result = [];

  for (let i = 1; i * i <= n; i++) {
    if (n % i === 0) {
      result.push(i);
      const back = (n / i) >> 0;
      if (back !== i) result.push(back);
    }
  }

  return result;
}

function solution(number, limit, power) {
  let answer = 0;

  for (let i = 1; i <= number; i++) {
    const divisors = getDivisors(i);
    if (divisors.length > limit) answer += power;
    else answer += divisors.length;
  }

  return answer;
}

solution(5, 3, 2);
