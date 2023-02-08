function solution(n, t) {
  return Array(t)
    .fill(0)
    .reduce((acc) => acc * 2, n);
}

/*
function solution(n, t) {
  return n << t;
}
*/
