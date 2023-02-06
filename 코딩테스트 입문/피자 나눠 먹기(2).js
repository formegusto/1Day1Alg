function solution(n) {
  let i = 1;
  while (true) {
    let piece = (6 * i) / n;
    if (piece === piece >> 0) return i;
    i++;
  }
}
