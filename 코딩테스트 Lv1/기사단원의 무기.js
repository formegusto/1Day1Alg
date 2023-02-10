function getPower(n, limit, limitPower) {
  let power = 0;
  for (let i = 1; i <= Math.floor(n ** 0.5) + 1; i++) {
    if (n % i === 0) {
      power++;
    }
    if (i !== Math.floor(n / i)) {
      power++;
    }
    if (power > limit) {
      power = limitPower;
      break;
    }
  }

  return power;
}

function solution(number, limit, power) {
  let answer = 0;

  for (let i = 1; i <= number; i++) {
    answer += getPower(i, limit, power);
    console.log(i, answer);
  }

  return answer;
}
