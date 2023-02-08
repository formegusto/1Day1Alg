function isDivisor(n, i) {
  const div = n / i;
  return !(div - (div >> 0));
}

function solution(n) {
  return Array.from(
    {
      length: n,
    },
    (_, i) => i + 1
  ).filter((v) => isDivisor(n, v));
}
