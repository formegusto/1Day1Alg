function solution(n) {
  for (let i = 1; i <= Math.sqrt(n); i++) if (i ** 2 === n) return (i + 1) ** 2;

  return -1;
}
