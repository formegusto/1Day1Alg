function solution(n) {
  for (let i = 1; i ** 2 <= n; i++) {
    if (i ** 2 === n) return 1;
  }
  return 2;
}

/*
function solution(n) {
  return Number.isInteger(Math.sqrt(n)) ? 1 : 2;
}
*/
