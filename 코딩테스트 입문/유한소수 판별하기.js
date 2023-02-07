function solution(a, b) {
  // 1. 최대공약수
  let gcd = 1;
  for (let i = 2; i <= Math.min(a, b); i++) {
    if (!(a % i) && !(b % i)) gcd = i;
  }

  // 2. 기약분수 분모
  let bgcf = b / gcd;

  // 3. 소인수분해
  while (!(bgcf % 2)) bgcf /= 2;
  for (let i = 3; i <= bgcf; i += 2) {
    if (!(bgcf % i) && i !== 5) return 2;
    while (!(bgcf % i)) bgcf /= i;
  }

  return bgcf === 1 ? 1 : 2;
}
