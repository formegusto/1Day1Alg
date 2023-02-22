function getGCD(num1, num2) {
  let gcd = 1;

  for (let i = 2; i <= Math.min(num1, num2); i++) {
    if (num1 % i === 0 && num2 % i === 0) gcd = i;
  }

  return gcd;
}

function solution(weights) {
  weights.sort((a, b) => a - b);

  for (let i = 0; i < weights.length; i++) {
    for (let j = i + 1; j < weights.length; j++) {
      getGCD(weights[i], weights[j]);
    }
  }
}

solution([100, 180, 360, 100, 270]);
