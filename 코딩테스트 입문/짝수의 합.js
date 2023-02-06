function solution(n) {
  return Array(Math.floor(n / 2) + 1)
    .fill(0)
    .reduce((acc, _, idx) => acc + idx * 2, 0);
}

function solution2(n) {
  var half = Math.floor(n / 2);
  return half * (half + 1);
}
