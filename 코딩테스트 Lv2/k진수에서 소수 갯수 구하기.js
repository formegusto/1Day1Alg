function isPrime(n) {
  if (n <= 1) return false;
  if (n === 2) return true;
  if (!(n % 2)) return false;

  for (let i = 3; i <= Math.sqrt(n); i++) if (!(n % i)) return false;

  return true;
}

function solution(n, k) {
  const kNum = n.toString(k);
  const splits = kNum.split("0");

  let answer = 0;
  for (let i = 0; i < splits.length; i++) {
    if (splits[i] === "") continue;
    if (isPrime(Number(splits[i]))) answer++;
  }

  return answer;
}
