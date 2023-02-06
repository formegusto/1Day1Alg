function solution(dots) {
  const leans = [];

  let i = 0,
    j = 0;
  while (dots[i]) {
    j = i + 1;
    while (dots[j]) {
      const lean = (dots[i][1] - dots[j][1]) / (dots[i][0] - dots[j][0]);
      if (leans.includes(lean)) return 1;
      leans.push(lean);
      j++;
    }
    i++;
  }

  return 0;
}
