function isPrime(n) {
  if (n <= 2) return true;
  if (n % 2 === 0) return false;

  for (let i = 3; i <= Math.sqrt(n); i++) if (n % i === 0) return false;

  return true;
}

function solution(n) {
  let answer = 0;

  for (let i = 1; i <= n; i++) {
    if (!isPrime(i)) answer++;
  }

  return answer;
}

// 이러시는 이유가 있을거 아니에요.
