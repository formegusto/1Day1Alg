function solution(dots) {
  // x 길이 구하기
  dots.sort((a, b) => a[1] - b[1]);
  const x = Math.abs(dots[0][0] - dots[1][0]);

  // y 길이 구하기
  dots.sort((a, b) => a[0] - b[0]);
  const y = Math.abs(dots[0][1] - dots[1][1]);

  return x * y;
}
