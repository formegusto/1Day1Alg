function solution(n, m) {
  // 최대공약수 (gcd)
  let gcd;
  for (let i = 1; i <= Math.min(n, m); i++) if (!(n % i) && !(m % i)) gcd = i;

  // 최소공배수 (lcm)
  let lcm = 1;
  while (true) {
    if (!(lcm % n) && !(lcm % m)) break;
    lcm++;
  }

  return [gcd, lcm];
}

/*
이거 for문 엄청난 거 있음.
유클리드 호제법 공부하기
// https://velog.io/@devjade/JavaScript%EB%A1%9C-%EC%B5%9C%EB%8C%80%EA%B3%B5%EC%95%BD%EC%88%98GCD-%EC%B5%9C%EC%86%8C%EA%B3%B5%EB%B0%B0%EC%88%98LCM-%EA%B5%AC%ED%95%98%EA%B8%B0
*/
