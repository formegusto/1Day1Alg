function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}

function solution(balls, share) {
  let n = balls;
  let m = share;
  return Math.round(factorial(n) / (factorial(n - m) * factorial(m)));
}
